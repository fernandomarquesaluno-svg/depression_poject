const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const {join}=require('node:path');
const {makeDefault,presetPreferences,calculateRanking,matches}=require('../tabelas/comparativo/prioridades.js');
const studies=JSON.parse(readFileSync(join(__dirname,'../tabelas/comparativo/estudos.json'),'utf8')).studies;

test('usa as 33 fichas auditadas sem alterar seus dados',()=>{
 assert.equal(studies.length,33);
 assert.equal(calculateRanking(studies,makeDefault()).length,33);
});

test('um único critério ativo atribui 100% somente aos estudos correspondentes',()=>{
 const p=makeDefault();
 for(const key of Object.keys(p))p[key].enabled=false;
 p.condition.enabled=true;p.condition.value='Depressão';p.condition.weight=5;
 const ranked=calculateRanking(studies,p);
 for(const r of ranked){
  assert.equal(r.score,r.study.conditions.includes('Depressão')?100:0);
 }
});

test('peso mais alto altera a ordem de estudos com aderência oposta',()=>{
 const a={id:101,title:'A',conditions:['Depressão'],analysisTaxonomy:{methodFamilies:['ML clássico']}};
 const b={id:102,title:'B',conditions:['Ansiedade'],analysisTaxonomy:{methodFamilies:['LLMs']}};
 const p=makeDefault();for(const key of Object.keys(p))p[key].enabled=false;
 p.condition.enabled=true;p.condition.weight=5;p.method.enabled=true;p.method.weight=1;
 assert.equal(calculateRanking([a,b],p)[0].study.id,101);
 p.condition.weight=1;p.method.weight=5;
 assert.equal(calculateRanking([a,b],p)[0].study.id,102);
});

test('não assume acesso público quando apenas há URL, nem considera revisões empíricas',()=>{
 const withLink=studies.find(s=>s.datasetAudit?.datasetUrl&&s.datasetAudit?.accessStatus!=='publico');
 const review=studies.find(s=>s.analysisTaxonomy?.publicationKind==='sintese');
 assert.ok(withLink);assert.ok(review);
 assert.equal(matches(withLink,'datasetLink'),true);
 assert.equal(matches(withLink,'access'),false);
 assert.equal(matches(review,'empirical'),false);
});

test('sem critérios selecionados não produz pontuação fictícia',()=>{
 const p=makeDefault();for(const key of Object.keys(p))p[key].enabled=false;
 assert.deepEqual(calculateRanking(studies,p),[]);
});

test('perfis rápidos alteram os critérios com um clique sem exigir ajuste manual de pesos',()=>{
 const llm=presetPreferences('llm'),br=presetPreferences('br'),open=presetPreferences('open');
 assert.deepEqual(Object.keys(llm).filter(k=>llm[k].enabled),['condition','method','empirical']);
 assert.deepEqual(Object.keys(br).filter(k=>br[k].enabled),['condition','language','empirical']);
 assert.deepEqual(Object.keys(open).filter(k=>open[k].enabled),['access','datasetLink']);
 assert.equal(calculateRanking(studies,llm).length,33);
 assert.equal(calculateRanking(studies,open).length,33);
});

test('preserva ordenação alfabética em empates e não consulta métricas de desempenho',()=>{
 const p=makeDefault();for(const key of Object.keys(p))p[key].enabled=false;
 p.empirical.enabled=true;
 const examples=[
  {id:1,title:'Zeta',results:'F1 99%',analysisTaxonomy:{publicationKind:'empirico'}},
  {id:2,title:'Alfa',results:'F1 5%',analysisTaxonomy:{publicationKind:'empirico'}}
 ];
 assert.deepEqual(calculateRanking(examples,p).map(r=>r.study.title),['Alfa','Zeta']);
});
