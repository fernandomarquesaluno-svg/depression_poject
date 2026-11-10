"use strict";
(function(){
const G=["Análise lexical","ML clássico","Transformers","LLMs","Grafos/GNNs","Multimodal/fusão"];
const C=["Depressão","Depressão e ansiedade","Estresse","Risco suicida","Múltiplas condições"];
const COLOR={"Análise lexical":"#ffc785","ML clássico":"#8cd2f0","Transformers":"#70dff0","LLMs":"#b8a8ff","Grafos/GNNs":"#f5add3","Multimodal/fusão":"#8cf0c2"};
const get=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
let studies=[],filtered=[],edges=[],activeEdge=null,tourIndex=0,tourOpener=null;
const short=s=>s.length>67?s.slice(0,66)+"…":s;
const eligible=s=>s.analysisTaxonomy?.publicationKind==="empirico";
function setPageFilters(ids){
 if(typeof window.setAtlasStudySubset==="function")window.setAtlasStudySubset(ids);
 document.querySelector("#estudos")?.scrollIntoView({behavior:"smooth"});
}
function renderNetwork(){
 const ptOnly=get("showPtOnly").checked;
 filtered=studies.filter(s=>eligible(s)&&(!ptOnly||s.language==="PT-BR"));
 edges=[];activeEdge=null;
 const gc=G.map(g=>filtered.filter(s=>s.analysisTaxonomy.methodFamilies.includes(g)).length);
 const cc=C.map(c=>filtered.filter(s=>s.analysisTaxonomy.primaryTask===c).length);
 const gl=i=>68+i*84,cl=i=>104+i*93;
 const svg=['<svg class="connection-viz" viewBox="0 0 1110 570" role="img" aria-label="Mapa das abordagens efetivamente utilizadas por 25 estudos empíricos e sua tarefa-alvo principal. Linhas medem quantidade de estudos por combinação, não qualidade da evidência.">'];
 svg.push('<defs><radialGradient id="hubGlow"><stop stop-color="#4accc3" stop-opacity=".3"/><stop offset="1" stop-color="#4accc3" stop-opacity="0"/></radialGradient></defs>');
 svg.push('<circle cx="540" cy="275" r="220" fill="url(#hubGlow)" opacity=".55"/><text x="550" y="33" text-anchor="middle" class="c-sub">ASSOCIAÇÃO ENTRE MÉTODO E TAREFA</text>');
 G.forEach((g,i)=>C.forEach((c,j)=>{
  const arr=filtered.filter(s=>s.analysisTaxonomy.methodFamilies.includes(g)&&s.analysisTaxonomy.primaryTask===c);
  if(!arr.length)return;
  const e={group:g,condition:c,ids:arr.map(s=>s.id),count:arr.length};
  const index=edges.push(e)-1,y0=gl(i),y1=cl(j),width=Math.min(24,2+arr.length*2.5);
  svg.push('<path class="c-link" data-e="'+index+'" tabindex="0" role="button" aria-label="'+esc(g)+' e '+esc(c)+': '+arr.length+' estudos" d="M 311 '+y0+' C 501 '+y0+', 597 '+y1+', 798 '+y1+'" stroke="'+COLOR[g]+'" stroke-width="'+width+'"><title>'+esc(g)+' → '+esc(c)+' ('+arr.length+' estudos)</title></path>');
 }));
 G.forEach((g,i)=>{
  const y=gl(i),n=gc[i];svg.push('<g class="c-hub" data-g="'+esc(g)+'" tabindex="0" role="button" aria-label="'+esc(g)+': '+n+' estudos. Abrir no explorador"><rect x="12" y="'+(y-25)+'" width="298" height="50" rx="12" fill="#193347" stroke="'+COLOR[g]+'" stroke-opacity=".6"/><circle cx="32" cy="'+y+'" r="6" fill="'+COLOR[g]+'"/><text x="49" y="'+(y+5)+'" class="c-label">'+esc(g)+'</text><text x="288" y="'+(y+6)+'" text-anchor="end" class="c-count" style="font-size:18px">'+n+'</text></g>');
 });
 C.forEach((c,i)=>{
  const y=cl(i),n=cc[i];svg.push('<g class="c-hub" data-c="'+esc(c)+'" tabindex="0" role="button" aria-label="'+esc(c)+': '+n+' estudos. Abrir no explorador"><rect x="800" y="'+(y-25)+'" width="299" height="50" rx="12" fill="#203245" stroke="#77b7c2" stroke-opacity=".6"/><text x="815" y="'+(y+5)+'" class="c-label" style="font-size:14px">'+esc(c)+'</text><text x="1082" y="'+(y+6)+'" text-anchor="end" class="c-count" style="font-size:18px">'+n+'</text></g>');
 });
 svg.push('<text x="154" y="560" text-anchor="middle" class="c-cap">MÉTODOS UTILIZADOS</text><text x="955" y="560" text-anchor="middle" class="c-cap">TAREFA-ALVO PRINCIPAL</text></svg>');
 get("conexaoViz").innerHTML=svg.join("");
 const strongest=edges.reduce((a,b)=>!a||b.count>a.count?b:a,null);
 if(strongest)showEdge(strongest,true);else showNoEdge();
 get("cptCount").textContent=filtered.filter(s=>s.language==="PT-BR").length;
 get("cStudiesCount").textContent=filtered.length;
 get("cRelationsCount").textContent=edges.length;
 const nAssoc=edges.reduce((n,e)=>n+e.count,0);
 const cap=get("connectAssociations");if(cap)cap.textContent=nAssoc;
}
function showNoEdge(){
 get("connectionDescription").textContent="Nenhuma associação técnica neste recorte.";
 get("edgeTitle").textContent="Sem associações";get("edgeCount").textContent="0";get("edgeSources").innerHTML="";
 get("edgeJump").hidden=true;
}
function showEdge(e,quiet=false){
 activeEdge=e;
 get("conexaoViz").querySelectorAll(".c-link").forEach(n=>{
  const is=edges[Number(n.dataset.e)]===e;
  n.classList.toggle("active",is);n.classList.toggle("dim",!quiet&&!is);
 });
 const full=filtered.filter(s=>e.ids.includes(s.id));
 get("edgeTitle").textContent=e.group+" ↔ "+e.condition;
 get("edgeCount").textContent=e.count+(e.count===1?" estudo":" estudos");
 get("connectionDescription").textContent="Trabalhos que utilizaram esta família técnica para a tarefa principal indicada. Uma publicação pode comparar diversos métodos. A ligação não mede qualidade, causalidade, desempenho nem independência amostral.";
 get("edgeSources").innerHTML=full.slice(0,5).map(s=>'<li><span style="color:#9bc5d0">'+s.year+'</span> · '+esc(short(s.title))+'</li>').join("")+(full.length>5?'<li>+ '+(full.length-5)+' outros</li>':'');
 get("edgeJump").hidden=false;
}
function onNetworkActivate(target){
 const p=target.closest(".c-link");
 if(p){const e=edges[Number(p.dataset.e)];if(e)showEdge(e);return;}
 const hub=target.closest(".c-hub");if(!hub)return;
 const g=hub.dataset.g,c=hub.dataset.c;
 const set=filtered.filter(s=>(!g||s.analysisTaxonomy.methodFamilies.includes(g))&&(!c||s.analysisTaxonomy.primaryTask===c));
 setPageFilters(set.map(s=>s.id));
}
function countGroup(g){return studies.filter(s=>eligible(s)&&s.analysisTaxonomy.methodFamilies.includes(g)).length;}
function countCondition(c){return studies.filter(s=>eligible(s)&&s.analysisTaxonomy.primaryTask===c).length;}
function countLang(l){return studies.filter(s=>s.language===l).length;}
function countMention(k){const re=new RegExp(k,"i");return studies.filter(s=>re.test([s.title,s.dataset,s.source,s.results].join(" "))).length;}
const paragraphs=[
 {tag:"01 / PONTO DE PARTIDA",title:"De <span>33 referências</span> a uma visão científica.",sub:"A apresentação não precisa começar com uma tabela de oito colunas. Comece pela pergunta: o que esses estudos revelam?",items:()=>[["33","publicações no recorte"],["08","dimensões técnicas"],["2020—2026","período investigado"]],url:"#mapa",label:"Abrir constelação"},
 {tag:"02 / PROBLEMAS DE PESQUISA",title:"As pesquisas estudam <span>problemas diferentes.</span>",sub:"Depressão, ansiedade e estresse podem coexistir no mesmo trabalho, mas exigem tarefas e estratégias de rotulagem diferentes.",items:()=>[[""+countCondition("Depressão"),"tarefa principal: depressão"],[""+countCondition("Depressão e ansiedade"),"duas tarefas principais"],[""+countCondition("Estresse"),"tarefa principal: estresse"]],url:"#conexoes",label:"Explorar conexões"},
 {tag:"03 / EVOLUÇÃO TÉCNICA",title:"Não existe um <span>modelo vencedor</span> universal.",sub:"Classificadores lexicais, transformers e LLMs coexistem. Um F1 maior em datasets diferentes não comprova superioridade.",items:()=>[[""+countGroup("ML clássico"),"usam ML clássico"],[""+countGroup("Transformers"),"usam transformers"],[""+countGroup("LLMs"),"usam LLMs"]],url:"#conexoes",label:"Examinar abordagens"},
 {tag:"04 / REUTILIZAÇÃO DE DADOS",title:"Mais artigos <span>não significam</span> mais amostras independentes.",sub:"Parte dos estudos reaproveita benchmarks como SetembroBR e Dreaddit. É preciso distinguir a publicação, o corpus e a unidade de análise.",items:()=>[[""+countMention("SetembroBR"),"referências citam SetembroBR"],[""+countMention("Dreaddit"),"referências citam Dreaddit"],["≠","referência não é corpus independente"]],url:"#auditoria",label:"Consultar auditoria"},
 {tag:"05 / LIMITAÇÕES",title:"O desafio é <span>validade científica.</span>",sub:"Rótulos, generalização, sensibilidade à plataforma e transparência dos dados importam tanto quanto os resultados de classificação.",items:()=>[[""+countLang("PT-BR"),"fontes exclusivamente PT-BR"],[""+studies.filter(s=>s.pending.length).length,"fichas com campos sinalizados"],["01","pergunta: generaliza fora do corpus?"]],url:"#padroes",label:"Ver síntese crítica"},
 {tag:"06 / PRÓXIMO PASSO",title:"Do levantamento a um <span>experimento verificável.</span>",sub:"Selecionar uma tarefa e um baseline publicado, definir corpus e partições, aplicar LLMs em zero-shot e few-shot e avaliar desempenho, custo e latência.",items:()=>[["01","tarefa e baseline"],["02","experimento comparável"],["03","erro, custo e latência"]],url:"#comparar",label:"Escolher estudos"}
];
function countGroup(g){return studies.filter(s=>s.group===g).length}
function countCondition(c){return studies.filter(s=>s.conditions.includes(c)).length}
function countLang(c){return studies.filter(s=>s.language===c).length}
function countMention(k){const re=new RegExp(k,"i");return studies.filter(s=>re.test([s.title,s.dataset,s.source,s.results].join(" "))).length}
function renderTour(){
 const s=paragraphs[tourIndex],panel=get("tourPanel");
 get("tourTag").textContent=s.tag;get("tourHeading").innerHTML=s.title;
 get("tourSub").textContent=s.sub;
 get("tourGraphic").innerHTML=s.items().map(x=>'<div class="tour-pill"><b>'+esc(x[0])+'</b><small>'+esc(x[1])+'</small></div>').join("");
 get("tourProgress").innerHTML=paragraphs.map((_,i)=>'<span class="'+(i===tourIndex?"current":"")+'" aria-hidden="true"></span>').join("");
 get("tourIndexLabel").textContent=(tourIndex+1)+" / "+paragraphs.length;
 get("tourPrev").disabled=tourIndex===0;
 get("tourNext").textContent=tourIndex===paragraphs.length-1?"Encerrar":"Próximo →";
 const a=get("tourExplore");a.href=s.url;a.textContent=s.label+" ↗";
 get("tourPanel").setAttribute("aria-label","Apresentação guiada: etapa "+(tourIndex+1)+" de "+paragraphs.length);
}
function openTour(){
 tourOpener=document.activeElement;tourIndex=0;
 get("tourLayer").classList.add("show");
 get("tourLayer").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
 renderTour();get("tourClose").focus();
}
function closeTour(section){
 get("tourLayer").classList.remove("show");get("tourLayer").setAttribute("aria-hidden","true");
 document.body.style.overflow="";
 if(section){document.querySelector(section)?.scrollIntoView({behavior:"smooth"});}
 else if(tourOpener?.isConnected)tourOpener.focus();
}
function setupTour(){
 get("openTour").addEventListener("click",openTour);
 get("tourClose").addEventListener("click",()=>closeTour());
 get("tourPrev").addEventListener("click",()=>{tourIndex=Math.max(0,tourIndex-1);renderTour()});
 get("tourNext").addEventListener("click",()=>{if(tourIndex===paragraphs.length-1){closeTour();return;}tourIndex++;renderTour()});
 get("tourExplore").addEventListener("click",ev=>{ev.preventDefault();closeTour(paragraphs[tourIndex].url)});
 document.addEventListener("keydown",ev=>{
  if(!get("tourLayer").classList.contains("show"))return;
  if(ev.key==="Escape"){ev.preventDefault();closeTour()}
  if(ev.key==="ArrowRight"&&tourIndex<paragraphs.length-1){ev.preventDefault();tourIndex++;renderTour();}
  if(ev.key==="ArrowLeft"&&tourIndex>0){ev.preventDefault();tourIndex--;renderTour();}
  if(ev.key==="Tab"){
   const nodes=[...get("tourLayer").querySelectorAll("button:not(:disabled),a[href]")].filter(x=>x.offsetParent!==null);
   if(nodes.length){
    const first=nodes[0],last=nodes[nodes.length-1];
    if(ev.shiftKey&&document.activeElement===first){ev.preventDefault();last.focus();}
    else if(!ev.shiftKey&&document.activeElement===last){ev.preventDefault();first.focus();}
   }
  }
 });
}
async function init(){
 try{
  const d=JSON.parse(get("studiesEmbedded").textContent);
  if(!Array.isArray(d.studies)||d.studies.length!==33)throw Error("Base incompleta");
  studies=d.studies;renderNetwork();setupTour();
  get("showPtOnly").addEventListener("change",renderNetwork);
  get("conexaoViz").addEventListener("click",ev=>onNetworkActivate(ev.target));
  get("conexaoViz").addEventListener("keydown",ev=>{if((ev.key==="Enter"||ev.key===" ")&&(ev.target.closest(".c-link,.c-hub"))){ev.preventDefault();onNetworkActivate(ev.target)}});
  get("conexaoViz").addEventListener("mouseover",ev=>{const path=ev.target.closest(".c-link");if(path)showEdge(edges[Number(path.dataset.e)],false)});
  get("edgeJump").addEventListener("click",()=>{if(activeEdge)setPageFilters(activeEdge.ids)});
 }catch(e){get("conexaoViz").innerHTML='<p class="loading">Não foi possível carregar as relações. Consulte as fichas dos estudos.</p>';get("connectionDescription").textContent="Mapa indisponível";get("openTour").hidden=true;console.error("Mapa de métodos:",e)}
}
init();
})();
