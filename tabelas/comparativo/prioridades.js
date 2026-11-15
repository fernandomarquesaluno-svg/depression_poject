"use strict";
(function(root){
 const DEFINITIONS=[
  {id:"condition",label:"Condição investigada",desc:"Inclui condições declaradas na ficha, mesmo quando não são a tarefa principal.",weight:5,enabled:true,options:["Depressão","Ansiedade","Estresse","Risco suicida","Outras/geral"]},
  {id:"method",label:"Família de métodos",desc:"Família efetivamente utilizada no estudo, inclusive como baseline.",weight:4,enabled:true,options:["LLMs","Transformers","ML clássico","Análise lexical","Grafos/GNNs","Multimodal/fusão"]},
  {id:"language",label:"Texto em português brasileiro",desc:"Considera somente fichas classificadas como PT-BR (não fontes mistas).",weight:3,enabled:false},
  {id:"access",label:"Dataset com acesso público",desc:"Exige status explicitamente público; acesso parcial ou condicionado não pontua.",weight:4,enabled:true},
  {id:"empirical",label:"Pesquisa empírica",desc:"Prioriza experimentos, separando-os de revisões e artigos de recurso.",weight:3,enabled:true},
  {id:"datasetLink",label:"Link para o dataset",desc:"Exige URL registrada na ficha; um link não garante acesso irrestrito.",weight:2,enabled:false}
 ];
 const escapeHTML=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 const makeDefault=()=>Object.fromEntries(DEFINITIONS.map(d=>[d.id,{enabled:d.enabled,weight:d.weight,value:d.options?.[0]??null}]));
 function matches(study,id,value){
  switch(id){
   case "condition":return (study.conditions||[]).includes(value);
   case "method":return (study.analysisTaxonomy?.methodFamilies||[]).includes(value);
   case "language":return study.language==="PT-BR";
   case "access":return study.datasetAudit?.accessStatus==="publico";
   case "empirical":return study.analysisTaxonomy?.publicationKind==="empirico";
   case "datasetLink":return /^https?:\/\//i.test(study.datasetAudit?.datasetUrl||"");
   default:return false;
  }
 }
 function calculateRanking(studies,preferences){
  const active=DEFINITIONS.filter(d=>preferences[d.id]?.enabled);
  const totalWeight=active.reduce((sum,d)=>sum+Number(preferences[d.id].weight),0);
  if(!totalWeight)return [];
  return studies.map(study=>{
   const criteria=active.map(d=>({
    id:d.id,label:d.options?preferences[d.id].value:d.label,
    weight:Number(preferences[d.id].weight),
    pass:matches(study,d.id,preferences[d.id].value)
   }));
   const points=criteria.reduce((sum,c)=>sum+(c.pass?c.weight:0),0);
   return {study,criteria,points,totalWeight,score:Math.round(points/totalWeight*100)};
  }).sort((a,b)=>b.points-a.points||a.study.title.localeCompare(b.study.title,"pt-BR"));
 }
 if(typeof module!=="undefined"&&module.exports)module.exports={DEFINITIONS,makeDefault,matches,calculateRanking};
 if(!root.document)return;
 const document=root.document,controls=document.getElementById("priorityControls");
 if(!controls)return;
 let studies=[],preferences=makeDefault(),showAll=false;
 const $=id=>document.getElementById(id);
 function renderControls(){
  controls.innerHTML=DEFINITIONS.map(d=>{
   const p=preferences[d.id];
   return '<div class="priority-control'+(p.enabled?' enabled':'')+'" data-criterion="'+d.id+'">'+
    '<label class="priority-check"><input type="checkbox" data-enable="'+d.id+'"'+(p.enabled?' checked':'')+'><span>'+escapeHTML(d.label)+'</span></label>'+
    '<p>'+escapeHTML(d.desc)+'</p>'+
    (d.options?'<label class="priority-option">Preferência<select data-option="'+d.id+'"'+(p.enabled?'':' disabled')+'>'+d.options.map(o=>'<option value="'+escapeHTML(o)+'"'+(p.value===o?' selected':'')+'>'+escapeHTML(o)+'</option>').join('')+'</select></label>':'')+
    '<div class="priority-weight"><label for="weight-'+d.id+'">Peso <output id="value-'+d.id+'">'+p.weight+'</output>/5</label><input id="weight-'+d.id+'" data-weight="'+d.id+'" aria-label="Importância: '+escapeHTML(d.label)+'" type="range" min="1" max="5" step="1" value="'+p.weight+'"'+(p.enabled?'':' disabled')+'></div></div>';
  }).join("");
 }
 function renderRanking(){
  const ranked=calculateRanking(studies,preferences);
  const active=DEFINITIONS.filter(d=>preferences[d.id].enabled);
  if(!ranked.length){
   $("priorityExplanation").textContent="Selecione ao menos uma característica para calcular a aderência.";
   $("priorityResults").innerHTML='<div class="priority-empty">Nenhum critério ativo. Marque uma opção acima para construir seu ranking.</div>';
   $("priorityShowAll").hidden=true;return;
  }
  const total=active.reduce((sum,d)=>sum+preferences[d.id].weight,0),visible=showAll?ranked:ranked.slice(0,10);
  $("priorityExplanation").textContent=active.length+" critérios ativos · "+total+" pontos de peso possíveis · pontuação = soma dos pesos atendidos ÷ soma dos pesos selecionados × 100. Empates em ordem alfabética.";
  $("priorityResults").innerHTML=visible.map((r,i)=>{
   const match=r.criteria.filter(c=>c.pass),missing=r.criteria.filter(c=>!c.pass);
   return '<article class="priority-result"><div class="priority-result-top"><span class="priority-rank">'+String(i+1).padStart(2,"0")+'</span><div class="priority-result-name"><h4>'+escapeHTML(r.study.title)+'</h4><span>'+r.study.year+' · '+escapeHTML(r.study.language)+' · '+match.length+' de '+r.criteria.length+' critérios atendidos</span></div><strong class="priority-score">'+r.score+'<small>%</small></strong></div>'+
    '<div class="priority-progress" role="img" aria-label="Aderência: '+r.score+' por cento"><span style="width:'+r.score+'%"></span></div>'+
    '<div class="priority-evidence">'+match.map(c=>'<span class="priority-match">✓ '+escapeHTML(c.label)+' (+'+c.weight+')</span>').join('')+missing.map(c=>'<span class="priority-miss">— '+escapeHTML(c.label)+'</span>').join('')+'</div>'+
    '<div class="priority-actions"><button type="button" class="small-btn" data-priority-details="'+r.study.id+'">Ver ficha técnica</button><button type="button" class="small-btn" data-priority-compare="'+r.study.id+'">Comparar +</button></div></article>';
  }).join("");
  $("priorityShowAll").hidden=ranked.length<=10;
  $("priorityShowAll").textContent=showAll?"Mostrar apenas os 10 primeiros":"Mostrar todas as "+ranked.length+" referências";
 }
 function update(){renderControls();renderRanking();}
 controls.addEventListener("change",event=>{
  const el=event.target;
  if(el.dataset.enable)preferences[el.dataset.enable].enabled=el.checked;
  if(el.dataset.option)preferences[el.dataset.option].value=el.value;
  if(el.dataset.weight)preferences[el.dataset.weight].weight=Number(el.value);
  showAll=false;update();
 });
 controls.addEventListener("input",event=>{
  const id=event.target.dataset.weight;if(!id)return;
  preferences[id].weight=Number(event.target.value);
  const display=$("value-"+id);if(display)display.value=String(event.target.value);
  renderRanking();
 });
 $("priorityReset").addEventListener("click",()=>{preferences=makeDefault();showAll=false;update();});
 $("priorityShowAll").addEventListener("click",()=>{showAll=!showAll;renderRanking();});
 $("priorityResults").addEventListener("click",event=>{
  const detail=event.target.closest("[data-priority-details]");
  const compare=event.target.closest("[data-priority-compare]");
  if(detail)root.openAtlasStudyDetails?.(Number(detail.dataset.priorityDetails));
  if(compare){root.addAtlasComparison?.(Number(compare.dataset.priorityCompare));document.querySelector(".comparator")?.scrollIntoView({behavior:"smooth",block:"start"});}
 });
 try{
  const data=JSON.parse($("studiesEmbedded").textContent);
  studies=data.studies||[];
  update();
 }catch(error){$("priorityResults").textContent="Não foi possível preparar o ranking. Consulte as fichas dos estudos.";console.error("Ranking do Atlas:",error);}
})(typeof window!=="undefined"?window:globalThis);
