// Atualiza os scripts embutidos na página pública a partir dos arquivos-fonte.
// O GitHub Pages publica o index.html de forma autossuficiente para o Atlas legado.
import {readFileSync,writeFileSync} from "node:fs";
import {fileURLToPath} from "node:url";
import {resolve,dirname} from "node:path";

const root=resolve(dirname(fileURLToPath(import.meta.url)),"..");
const page=resolve(root,"tabelas/comparativo/index.html");
let html=readFileSync(page,"utf8");
const blocks=[
 {source:"atlas.js",prefix:'<script>\n\n',signature:'"use strict";\nconst STATE='},
 {source:"conexoes.js",prefix:'<script>\n',signature:'"use strict";\n(function(){\nconst G='}
];
for(const block of blocks){
 const marker=block.signature;
 const scriptStart=html.indexOf('<script>',html.indexOf('<script type="application/json" id="studiesEmbedded">'));
 const start=html.indexOf(marker,scriptStart);
 if(start<0)throw new Error("Script não encontrado na página: "+block.source);
 const contentStart=start;
 const end=html.indexOf('\n</script>',contentStart);
 if(end<0)throw new Error("Fechamento do script não encontrado: "+block.source);
 const content=readFileSync(resolve(root,"tabelas/comparativo",block.source),"utf8").trim();
 html=html.slice(0,contentStart)+content+html.slice(end);
}
if(process.argv.includes("--check")){
 if(html!==readFileSync(page,"utf8")){
  console.error("O HTML contém scripts desatualizados. Execute node scripts/embed-atlas.mjs");
  process.exitCode=1;
 }
}else{
 writeFileSync(page,html,"utf8");
 console.log("Atlas sincronizado com os scripts-fonte.");
}
