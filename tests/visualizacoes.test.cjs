const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const {join}=require('node:path');
const {summarizeMethods,summarizeAccess}=require('../tabelas/comparativo/visualizacoes.js');
const studies=JSON.parse(readFileSync(join(__dirname,'../tabelas/comparativo/estudos.json'),'utf8')).studies;

test('gráfico de métodos contabiliza apenas estudos empíricos',()=>{
 const result=summarizeMethods(studies);
 assert.equal(result.studyCount,studies.filter(s=>s.analysisTaxonomy?.publicationKind==='empirico').length);
 assert.equal(result.studyCount,25);
 assert.equal(result.associationCount,result.bars.reduce((sum,b)=>sum+b.count,0));
});

test('selecionar depressão respeita condições documentadas e estudos empíricos',()=>{
 const result=summarizeMethods(studies,'Depressão');
 const ids=studies.filter(s=>s.analysisTaxonomy?.publicationKind==='empirico'&&s.conditions.includes('Depressão')).map(s=>s.id);
 assert.equal(result.studyCount,ids.length);
 for(const bar of result.bars)assert.ok(bar.ids.every(id=>ids.includes(id)));
});

test('gráfico de acesso cobre as 33 referências sem inferir liberação de datasets',()=>{
 const result=summarizeAccess(studies);
 assert.equal(result.reduce((sum,r)=>sum+r.count,0),studies.length);
 assert.equal(result.find(r=>r.key==='publico').count,5);
 assert.equal(result.find(r=>r.key==='nao_confirmado').count,3);
 assert.ok(Math.abs(result.reduce((sum,r)=>sum+r.percentage,0)-100)<0.0001);
});

test('interface oferece três ações iniciais e mantém análises avançadas opcionais',()=>{
 const html=readFileSync(join(__dirname,'../tabelas/comparativo/index.html'),'utf8');
 const js=readFileSync(join(__dirname,'../tabelas/comparativo/atlas.js'),'utf8');
 assert.match(html,/Três caminhos para explorar o Atlas/);
 assert.equal((html.match(/class="preview-tile"/g)||[]).length,3);
 for(const id of ['pairwiseDetails','methodInsights','mapa','accessBars'])assert.match(html,new RegExp('id="'+id+'"'));
 assert.match(html,/<details class="atlas-more pairwise-details reveal" id="pairwiseDetails">/);
 assert.match(html,/<details class="atlas-more atlas-map-more reveal">/);
 assert.match(html,/Ver gráfico de métodos por condição/);
 assert.match(js,/if\(STATE\.selected\.length\)\$\("#pairwiseDetails"\)\.open=true/);
 assert.doesNotMatch(html,/role="region" aria-label="Matriz científica para apresentação"/);
});
