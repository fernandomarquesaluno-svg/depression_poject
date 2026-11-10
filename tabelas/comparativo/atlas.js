
"use strict";
const STATE={all:[],filtered:[],selected:[],filters:{query:"",language:"Todos",condition:"Todas",group:"Todos",year:"Todos",access:"Todos"}};
const $=(s,root=document)=>root.querySelector(s),$$=(s,root=document)=>[...root.querySelectorAll(s)];
const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const groupOrder=["Clássicos","Transformers","LLMs","Recursos","Revisões","Tese/TCC","Outras"];
const colors={ "PT-BR":"#ffc785","Inglês":"#7df4db","Misto":"#b7adff","Coreano":"#b7adff","Diversos/NI":"#b7adff"};
let previousFocus=null;
function yearData(){return Array.from({length:7},(_,i)=>({year:2020+i,count:STATE.all.filter(s=>s.year===2020+i).length}));}
function filterStudies(){
 const f=STATE.filters;
 STATE.filtered=STATE.all.filter(s=>{
  const text=[s.title,s.condition,s.source,s.dataset,s.labeling,s.methods,s.results,s.limitations].join(" ").toLocaleLowerCase("pt-BR");
  const q=!f.query||text.includes(f.query.toLocaleLowerCase("pt-BR"));
  return q&&(f.language==="Todos"||s.language===f.language)&&(f.condition==="Todas"||s.conditions.includes(f.condition))&&(f.group==="Todos"||s.group===f.group)&&(f.year==="Todos"||s.year===Number(f.year))&&(f.access==="Todos"||s.datasetAudit?.accessStatus===f.access);
 });
 renderCards();renderMap();renderTimeline();
 $("#countResults").textContent=STATE.filtered.length+" de "+STATE.all.length+" referências encontradas";
}
function renderTimeline(){
 const years=yearData();const max=Math.max(...years.map(x=>x.count),1);
 $("#timeline").innerHTML=years.map(({year,count})=>{
  const active=STATE.filters.year===String(year);
  return '<button type="button" class="time-year'+(active?' active':'')+'" data-year="'+year+'" aria-pressed="'+active+'" aria-label="'+year+': '+count+' referências; filtrar ano"><b>'+year+'</b><strong>'+count+'</strong><small>'+((count/max)*100).toFixed(0)+'% do maior ano</small></button>';
 }).join("");
}
function renderMap(){
 const width=1100,height=565,ox=170,ex=1045,top=62,row=69;
 const x=year=>ox+(year-2020)*(ex-ox)/6;
 const y=group=>top+groupOrder.indexOf(group)*row+12;
 let out='<svg class="constellation" viewBox="0 0 '+width+' '+height+'" role="img" aria-label="Mapa interativo: cada ponto representa uma referência, distribuída por ano no eixo horizontal e agrupamento metodológico no eixo vertical">';
 for(let i=0;i<7;i++){
  const year=2020+i;const xx=x(year);
  out+='<line class="grid-line" x1="'+xx+'" y1="32" x2="'+xx+'" y2="523"/><text x="'+xx+'" y="551" text-anchor="middle">'+year+'</text>';
 }
 groupOrder.forEach(g=>{
  const yy=y(g);out+='<line class="grid-line" x1="'+ox+'" y1="'+yy+'" x2="'+ex+'" y2="'+yy+'"/><text x="150" y="'+(yy+5)+'" text-anchor="end">'+escapeHTML(g)+'</text>';
 });
 const bucket={};
 STATE.all.forEach(s=>{
  const key=s.year+"_"+s.group;const n=bucket[key]||0;bucket[key]=n+1;
  const offsets=[[0,0],[-15,-12],[15,12],[-15,13],[15,-13],[-30,0],[30,0],[-29,-17],[29,17],[0,23],[0,-23],[-28,24],[28,-24]];
  const [dx,dy]=offsets[n%offsets.length];
  const active=STATE.filtered.some(t=>t.id===s.id);
  out+='<circle class="node'+(active?'':' dimmed')+'" cx="'+(x(s.year)+dx)+'" cy="'+(y(s.group)+dy)+'" r="9" tabindex="0" role="button" aria-label="'+escapeHTML(s.title)+'" data-id="'+s.id+'" fill="'+colors[s.language]+'"><title>'+escapeHTML(s.title)+'</title></circle>';
 });
 $("#map").innerHTML=out+'</svg>';
}
const accessLabels={publico:"Público",controlado:"Controlado",restrito:"Restrito",parcial:"Acesso parcial",nao_confirmado:"Acesso não confirmado",nao_aplica:"Revisão / N.A."};
function createTag(t,attention=false){return '<span class="tag'+(attention?' attention':'')+'">'+escapeHTML(t)+'</span>';}
function renderCards(){
 if(!STATE.filtered.length){$("#studyCards").innerHTML='<div class="empty"><h3>Nenhuma referência encontrada</h3><p>Modifique os filtros para ampliar o recorte.</p></div>';return;}
 $("#studyCards").innerHTML=STATE.filtered.map((s,i)=>{
  const inComparison=STATE.selected.includes(s.id);
  return '<article class="study" style="animation-delay:'+Math.min(i*24,200)+'ms"><div class="num">ESTUDO '+String(s.id).padStart(2,"0")+' / '+s.year+'</div><h3>'+escapeHTML(s.title)+'</h3><div class="tags">'+createTag(s.language)+createTag(s.group)+createTag(accessLabels[s.datasetAudit?.accessStatus]||"Sem auditoria",s.datasetAudit?.accessStatus==="nao_confirmado"||s.datasetAudit?.accessStatus==="restrito")+(s.pending.length?createTag('Volume/métrica pendente',true):'')+'</div><p class="context">'+escapeHTML(s.condition)+'</p><div class="study-actions"><button class="small-btn" data-action="details" data-id="'+s.id+'">Ficha técnica</button><button class="small-btn" aria-pressed="'+inComparison+'" data-action="compare" data-id="'+s.id+'">'+(inComparison?'Remover':'Comparar +')+'</button></div></article>';
 }).join("");
}
function showDetails(id){
 const s=STATE.all.find(x=>x.id===Number(id));if(!s)return;
 previousFocus=document.activeElement;
 $("#modalTitle").textContent=s.title;
 $("#modalSubtitle").innerHTML=createTag(String(s.year))+createTag(s.language)+createTag(s.type)+(s.pending.length?createTag("Informações não confirmadas",true):"");
 const fields=[["Condição investigada",s.condition],["Tipo de texto e idioma",s.source],["Dataset e volumetria",s.dataset],["Nome oficial / identificação do dataset",s.datasetAudit?.name||"Não documentado"],["Plataforma ou ambiente de coleta",s.datasetAudit?.platform||"Não documentado"],["Disponibilidade dos dados",accessLabels[s.datasetAudit?.accessStatus]||"Não avaliado"],["Evidência sobre acesso",s.datasetAudit?.accessEvidence||"Não documentado"],["Observação de reutilização e limitações",s.datasetAudit?.reuseAndCaveat||"Não documentado"],["Estratégia de rotulagem",s.labeling],["Métodos de IA e PLN",s.methods],["Métricas e resultados",s.results],["Limitações e relação com o projeto",s.limitations]];
 $("#detailData").innerHTML=fields.map((f,i)=>'<div class="detail-item '+(i>1?'wide':'')+'"><h3>'+escapeHTML(f[0])+'</h3><p>'+escapeHTML(f[1])+'</p></div>').join("");
 $("#detailLinks").innerHTML='<a class="action" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(s.url)+'">Abrir publicação ↗</a>'+(s.datasetAudit?.datasetUrl?'<a class="action secondary" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(s.datasetAudit.datasetUrl)+'">Página dos dados / acesso ↗</a>':'')+(s.datasetAudit?.evidenceUrl&&s.datasetAudit.evidenceUrl!==s.datasetAudit.datasetUrl?'<a class="action secondary" target="_blank" rel="noopener noreferrer" href="'+escapeHTML(s.datasetAudit.evidenceUrl)+'">Fonte de verificação ↗</a>':'')+'<button class="action secondary" data-action="compare" data-id="'+s.id+'">Adicionar à comparação</button>';
 $("#modal").classList.add("open");$("#modal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";$(".close").focus();
}
function closeModal(){
 $("#modal").classList.remove("open");$("#modal").setAttribute("aria-hidden","true");document.body.style.overflow="";
 if(previousFocus?.isConnected)previousFocus.focus();
}
function toggleCompare(id){
 id=Number(id);if(STATE.selected.includes(id)){STATE.selected=STATE.selected.filter(x=>x!==id);}else{
 if(STATE.selected.length>=2)STATE.selected.shift();STATE.selected.push(id);
 }
 renderComparison();renderCards();
}
function renderComparison(){
 const slots=STATE.selected.map(id=>STATE.all.find(x=>x.id===id));
 $("#slotA").innerHTML=slots[0]?'<span class="slot-label">REFERÊNCIA A</span><h4>'+escapeHTML(slots[0].title)+'</h4><p>'+slots[0].year+' · '+escapeHTML(slots[0].language)+'</p>':'<span class="slot-label">REFERÊNCIA A</span><p>Selecione uma publicação em qualquer ficha.</p>';
 $("#slotB").innerHTML=slots[1]?'<span class="slot-label">REFERÊNCIA B</span><h4>'+escapeHTML(slots[1].title)+'</h4><p>'+slots[1].year+' · '+escapeHTML(slots[1].language)+'</p>':'<span class="slot-label">REFERÊNCIA B</span><p>Selecione uma segunda publicação para confrontar os oito campos.</p>';
 $("#slotA").classList.toggle("selected",!!slots[0]);$("#slotB").classList.toggle("selected",!!slots[1]);
 $("#comparePrompt").textContent=slots.length===2?"Comparação qualitativa entre duas referências.":"Escolha dois estudos nos cartões abaixo.";
 const grid=$("#comparisonFields");
 if(slots.length!==2){grid.innerHTML="";$("#compareNotice").hidden=true;return;}
 const pairs=[["Objeto e problema","condition"],["Origem, fonte e idioma","source"],["Dataset / volumetria","dataset"],["Estratégia de rotulagem","labeling"],["Métodos computacionais","methods"],["Dataset e acesso","datasetAudit"],["Métricas e resultados","results"],["Limitações metodológicas","limitations"]];
 grid.innerHTML=pairs.map(([name,key])=>'<div class="compare-field"><div class="field-name">'+name+'</div><div class="compare-values"><p>'+escapeHTML(key==="datasetAudit"?(accessLabels[slots[0].datasetAudit?.accessStatus]||"Não avaliado")+" — "+(slots[0].datasetAudit?.name||"") :slots[0][key])+'</p><p>'+escapeHTML(key==="datasetAudit"?(accessLabels[slots[1].datasetAudit?.accessStatus]||"Não avaliado")+" — "+(slots[1].datasetAudit?.name||"") :slots[1][key])+'</p></div></div>').join("");
 $("#compareNotice").hidden=false;
}
function renderSummary(){
 const pt=STATE.all.filter(s=>s.language==="PT-BR").length;
 const mixed=STATE.all.filter(s=>s.language==="Misto").length;
 const pending=STATE.all.filter(s=>s.pending.length).length;
 $("#heroCount").textContent=STATE.all.length;
 $("#pendingCount").textContent=pending;
 $("#ptCount").textContent=pt;
 $("#insightPt").textContent=pt+" referências identificadas como exclusivamente PT-BR, além de "+mixed+" com fontes mistas PT/EN. A distribuição é bibliográfica, não amostral.";
 $("#introData").textContent=STATE.all.length+" referências, de "+Math.min(...STATE.all.map(x=>x.year))+" a "+Math.max(...STATE.all.map(x=>x.year))+", integradas a partir da tabela técnica existente.";
 $("#auditList").innerHTML=STATE.all.filter(s=>s.pending.length).map(s=>'<li><b>'+escapeHTML(s.title)+'</b><div>'+escapeHTML(s.pending.join(" · "))+'</div></li>').join("")||"<li>Nenhuma marcação detectada automaticamente.</li>";
 const bars=groupOrder.map(g=>({name:g,count:STATE.all.filter(x=>x.group===g).length}));const max=Math.max(...bars.map(b=>b.count),1);
 $("#methodBars").innerHTML=bars.map(b=>'<div class="bar-row"><span>'+escapeHTML(b.name)+'</span><div class="bar-track"><span style="width:'+(b.count/max*100).toFixed(1)+'%"></span></div><b>'+b.count+'</b></div>').join("");
 $("#langFilter").innerHTML='<option value="Todos">Todos os idiomas</option>'+[...new Set(STATE.all.map(x=>x.language))].sort().map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
 $("#yearFilter").innerHTML='<option value="Todos">Todos os anos</option>'+yearData().filter(x=>x.count).map(x=>'<option value="'+x.year+'">'+x.year+'</option>').join("");
 $("#accessFilter").innerHTML='<option value="Todos">Todos os tipos</option>'+Object.entries(accessLabels).map(([k,v])=>'<option value="'+k+'">'+escapeHTML(v)+'</option>').join("");
 $("#groupFilter").innerHTML='<option value="Todos">Todas as abordagens</option>'+groupOrder.map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
 $("#conditionFilter").innerHTML='<option value="Todas">Todas as condições</option>'+[...new Set(STATE.all.flatMap(s=>s.conditions))].sort().map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
}
function setup(){
 $("#query").addEventListener("input",e=>{STATE.filters.query=e.target.value;filterStudies()});
 [["langFilter","language"],["groupFilter","group"],["conditionFilter","condition"],["yearFilter","year"],["accessFilter","access"]].forEach(([key,prop])=>{
  $("#"+key).addEventListener("change",e=>{STATE.filters[prop]=e.target.value;filterStudies()});
 });
 $("#clearFilters").addEventListener("click",()=>{
  STATE.filters={query:"",language:"Todos",condition:"Todas",group:"Todos",year:"Todos",access:"Todos"};
  $("#query").value="";["langFilter","groupFilter","conditionFilter","yearFilter","accessFilter"].forEach(key=>$("#"+key).selectedIndex=0);
  filterStudies();
 });
 $("#timeline").addEventListener("click",e=>{
  const b=e.target.closest("[data-year]");if(!b)return;
  STATE.filters.year=STATE.filters.year===b.dataset.year?"Todos":b.dataset.year;
  $("#yearFilter").value=STATE.filters.year;filterStudies();$("#estudos").scrollIntoView({block:"start"});
 });
 $("#studyCards").addEventListener("click",e=>{
  const b=e.target.closest("button[data-action]");if(!b)return;
  if(b.dataset.action==="details")showDetails(b.dataset.id);
  if(b.dataset.action==="compare")toggleCompare(b.dataset.id);
 });
 $("#map").addEventListener("click",e=>{
  const n=e.target.closest(".node");if(n)showDetails(n.dataset.id);
 });
 $("#map").addEventListener("keydown",e=>{
  if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("node")){e.preventDefault();showDetails(e.target.dataset.id);}
 });
 $("#map").addEventListener("mouseover",e=>{
  const n=e.target.closest(".node");if(!n)return;
  const s=STATE.all.find(s=>s.id===Number(n.dataset.id));const t=$("#mapTooltip");
  t.innerHTML='<b>'+escapeHTML(s.title)+'</b> · '+s.year+' · '+escapeHTML(s.language)+'<br><small>Clique no ponto para explorar os dados técnicos.</small>';t.classList.add("visible");
 });
 $("#map").addEventListener("mouseout",e=>{if(e.target.closest(".node"))$("#mapTooltip").classList.remove("visible")});
 $("#clearComparison").addEventListener("click",()=>{STATE.selected=[];renderComparison();renderCards()});
 $("#modal").addEventListener("click",e=>{if(e.target.id==="modal"||e.target.classList.contains("close"))closeModal();const b=e.target.closest('[data-action="compare"]');if(b){toggleCompare(b.dataset.id);closeModal()}});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#modal").classList.contains("open"))closeModal()});
 $("#downloadData").href="./estudos.json";
 const obs="IntersectionObserver" in window?new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})},{threshold:.08}):null;
 $$(".reveal").forEach(e=>obs?obs.observe(e):e.classList.add("visible"));
}
(async function(){
 try{
  const res=await fetch("./estudos.json",{cache:"no-cache"});
  if(!res.ok)throw new Error("HTTP "+res.status);
  const data=await res.json();
  if(!Array.isArray(data.studies)||data.studies.length!==33)throw new Error("Número de referências inesperado.");
  STATE.all=data.studies;
  setup();renderSummary();filterStudies();renderComparison();
  $("#appStatus").textContent="Base sincronizada: "+STATE.all.length+" referências com oito campos técnicos.";
  $("#appStatus").classList.add("visually-hidden");
 }catch(err){
  $("#appStatus").innerHTML='Não foi possível carregar a base de referências. <a href="../tabela_comparativa_tecnica.md">Acesse a tabela bibliográfica original</a> ou atualize a página.';
  console.error("Falha na inicialização do atlas:",err);
 }
})();
