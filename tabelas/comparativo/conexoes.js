
"use strict";
(function(){
const G=["Clássicos","Transformers","LLMs","Recursos","Revisões","Tese/TCC","Outras"];
const C=["Depressão","Ansiedade","Estresse","Risco suicida","Outras/geral"];
const COLOR={"Clássicos":"#ffc785","Transformers":"#70dff0","LLMs":"#b8a8ff","Recursos":"#8cf0c2","Revisões":"#ffacc3","Tese/TCC":"#e4cc8b","Outras":"#97acc9"};
const get=id=>document.getElementById(id);
const esc=s=>String(s??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
let studies=[], filtered=[],edges=[],activeEdge=null,tourIndex=0,tourOpener=null;
const short=s=>s.length>65?s.slice(0,64)+"…":s;
function setPageFilters(group,condition){
 const groupSelect=get("groupFilter"),conditionSelect=get("conditionFilter"),yearSelect=get("yearFilter"),langSelect=get("langFilter"),query=get("query");
 if(!groupSelect)return;
 groupSelect.value=group;conditionSelect.value=condition;
 yearSelect.value="Todos";langSelect.value=get("showPtOnly").checked?"PT-BR":"Todos";query.value="";
 query.dispatchEvent(new Event("input",{bubbles:true}));
 [groupSelect,conditionSelect,yearSelect,langSelect].forEach(select=>select.dispatchEvent(new Event("change",{bubbles:true})));
 document.querySelector("#estudos")?.scrollIntoView({behavior:"smooth"});
}
function renderNetwork(){
 const ptOnly=get("showPtOnly").checked;
 filtered=studies.filter(s=>!ptOnly||s.language==="PT-BR");
 edges=[];
 const groupCounts=G.map(g=>filtered.filter(s=>s.group===g).length);
 const conditionCounts=C.map(c=>filtered.filter(s=>s.conditions.includes(c)).length);
 const svg=[];
 const gl=(i)=>70+i*70;
 const cl=i=>116+i*87;
 svg.push('<svg class="connection-viz" viewBox="0 0 1110 570" role="img" aria-label="Rede de relações entre abordagens de IA, à esquerda, e condições investigadas, à direita. A espessura de cada conexão indica a quantidade de referências que abordam a combinação.">');
 svg.push('<defs><radialGradient id="hubGlow"><stop stop-color="#4accc3" stop-opacity=".3"/><stop offset="1" stop-color="#4accc3" stop-opacity="0"/></radialGradient></defs>');
 svg.push('<circle cx="540" cy="275" r="210" fill="url(#hubGlow)" opacity=".55"/><text x="550" y="40" text-anchor="middle" class="c-sub">CONEXÕES DE PESQUISA</text>');
 G.forEach((g,i)=>C.forEach((c,j)=>{
  const arr=filtered.filter(s=>s.group===g&&s.conditions.includes(c));
  if(!arr.length)return;
  const e={group:g,condition:c,ids:arr.map(s=>s.id),count:arr.length};
  const index=edges.push(e)-1;const y0=gl(i),y1=cl(j),width=Math.min(26,3+arr.length*2.2);
  svg.push('<path class="c-link" data-e="'+index+'" tabindex="0" role="button" aria-label="'+esc(g)+': '+arr.length+' referências sobre '+esc(c)+'" d="M 308 '+y0+' C 515 '+y0+', 596 '+y1+', 800 '+y1+'" stroke="'+COLOR[g]+'" stroke-width="'+width.toFixed(1)+'"><title>'+esc(g)+" ↔ "+esc(c)+": "+arr.length+' publicações</title></path>');
 }));
 G.forEach((g,i)=>{
  const y=gl(i),n=groupCounts[i];
  svg.push('<g class="c-hub" data-g="'+esc(g)+'" tabindex="0" role="button" aria-label="Explorar '+esc(g)+': '+n+' referências"><rect x="15" y="'+(y-25)+'" width="292" height="50" rx="12" fill="#193347" stroke="'+COLOR[g]+'" stroke-opacity=".55"/><circle cx="35" cy="'+y+'" r="6" fill="'+COLOR[g]+'"/><text x="50" y="'+(y+5)+'" class="c-label">'+esc(g)+'</text><text x="286" y="'+(y+6)+'" text-anchor="end" class="c-count" style="font-size:19px">'+n+'</text></g>');
 });
 C.forEach((c,i)=>{
  const y=cl(i),n=conditionCounts[i];
  svg.push('<g class="c-hub" data-c="'+esc(c)+'" tabindex="0" role="button" aria-label="Explorar '+esc(c)+': '+n+' referências"><rect x="801" y="'+(y-25)+'" width="293" height="50" rx="12" fill="#203245" stroke="#77b7c2" stroke-opacity=".6"/><text x="816" y="'+(y+5)+'" class="c-label">'+esc(c)+'</text><text x="1075" y="'+(y+6)+'" text-anchor="end" class="c-count" style="font-size:19px">'+n+'</text></g>');
 });
 svg.push('<text x="158" y="562" text-anchor="middle" class="c-cap">ABORDAGEM / TIPO</text><text x="950" y="562" text-anchor="middle" class="c-cap">PROBLEMA INVESTIGADO</text></svg>');
 get("conexaoViz").innerHTML=svg.join("");
 const found=edges.reduce((a,b)=>b.count>a.count?b:a,edges[0]||null);
 if(found)showEdge(found,true);
 else showNoEdge();
 get("cptCount").textContent=filtered.filter(s=>s.language==="PT-BR").length;
 get("cStudiesCount").textContent=filtered.length;
 get("cRelationsCount").textContent=edges.length;
}
function showNoEdge(){
 get("connectionDescription").textContent="Nenhuma relação encontrada no recorte atual.";
 get("edgeTitle").textContent="Nenhuma conexão";
 get("edgeCount").textContent="0";
 get("edgeSources").innerHTML="";
 get("edgeJump").hidden=true;
}
function showEdge(e,defaultView=false){
 activeEdge=e;
 const nodes=document.querySelectorAll(".c-link");
 nodes.forEach(n=>{
  const edge=edges[Number(n.dataset.e)],match=edge===e;
  n.classList.toggle("active",match);n.classList.toggle("dim",!match&&!defaultView);
 });
 const full=filtered.filter(s=>e.ids.includes(s.id));
 get("edgeTitle").textContent=e.group+" ↔ "+e.condition;
 get("edgeCount").textContent=e.count+" "+(e.count===1?"referência":"referências");
 get("connectionDescription").textContent="A conexão reúne publicações desse agrupamento e condição. Não representa comparação de desempenho, nem necessariamente conjuntos de dados independentes.";
 get("edgeSources").innerHTML=full.slice(0,4).map(s=>'<li><span style="color:#9bc5d0">'+s.year+'</span> · '+esc(short(s.title))+'</li>').join("")+(full.length>4?'<li>+ '+(full.length-4)+' outras referências</li>':'');
 get("edgeJump").hidden=false;
 if(!defaultView)get("connectionDescription").textContent="Clique em “Ver estudos relacionados” para explorar os resultados e abrir as fichas completas.";
}
function onNetworkActivate(target){
 const path=target.closest(".c-link");
 if(path){const e=edges[Number(path.dataset.e)];if(e)showEdge(e);return;}
 const hub=target.closest(".c-hub");
 if(!hub)return;
 const g=hub.dataset.g,c=hub.dataset.c;
 if(g)setPageFilters(g,"Todas");
 if(c)setPageFilters("Todos",c);
}
function resetHover(){if(activeEdge)showEdge(activeEdge,true)}
const paragraphs=[
 {tag:"01 / PONTO DE PARTIDA",title:"De <span>33 referências</span> a uma visão científica.",sub:"A apresentação não precisa começar com uma tabela de oito colunas. Comece pela pergunta: o que esses estudos revelam?",items:()=>[["33","publicações no recorte"],["08","dimensões técnicas"],["2020—2026","período investigado"]],url:"#mapa",label:"Abrir constelação"},
 {tag:"02 / PROBLEMAS DE PESQUISA",title:"As pesquisas estudam <span>problemas diferentes.</span>",sub:"Depressão, ansiedade e estresse podem coexistir no mesmo trabalho, mas exigem tarefas e estratégias de rotulagem diferentes.",items:()=>[[""+countCondition("Depressão"),"mencionam depressão"],[""+countCondition("Ansiedade"),"mencionam ansiedade"],[""+countCondition("Estresse"),"mencionam estresse"]],url:"#conexoes",label:"Explorar conexões"},
 {tag:"03 / EVOLUÇÃO TÉCNICA",title:"Não existe um <span>modelo vencedor</span> universal.",sub:"Classificadores lexicais, transformers e LLMs coexistem. Um F1 maior em datasets diferentes não comprova superioridade.",items:()=>[[""+countGroup("Clássicos"),"clássicos como grupo principal"],[""+countGroup("Transformers"),"transformers como grupo principal"],[""+countGroup("LLMs"),"LLMs como grupo principal"]],url:"#conexoes",label:"Examinar abordagens"},
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
  const r=await fetch("./estudos.json",{cache:"no-cache"});if(!r.ok)throw Error("HTTP "+r.status);
  const d=await r.json();if(!Array.isArray(d.studies)||d.studies.length!==33)throw Error("Fonte incompleta");
  studies=d.studies;
  renderNetwork();setupTour();
  get("showPtOnly").addEventListener("change",renderNetwork);
  get("conexaoViz").addEventListener("click",ev=>onNetworkActivate(ev.target));
  get("conexaoViz").addEventListener("keydown",ev=>{if((ev.key==="Enter"||ev.key===" ")&&(ev.target.closest(".c-link,.c-hub"))){ev.preventDefault();onNetworkActivate(ev.target)}});
  get("conexaoViz").addEventListener("mouseover",ev=>{const path=ev.target.closest(".c-link");if(path)showEdge(edges[Number(path.dataset.e)])});
  get("edgeJump").addEventListener("click",()=>{
   if(!activeEdge)return;setPageFilters(activeEdge.group,activeEdge.condition);
  });
 }catch(e){get("conexaoViz").innerHTML='<p class="loading">Não foi possível carregar as relações. Utilize o explorador de estudos abaixo.</p>';get("connectionDescription").textContent="Não foi possível carregar os dados.";get("openTour").hidden=true;console.error("Mapa de conexões:",e)}
}
init();
})();
