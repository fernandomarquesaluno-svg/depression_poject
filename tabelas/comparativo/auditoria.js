
"use strict";
(async function(){
 const $=id=>document.getElementById(id);
 const statuses=[
  {k:"publico",title:"Público",c:"#78f0d3"},
  {k:"controlado",title:"Acesso controlado",c:"#7daaff"},
  {k:"restrito",title:"Restrito",c:"#f79bad"},
  {k:"parcial",title:"Parcial / misto",c:"#bea6ff"},
  {k:"nao_confirmado",title:"Não confirmado",c:"#ffc785"},
  {k:"nao_aplica",title:"Revisão / N.A.",c:"#91aabd"}
 ];
 const esc=s=>String(s??"").replace(/[&<>"']/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[x]));
 try{
  const r=await fetch("./estudos.json",{cache:"no-cache"});if(!r.ok)throw Error("HTTP "+r.status);
  const {studies}=await r.json();
  if(studies.length!==33||studies.some(s=>!s.datasetAudit?.name||!s.datasetAudit?.accessStatus))throw Error("Base incompleta");
  let chosen="Todos";
  const n=studies.length,confirmed=studies.filter(s=>!["nao_confirmado","nao_aplica"].includes(s.datasetAudit.accessStatus)).length;
  $("auditedCount").textContent=n;
  $("auditedWithLink").textContent=studies.filter(s=>s.datasetAudit.datasetUrl).length;
  $("auditAccessConfirmed").textContent=confirmed;
  $("auditAccessUnconfirmed").textContent=studies.filter(s=>s.datasetAudit.accessStatus==="nao_confirmado").length;
  $("accessBars").innerHTML=statuses.map(s=>{
   const count=studies.filter(x=>x.datasetAudit.accessStatus===s.k).length;
   return '<div class="access-row"><span>'+esc(s.title)+'</span><div class="access-track"><i style="--c:'+s.c+';--w:'+(count/n*100).toFixed(2)+'%"></i></div><strong>'+count+'</strong></div>';
  }).join("");
  $("accessLegend").innerHTML=statuses.map(s=>'<span><i style="--c:'+s.c+'"></i>'+esc(s.title)+'</span>').join("");
  const rerender=()=>{
   $("dataMap").innerHTML=studies.map(s=>{
    const t=statuses.find(x=>x.k===s.datasetAudit.accessStatus);
    const dim=chosen!=="Todos"&&chosen!==s.datasetAudit.accessStatus;
    return '<button type="button" class="data-tile'+(dim?' dim':'')+'" style="--c:'+t.c+'" data-id="'+s.id+'" data-status="'+s.datasetAudit.accessStatus+'" title="'+esc(s.title)+' — '+esc(t.title)+'" aria-label="Estudo '+s.id+': '+esc(s.title)+'. Acesso: '+esc(t.title)+'. Abrir ficha.">'+String(s.id).padStart(2,"0")+'</button>';
   }).join("");
   $("accessSelectedCount").textContent=chosen==="Todos"?n:studies.filter(s=>s.datasetAudit.accessStatus===chosen).length;
   $("accessFilterButtons").querySelectorAll("button[data-access]").forEach(b=>{const active=b.dataset.access===chosen;b.classList.toggle("active",active);b.setAttribute("aria-pressed",String(active));});
  };
  $("accessFilterButtons").innerHTML='<button type="button" class="access-filter active" data-access="Todos" aria-pressed="true">Todos · '+n+'</button>'+statuses.map(s=>'<button type="button" class="access-filter" data-access="'+s.k+'" aria-pressed="false">'+esc(s.title)+' · '+studies.filter(x=>x.datasetAudit.accessStatus===s.k).length+'</button>').join("");
  $("accessFilterButtons").addEventListener("click",e=>{const b=e.target.closest("[data-access]");if(!b)return;chosen=b.dataset.access;rerender();});
  $("dataMap").addEventListener("click",e=>{const b=e.target.closest("[data-id]");if(b&&typeof window.showDetails==="function")window.showDetails(b.dataset.id);});
  $("highlights").innerHTML=[
   {id:6,label:"Corpus aberto",desc:"O grupo do SetembroBR mantém uma página que aponta para os arquivos de dados."},
   {id:10,label:"Acesso misto",desc:"Em DepreSym, os julgamentos de relevância são publicados, enquanto os textos exigem acordo de pesquisa."},
   {id:18,label:"Arquivos restritos",desc:"O registro DepreRedditBR é público, mas o Zenodo assinala os arquivos como restritos."},
   {id:25,label:"Declaração contraditória",desc:"WU3D é descrito como público no método, mas a declaração de disponibilidade exige contato e aprovação."},
   {id:29,label:"Pedido institucional",desc:"O E-DAIC exige solicitação assinada ao USC ICT para fins acadêmicos."},
   {id:31,label:"Proteção de participantes",desc:"Amive não redistribui textos originais; o projeto de geração sintética disponibiliza o código."}
  ].map(item=>{
   const s=studies.find(x=>x.id===item.id);
   const url=s.datasetAudit.datasetUrl||s.datasetAudit.evidenceUrl;
   return '<article class="dataset-highlight"><span class="num">ESTUDO '+String(s.id).padStart(2,"0")+' · '+esc(item.label.toUpperCase())+'</span><h4>'+esc(s.datasetAudit.name)+'</h4><p>'+esc(item.desc)+'</p><a href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">Fonte oficial ↗</a></article>';
  }).join("");
  $("accessEvidence").innerHTML='<div><b>O que significa “Público”?</b>Uma fonte identificável documenta acesso a dados ou a uma versão oficial. A conferência não é garantia de que cada arquivo possa ser baixado sem credenciais hoje.</div><div><b>O que significa “Não confirmado”?</b>Não existe, nesta auditoria, prova suficiente de acesso ao corpus específico, mesmo quando o artigo e o código-fonte estão públicos.</div>';
  rerender();
 }catch(error){$("dataMap").innerHTML='<p class="loading">Não foi possível carregar o inventário de datasets. Consulte a base JSON para os registros.</p>';console.error(error);}
})();
