# Revisão bibliográfica dirigida: indicadores textuais de depressão, ansiedade e estresse

**Recorte:** 2013–2026 · **Atualização:** 30/10/2026 · **Escopo:** PLN aplicado à análise de textos em português e inglês. Não é revisão sistemática nem segue PRISMA.

> **Base bibliográfica única:** consulte a [tabela comparativa com 16 referências distintas, métricas e links originais](../tabelas/tabela_comparativa_tecnica.md). Os estudos não são repetidos aqui em fichas ou outra tabela.

## 1. As seis dimensões da literatura

### 1.1 Fontes de texto
Históricos de Twitter/X e Reddit permitem escala e sequências temporais; postagens do Facebook mostram expressões mais longas; entrevistas, conversas e áudios transcritos oferecem um registro naturalístico próximo do contexto clínico. Posts públicos, transcrições de fala e prontuários são **modalidades diferentes**, com riscos, vocabulário e protocolos de acesso diferentes. O texto produzido espontaneamente por uma pessoa não equivale a um laudo produzido pelo profissional de saúde.

### 1.2 Estratégias de rotulagem (ground truth)
A qualidade inferencial depende da origem dos rótulos. Comunidade temática e autodeclaração são proxies de risco ou discurso. Anotação humana pode marcar *sinais presentes no texto*, sem declarar que o autor possui um transtorno. Instrumentos como PHQ-9, CES-D e DASS-21 medem sintomas sob condições próprias; avaliação clínica estruturada investiga diagnósticos. Essas fontes **não devem ser equiparadas nem ordenadas mecanicamente**: cada uma mede construtos distintos.

### 1.3 Tarefas de PLN
As tarefas principais são: classificação binária por participante, classificação multiclasse de textos, classificação multirrótulo de sinais, regressão de escores e detecção antecipada em linha temporal. É necessário declarar a **unidade de predição**: trecho, post, usuário ou entrevista. Um único post sobre depressão pode ser produzido por pessoa sem depressão.

### 1.4 Representações textuais
A literatura emprega dicionários psicolinguísticos (LIWC), atributos manuais, n-gramas e TF-IDF, vetores Word2Vec/FastText e embeddings contextualizados de transformers. Recursos lexicais favorecem auditoria, mas têm dificuldade com ironia, negação e deslocamento de contexto. Representações profundas incorporam semântica contextual, sem assegurar validade clínica.

### 1.5 Evolução dos modelos de IA
Classificadores como regressão logística e SVM estabeleceram baselines; CNN/RNN introduziram aprendizado de padrões; BERT e RoBERTa passaram a usar representações contextuais; LLMs e fusões ponderadas permitem previsão via prompting/fine-tuning e integração entre modelos. **Maior complexidade não garante desempenho superior** em todos os corpora. Justificativas geradas não demonstram fidelidade causal.

### 1.6 Lacunas no português brasileiro
Há menos corpora com rótulos clínicos independentes, especialmente para **depressão, ansiedade e estresse avaliados como três dimensões distintas**. A generalização entre redes sociais, regiões, registros linguísticos, faixas etárias e dados clínicos permanece insuficientemente testada. Corpora sociais volumosos podem ter menor validade dos rótulos; amostras clínicas são frequentemente pequenas.

## 2. Análise crítica

### 2.1 Validade de construto
Obter alta acurácia separando postagens de diferentes comunidades demonstra discriminação do **discurso** coletado, não diagnóstico. Modelos podem memorizar estilo de subreddit, palavras de coleta e convenções de anotação. A validade externa exige população, tarefa e referência independente pertinentes.

### 2.2 Dependência entre fontes
Uma publicação que reutiliza um corpus de outra publicação oferece **um experimento distinto**, não um novo conjunto independente de pessoas. Também se deve distinguir preprint e publicação revisada por pares: são versões de um mesmo trabalho quando partilham DOI/título e experimentos.

### 2.3 Boas práticas de validação
Priorizar divisão por **participante** quando há várias mensagens por pessoa; separar aumento de dados apenas após o split; controlar duplicatas e temporalidade; testar deslocamento entre plataformas; reportar precisão, recall, macro-F1, AUC-ROC, AP ou ERDE conforme tarefa e tamanho dos grupos, com intervalos de confiança. Comparar baselines sob o mesmo protocolo.

### 2.4 Interpretação de indicadores
Sinais linguísticos como pronomes, sono, fadiga, tristeza e preocupação podem ser vinculados a taxonomias de sintomas, mas não autorizam inferir critérios diagnósticos completos. Transparência metodológica requer delimitar o que foi efetivamente anotado e medido.

### 2.5 Ética, licenças e proteção dos dados
Conteúdo público pode ser sensível e não deve ser redistribuído sem revisão de licença e termos de plataforma. Evitar publicar mensagens, identificadores pessoais, transcrições clínicas e registros de jovens. Avaliar LGPD, consentimento e eventual necessidade de apreciação por CEP/IRB. Em caso de APIs terceirizadas, considerar fluxo de dados, retenção e minimização.

## 3. Escopo da revisão

Esta é uma **síntese narrativa dirigida** de referências representativas, sem alegar exaustividade, metanálise ou busca PRISMA. O [catálogo bibliográfico técnico](../tabelas/tabela_comparativa_tecnica.md) reúne **uma única linha e link para cada publicação**. Os valores que não puderam ser sustentados integralmente nas fontes acessíveis foram removidos ou substituídos por **N/D**. O [registro de auditoria](../tabelas/registro_de_verificacao.md) explica as decisões, sem reproduzir outra vez os estudos.

**Conclusão:** o desafio central é conciliar desempenho computacional, qualidade do ground truth, generalização e interpretação responsável dos sinais textuais.
