"use strict";
(function(root){
 const METHODS=[
  {key:"Análise lexical",color:"#ffc785"},
  {key:"ML clássico",color:"#8cd2f0"},
  {key:"Transformers",color:"#70dff0"},
  {key:"LLMs",color:"#b8a8ff"},
  {key:"Grafos/GNNs",color:"#f5add3"},
  {key:"Multimodal/fusão",color:"#8cf0c2"}
 ];
 const CONDITIONS=["Todas","Depressão","Ansiedade","Estresse","Risco suicida"];
 const ACCESS=[
  {key:"publico",label:"Público",color:"#78f0d3"},
  {key:"controlado",label:"Controlado",color:"#7daaff"},
  {key:"restrito",label:"Restrito",color:"#f79bad"},
  {key:"parcial",label:"Parcial",color:"#bea6ff"},
  {key:"nao_confirmado",label:"Não confirmado",color:"#ffc785"},
  {key:"nao_aplica",label:"Revisão / N.A.",color:"#91aabd"}
 ];
 const esc=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 function summarizeMethods(studies,condition="Todas"){
  const filtered=studies.filter(s=>s.analysisTaxonomy?.publicationKind==="empirico"&&(condition==="Todas"||(s.conditions||[]).includes(condition)));
  const bars=METHODS.map(method=>{
   const ids=filtered.filter(s=>(s.analysisTaxonomy?.methodFamilies||[]).includes(method.key)).map(s=>s.id);
   return {...method,count:ids.length,ids};
  });
  return {studyCount:filtered.length,associationCount:bars.reduce((n,b)=>n+b.count,0),bars};
 }
 function summarizeAccess(studies){
  const n=studies.length;
  return ACCESS.map(a=>({...a,count:studies.filter(s=>s.datasetAudit?.accessStatus===a.key).length,percentage:n?100*studies.filter(s=>s.datasetAudit?.accessStatus===a.key).length/n:0}));
 }
 if(typeof module!=="undefined"&&module.exports)module.exports={METHODS,CONDITIONS,ACCESS,summarizeMethods,summarizeAccess};
 if(!root.document)return;
 const document=root.document;
 const get=id=>document.getElementById(id);
 let studies=[];
 const reducedMotion=root.matchMedia?.("(prefers-reduced-motion: reduce)").matches??false;
 function initializeMethodChart(){
  const chart=get("methodBars"),panel=get("methodInsights"),filterBox=get("methodConditionFilters");
  if(!chart||!filterBox)return;
  let selected="Todas";
  filterBox.innerHTML=CONDITIONS.map(c=>'<button type="button" data-condition="'+esc(c)+'" aria-pressed="'+(c===selected)+'">'+esc(c)+'</button>').join("");
  const render=()=>{
   const stats=summarizeMethods(studies,selected);
   const max=Math.max(1,...stats.bars.map(b=>b.count));
   panel.classList.remove("ready");
   get("methodInsightTotal").innerHTML='<strong>'+stats.studyCount+'</strong><span>estudos · '+stats.associationCount+' associações</span>';
   chart.innerHTML=stats.bars.map(b=>{
    const pct=Math.round(b.count/max*100);
    return '<button type="button" class="method-bar" data-method="'+esc(b.key)+'" style="--methodColor:'+b.color+';--pct:'+pct+'%"'+(b.count?'':' disabled')+' aria-label="'+esc(b.key)+': '+b.count+' estudos. Abrir recorte na biblioteca.">'+
     '<span class="method-bar-label">'+esc(b.key)+'</span><span class="method-bar-track"><span class="method-bar-fill"></span></span><span class="method-bar-count">'+b.count+'</span></button>';
   }).join("");
   filterBox.querySelectorAll("[data-condition]").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.condition===selected)));
   if(reducedMotion||panel.dataset.appeared==="true")root.requestAnimationFrame(()=>panel.classList.add("ready"));
  };
  filterBox.addEventListener("click",event=>{
   const b=event.target.closest("[data-condition]");if(!b)return;
   selected=b.dataset.condition;render();
  });
  chart.addEventListener("click",event=>{
   const b=event.target.closest("[data-method]");if(!b)return;
   const group=summarizeMethods(studies,selected).bars.find(g=>g.key===b.dataset.method);
   if(group?.ids.length&&typeof root.setAtlasStudySubset==="function")root.setAtlasStudySubset(group.ids);
  });
  if("IntersectionObserver" in root){
   const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){panel.dataset.appeared="true";panel.classList.add("ready");observer.disconnect();}},{threshold:.16});
   observer.observe(panel);
  }else panel.dataset.appeared="true";
  render();
 }
 function initializeAccessDonut(){
  const host=get("accessDonutChart");if(!host)return;
  const stats=summarizeAccess(studies),total=studies.length;
  let pos=0;
  const stops=stats.map((s,i)=>{
   const start=pos;pos=i===stats.length-1?100:pos+s.percentage;
   return s.color+' '+start.toFixed(3)+'% '+pos.toFixed(3)+'%';
  });
  host.innerHTML='<div class="access-donut" role="img" aria-label="Distribuição de '+total+' referências por tipo de acesso" style="background:conic-gradient('+stops.join(',')+')"><div class="access-donut-core"><strong>'+total+'</strong><span>referências</span></div></div>'+
   '<div class="access-donut-list" role="group" aria-label="Filtrar pelo tipo de acesso">'+stats.map(s=>'<button type="button" data-access-chart="'+s.key+'" style="--accessColor:'+s.color+'"><i aria-hidden="true"></i><span>'+esc(s.label)+'</span><b>'+s.count+'</b></button>').join('')+'</div>';
  host.addEventListener("click",event=>{
   const b=event.target.closest("[data-access-chart]");if(!b)return;
   const selector='#accessFilterButtons [data-access="'+b.dataset.accessChart+'"]';
   document.querySelector(selector)?.click();
   get("dataMap")?.scrollIntoView({behavior:reducedMotion?"auto":"smooth",block:"center"});
  });
 }
 function initializeMotion(){
  const hero=get("heroSparkles");
  if(hero&&!reducedMotion){
   hero.innerHTML=Array.from({length:18},(_,i)=>{
    const x=8+(i*41)%89,y=9+(i*29)%78,size=2+i%4,duration=6+i%7;
    return '<span style="--x:'+x+'%;--y:'+y+'%;--s:'+size+'px;--d:'+duration+'s;animation-delay:-'+i*0.7+'s"></span>';
   }).join("");
  }
  const progress=get("atlasScrollProgress");
  if(progress){
   let pending=false;
   const measure=()=>{
    const max=document.documentElement.scrollHeight-root.innerHeight;
    progress.style.transform="scaleX("+(max>0?Math.min(1,root.scrollY/max):0)+")";
    pending=false;
   };
   const schedule=()=>{if(!pending){pending=true;root.requestAnimationFrame(measure);}};
   root.addEventListener("scroll",schedule,{passive:true});root.addEventListener("resize",schedule,{passive:true});measure();
  }
  if(reducedMotion||!("IntersectionObserver" in root))return;
  const heroStats=document.querySelector(".hero-stats");
  if(!heroStats)return;
  const observer=new IntersectionObserver(entries=>{
   if(!entries.some(e=>e.isIntersecting))return;
   observer.disconnect();
   heroStats.querySelectorAll("strong").forEach(element=>{
    const value=Number(element.textContent);if(!Number.isFinite(value)||value<=0)return;
    const start=root.performance.now(),duration=950;
    const step=now=>{
     const t=Math.min(1,(now-start)/duration);
     element.textContent=String(Math.round(value*(1-(1-t)**3))).padStart(element.textContent.startsWith("0")?2:1,"0");
     if(t<1)root.requestAnimationFrame(step);else element.textContent=String(value).padStart(element.dataset.leadingZero?2:1,"0");
    };
    if(element.textContent.startsWith("0"))element.dataset.leadingZero="true";
    root.requestAnimationFrame(step);
   });
  },{threshold:.4});observer.observe(heroStats);
 }
 try{
  const data=JSON.parse(get("studiesEmbedded").textContent);
  if(!Array.isArray(data.studies))throw Error("Base de estudos indisponível");
  studies=data.studies;
  initializeMethodChart();initializeAccessDonut();initializeMotion();
 }catch(error){const host=get("methodBars");if(host)host.textContent="Gráfico indisponível. Consulte as fichas dos estudos.";console.error("Visualizações do Atlas:",error);}
})(typeof window!=="undefined"?window:globalThis);
