
"use strict";
const STATE={all:[],filtered:[],selected:[],networkIds:null,filters:{query:"",language:"Todos",condition:"Todas",group:"Todos",year:"Todos",access:"Todos"}};
const $=(s,root=document)=>root.querySelector(s),$$=(s,root=document)=>[...root.querySelectorAll(s)];
const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const groupOrder=["Pesquisa empírica","Dataset/recurso","Revisão/síntese"];
const methodOrder=["Análise lexical","ML clássico","Transformers","LLMs","Grafos/GNNs","Multimodal/fusão"];
const researchKind=s=>({empirico:"Pesquisa empírica",recurso:"Dataset/recurso",sintese:"Revisão/síntese"}[s.analysisTaxonomy?.publicationKind]||"Pesquisa empírica");
const say=v=>v?String(v):"Não confirmado na ficha";
const colors={ "PT-BR":"#ffc785","Inglês":"#7df4db","Misto":"#b7adff","Coreano":"#b7adff","Diversos/NI":"#b7adff"};
let previousFocus=null;
function yearData(){return Array.from({length:7},(_,i)=>({year:2020+i,count:STATE.all.filter(s=>s.year===2020+i).length}));}
function filterStudies(){
 const f=STATE.filters;
 STATE.filtered=STATE.all.filter(s=>{
  const text=[s.title,s.condition,s.source,s.dataset,s.labeling,s.methods,s.results,s.limitations,s.datasetAudit?.name,s.datasetAudit?.platform,s.datasetAudit?.datasetFamily,s.datasetAudit?.sampleUnit,s.datasetAudit?.accessEvidence].join(" ").toLocaleLowerCase("pt-BR");
  const q=!f.query||text.includes(f.query.toLocaleLowerCase("pt-BR"));
  return q&&(f.language==="Todos"||s.language===f.language)&&(f.condition==="Todas"||s.conditions.includes(f.condition))&&(f.group==="Todos"||s.analysisTaxonomy?.methodFamilies?.includes(f.group))&&(f.year==="Todos"||s.year===Number(f.year))&&(f.access==="Todos"||s.datasetAudit?.accessStatus===f.access)&&(!STATE.networkIds||STATE.networkIds.includes(s.id));
 });
 renderCards();renderMap();
 $("#countResults").textContent=STATE.filtered.length+" de "+STATE.all.length+" referências encontradas";
}
function renderMap(){
 const width=1100,height=370,ox=210,ex=1045,top=80,row=102;
 const x=year=>ox+(year-2020)*(ex-ox)/6;
 const y=group=>top+Math.max(0,groupOrder.indexOf(group))*row+12;
 let out='<svg class="constellation" viewBox="0 0 '+width+' '+height+'" role="img" aria-label="Mapa de publicações por ano e natureza da contribuição. A classificação por técnica aparece separadamente no mapa de métodos.">';
 for(let i=0;i<7;i++){
  const year=2020+i;const xx=x(year);
  out+='<line class="grid-line" x1="'+xx+'" y1="36" x2="'+xx+'" y2="318"/><text x="'+xx+'" y="350" text-anchor="middle">'+year+'</text>';
 }
 groupOrder.forEach(g=>{
  const yy=y(g);out+='<line class="grid-line" x1="'+ox+'" y1="'+yy+'" x2="'+ex+'" y2="'+yy+'"/><text x="194" y="'+(yy+5)+'" text-anchor="end">'+escapeHTML(g)+'</text>';
 });
 const bucket={};
 STATE.all.forEach(s=>{
  const kind=researchKind(s);const key=s.year+"_"+kind;const n=bucket[key]||0;bucket[key]=n+1;
  const offsets=[[0,0],[-15,-12],[15,12],[-15,13],[15,-13],[-30,0],[30,0],[-29,-17],[29,17],[0,23],[0,-23],[-28,24],[28,-24]];
  const [dx,dy]=offsets[n%offsets.length];
  const active=STATE.filtered.some(t=>t.id===s.id);
  out+='<circle class="node'+(active?'':' dimmed')+'" cx="'+(x(s.year)+dx)+'" cy="'+(y(kind)+dy)+'" r="9" tabindex="0" role="button" aria-label="'+escapeHTML(s.title)+'" data-id="'+s.id+'" fill="'+colors[s.language]+'"><title>'+escapeHTML(s.title)+'</title></circle>';
 });
 $("#map").innerHTML=out+'</svg>';
}
const accessLabels={publico:"Público",controlado:"Controlado",restrito:"Restrito",parcial:"Acesso parcial",nao_confirmado:"Acesso não confirmado",nao_aplica:"Revisão / N.A."};
function createTag(t,attention=false){return '<span class="tag'+(attention?' attention':'')+'">'+escapeHTML(t)+'</span>';}
function renderCards(){
 if(!STATE.filtered.length){$("#studyCards").innerHTML='<div class="empty"><h3>Nenhuma referência encontrada</h3><p>Modifique os filtros para ampliar o recorte.</p></div>';return;}
 $("#studyCards").innerHTML=STATE.filtered.map((s,i)=>{
  const inComparison=STATE.selected.includes(s.id);
  return '<article class="study" style="animation-delay:'+Math.min(i*24,200)+'ms"><div class="num">ESTUDO '+String(s.id).padStart(2,"0")+' / '+s.year+'</div><h3>'+escapeHTML(s.title)+'</h3><div class="tags">'+createTag(s.language)+createTag(researchKind(s))+createTag(accessLabels[s.datasetAudit?.accessStatus]||"Sem auditoria",s.datasetAudit?.accessStatus==="nao_confirmado"||s.datasetAudit?.accessStatus==="restrito")+(s.pending.length?createTag('Volume/métrica pendente',true):'')+'</div><p class="context">'+escapeHTML(s.condition)+'</p><div class="study-actions"><button class="small-btn" data-action="details" data-id="'+s.id+'">Ficha técnica</button><button class="small-btn" aria-pressed="'+inComparison+'" data-action="compare" data-id="'+s.id+'">'+(inComparison?'Remover':'Comparar +')+'</button></div></article>';
 }).join("");
}
function showDetails(id){
 const s=STATE.all.find(x=>x.id===Number(id));if(!s)return;
 previousFocus=document.activeElement;
 $("#modalTitle").textContent=s.title;
 $("#modalSubtitle").innerHTML=createTag(String(s.year))+createTag(s.language)+createTag(s.type)+(s.pending.length?createTag("Informações não confirmadas",true):"");
 const fields=[["Condição investigada",s.condition],["Tipo de texto e idioma",s.source],["Dataset e volumetria",s.dataset],["Nome oficial / identificação do dataset",s.datasetAudit?.name||"Não documentado"],["Plataforma ou ambiente de coleta",s.datasetAudit?.platform||"Não documentado"],["Disponibilidade dos dados",accessLabels[s.datasetAudit?.accessStatus]||"Não avaliado"],["Evidência sobre acesso",s.datasetAudit?.accessEvidence||"Não documentado"],["Observação de reutilização e limitações",s.datasetAudit?.reuseAndCaveat||"Não documentado"],["Família de corpus / reutilização",s.datasetAudit?.datasetFamily||"Não consolidada"],["Unidade de análise",s.datasetAudit?.sampleUnit||"Não auditada"],["Amostra auditada",s.datasetAudit?.sampleSize||"Não auditada"],["Rotulagem em detalhe",s.datasetAudit?.labelingDetail||"Consultar artigo original"],["Estratégia de rotulagem",s.labeling],["Métodos de IA e PLN",s.methods],["Métricas e resultados",s.results],["Limitações e relação com o projeto",s.limitations]];
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
 ["slotA","slotB"].forEach((key,i)=>{
  const s=slots[i],n=i===0?"REFERÊNCIA A":"REFERÊNCIA B";
  $("#"+key).innerHTML=s?'<span class="slot-label">'+n+'</span><h4>'+escapeHTML(s.title)+'</h4><p>'+s.year+' · '+escapeHTML(s.language)+' · '+escapeHTML(researchKind(s))+'</p>':'<span class="slot-label">'+n+'</span><p>Escolha uma publicação no explorador.</p>';
  $("#"+key).classList.toggle("selected",!!s);
 });
 const grid=$("#comparisonFields");
 if(slots.length!==2){grid.innerHTML="";$("#compareNotice").hidden=true;$("#comparePrompt").textContent="Selecione duas fichas dos estudos para produzir uma comparação técnica.";return;}
 const [a,b]=slots;
 const ds=s=>s.datasetAudit||{},tax=s=>s.analysisTaxonomy||{};
 const label=s=>accessLabels[ds(s).accessStatus]||"Não confirmado";
 const dim=[
 ["Natureza da publicação",s=>researchKind(s)],
 ["Tarefa-alvo principal",s=>tax(s).primaryTask],
 ["Condições secundárias e uso de transferência",s=>tax(s).caveat],
 ["Unidade de análise",s=>ds(s).sampleUnit||"Não verificada — consultar publicação"],
 ["Nome e versão/família do corpus",s=>ds(s).name],
 ["Família de dados compartilhada",s=>tax(s).datasetFamily||ds(s).datasetFamily||"Não atribuída"],
 ["Volume e amostra efetiva",s=>ds(s).sampleSize||s.dataset],
 ["Plataforma e idioma",s=>ds(s).platform+" · "+s.language],
 ["Disponibilidade do corpus",s=>label(s)+" — "+(ds(s).accessEvidence||"Sem declaração suficiente")],
 ["Fonte de rotulagem / validade clínica",s=>ds(s).labelSource||ds(s).labelingDetail||s.labeling],
 ["Definição da tarefa e classes",s=>s.condition],
 ["Técnicas avaliadas (inclui baselines)",s=>tax(s).methodFamilies?.join(", ")||"Não categorizado"],
 ["Arquitetura / representação",s=>s.methods],
 ["Partições, validação e controle de vazamento",s=>ds(s).splitDescription||"Não verificado na ficha — não assumir divisão de treino/teste"],
 ["Métrica e protocolo correspondente",s=>ds(s).metricDefinition||"Consultar métricas por configuração"],
 ["Resultados quantitativos no estudo",s=>s.results],
 ["Riscos e limites metodológicos",s=>s.limitations],
 ["Evidência da disponibilidade/reprodutibilidade",s=>ds(s).reuseAndCaveat||"Não registrada"]
 ];
 let notes=[];
 if(tax(a).publicationKind!==tax(b).publicationKind)notes.push("**Natureza distinta:** você selecionou tipos de publicação diferentes. Artigo experimental, recurso e revisão não oferecem evidência do mesmo tipo.");
 if(tax(a).primaryTask!==tax(b).primaryTask)notes.push("**Tarefas-alvo distintas:** os números dos dois trabalhos não medem exatamente o mesmo problema.");
 else notes.push("**Mesmo tema de tarefa:** a correspondência temática é inicial e não comprova equivalência de protocolo ou de rótulos.");
 if(tax(a).datasetFamily&&tax(b).datasetFamily&&tax(a).datasetFamily===tax(b).datasetFamily)notes.push("**Reutilização de corpus:** ambas as publicações pertencem à família "+escapeHTML(tax(a).datasetFamily)+". Confirmar partições e sobreposição de exemplos antes de comparar resultados.");
 else notes.push("**Fontes de dados:** não está comprovada identidade de corpus e amostra entre as duas publicações.");
 if(ds(a).sampleUnit&&ds(b).sampleUnit&&ds(a).sampleUnit!==ds(b).sampleUnit)notes.push("**Unidade de análise diferente:** textos, usuários ou entrevistas não são intercambiáveis.");
 if(!ds(a).splitDescription||!ds(b).splitDescription)notes.push("**Validação insuficientemente documentada:** ao menos uma ficha não registra partição ou protocolo auditado.");
 if(ds(a).accessStatus==="nao_confirmado"||ds(b).accessStatus==="nao_confirmado")notes.push("**Reprodutibilidade:** ao menos um corpus não teve acesso confirmado.");
 notes.push("**Veredito:** a comparação é descritiva e crítica; NÃO constitui ranking de desempenho. Só compare valores após alinhar tarefa, corpus, partições, classes, métrica e unidade de análise.");
 const render=(s,n)=>{const value=s?.url?'<a href="'+escapeHTML(s.url)+'" target="_blank" rel="noopener noreferrer">Abrir publicação '+n+' ↗</a>':'';const access=ds(s).datasetUrl?'<a href="'+escapeHTML(ds(s).datasetUrl)+'" target="_blank" rel="noopener noreferrer">Fonte de dados '+n+' ↗</a>':'';return value+access;};
 const interpretation='<div class="compare-interpret"><h4>Interpretação metodológica</h4>'+notes.map(x=>'<p>'+x.replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>')+'</p>').join("")+'</div>';
 const links='<div class="compare-links">'+render(a,"A")+render(b,"B")+'</div>';
 grid.innerHTML=interpretation+dim.map(([name,fn])=>'<div class="compare-field"><div class="field-name">'+escapeHTML(name)+'</div><div class="compare-values"><p>'+escapeHTML(say(fn(a)))+'</p><p>'+escapeHTML(say(fn(b)))+'</p></div></div>').join("")+links;
 $("#compareNotice").hidden=false;
 $("#comparePrompt").textContent="18 dimensões técnicas, incluindo critérios de comparabilidade, protocolo e rastreabilidade.";
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
 
 $("#langFilter").innerHTML='<option value="Todos">Todos os idiomas</option>'+[...new Set(STATE.all.map(x=>x.language))].sort().map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
 $("#yearFilter").innerHTML='<option value="Todos">Todos os anos</option>'+yearData().filter(x=>x.count).map(x=>'<option value="'+x.year+'">'+x.year+'</option>').join("");
 $("#accessFilter").innerHTML='<option value="Todos">Todos os tipos</option>'+Object.entries(accessLabels).map(([k,v])=>'<option value="'+k+'">'+escapeHTML(v)+'</option>').join("");
 $("#groupFilter").innerHTML='<option value="Todos">Todas as abordagens</option>'+methodOrder.map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
 $("#conditionFilter").innerHTML='<option value="Todas">Todas as condições</option>'+[...new Set(STATE.all.flatMap(s=>s.conditions))].sort().map(g=>'<option value="'+escapeHTML(g)+'">'+escapeHTML(g)+'</option>').join("");
}
function setup(){
 window.setAtlasStudySubset=ids=>{
  STATE.networkIds=[...new Set(ids.map(Number))].filter(Number.isFinite);
  STATE.filters={query:"",language:"Todos",condition:"Todas",group:"Todos",year:"Todos",access:"Todos"};
  $("#query").value="";["langFilter","groupFilter","conditionFilter","yearFilter","accessFilter"].forEach(key=>$("#"+key).value="Todos"===key?"Todos":$("#"+key).options?.[0]?.value||"Todos");
  filterStudies();
 };
 $("#query").addEventListener("input",e=>{STATE.networkIds=null;STATE.filters.query=e.target.value;filterStudies()});
 [["langFilter","language"],["groupFilter","group"],["conditionFilter","condition"],["yearFilter","year"],["accessFilter","access"]].forEach(([key,prop])=>{
  $("#"+key).addEventListener("change",e=>{STATE.networkIds=null;STATE.filters[prop]=e.target.value;filterStudies()});
 });
 $("#clearFilters").addEventListener("click",()=>{
  STATE.networkIds=null;STATE.filters={query:"",language:"Todos",condition:"Todas",group:"Todos",year:"Todos",access:"Todos"};
  $("#query").value="";["langFilter","groupFilter","conditionFilter","yearFilter","accessFilter"].forEach(key=>$("#"+key).selectedIndex=0);
  filterStudies();
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
 $("#comparePresets").addEventListener("click",e=>{const b=e.target.closest("button[data-a][data-b]");if(!b)return;STATE.selected=[Number(b.dataset.a),Number(b.dataset.b)];renderComparison();renderCards();$("#comparar").scrollIntoView({behavior:"smooth",block:"start"});});
 $("#clearComparison").addEventListener("click",()=>{STATE.selected=[];renderComparison();renderCards()});
 $("#modal").addEventListener("click",e=>{if(e.target.id==="modal"||e.target.classList.contains("close"))closeModal();const b=e.target.closest('[data-action="compare"]');if(b){toggleCompare(b.dataset.id);closeModal()}});
 document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#modal").classList.contains("open"))closeModal()});
 $("#downloadData").href="./estudos.json";
 const obs="IntersectionObserver" in window?new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})},{threshold:.08}):null;
 $$(".reveal").forEach(e=>obs?obs.observe(e):e.classList.add("visible"));
}
(async function(){
 try{
  const data=JSON.parse(document.getElementById("studiesEmbedded").textContent);
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
