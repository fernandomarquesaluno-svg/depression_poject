# Indicadores textuais de depressão, ansiedade e estresse — revisão bibliográfica

**Levantamento bibliográfico dirigido — 2013–2026.**

> Material acadêmico em andamento. Não é revisão sistemática, não emprega PRISMA e não constitui instrumento para diagnóstico de transtornos mentais. `N/D` indica dado não confirmado, não valor zero. Métricas de tarefas distintas não devem ser comparadas como um ranking.

## 1. Síntese nas seis dimensões

### 1.1 Fontes de texto
Redes sociais (Twitter/X, Reddit e Facebook) fornecem grandes corpora de linguagem espontânea, porém carregam viés de seleção e de plataforma. Estudos clínicos empregam entrevistas, conversas ou transcrições de áudios, com amostras menores e maior validade de referência. Laudos e prontuários clínicos constituem uma terceira modalidade, com terminologia e restrições ético-legais distintas. **O estudo de Viduani et al. (2026) utiliza transcrições de áudios cotidianos, não laudos como entrada do modelo.**

### 1.2 Estratégias de rotulagem (ground truth)
A hierarquia metodológica é: avaliação estruturada por profissional com critérios diagnósticos; escala psicométrica padronizada aplicada a participantes; autorrelato de diagnóstico; rótulo inferido de comunidade; e classificação do assunto de um único post. Essas categorias não são intercambiáveis. O PHQ-9 mensura sintomas e não equivale isoladamente a entrevista diagnóstica; o K-SADS é instrumento estruturado de avaliação psiquiátrica, quando efetivamente empregado. Os rótulos de Viduani (2026) foram estabelecidos por psiquiatra infantojuvenil utilizando procedimentos de padrão-ouro; o resumo disponível não especifica nominalmente K-SADS/PHQ-9.

### 1.3 Tarefas de PLN
Classificação binária do participante; classificação multiclasse de sintomas ou condições; anotação de sinais específicos; estimação contínua de escalas; detecção precoce em sequências temporais; e geração de explicações. Prever risco do usuário não é sinônimo de rotular uma postagem. A palavra “estresse” em uma postagem não demonstra diagnóstico clínico de um transtorno.

### 1.4 Representações textuais
Frequências de palavras e n-gramas, TF-IDF, categorias do LIWC, recursos lexicais de emoções, embeddings estáticos Word2Vec/FastText, embeddings contextuais BERT/RoBERTa e representações de LLMs. Recursos lexicais são auditáveis mas sensíveis a contexto, ironia, negação e variantes sociolinguísticas; transformers capturam contexto, mas explicabilidade e generalização exigem análise independente.

### 1.5 Evolução dos modelos de IA
O percurso abrange engenharia de atributos e LIWC com SVM/regressão logística (década de 2010), redes profundas (CNN/RNN), transformers contextualizados (BERT, BERTimbau, MentalBERT/MentalRoBERTa) e LLMs baseados em prompts ou ajustados. LLMs com justificativas textuais não oferecem, por si, explicações clínicas fiéis. Trabalhos de 2026 também exploram ensembles e restrições ao peso de LLMs em tarefas de triagem textual.

### 1.6 Lacunas no português brasileiro
Menor disponibilidade de corpora anotados clinicamente; predomínio de rótulos autorreferidos em redes sociais; escassez de corpora multicondição (depressão/ansiedade/estresse) com escalas separadas; pouca avaliação externa entre regiões, faixa etária e plataforma; diferenças entre português escrito e fala transcrita; dificuldades de acesso a textos por licenças e dados sensíveis.

## 3. Discussão crítica

**Rótulos e validade.** Um post publicado em fórum de depressão é evidência de participação em um contexto temático, não de um transtorno confirmado. Autorrelato de diagnóstico é mais próximo do construto clínico, mas pode ter erro de autorrepresentação e controles com falso negativo. Instrumentos como DASS-21 e PHQ-9 ajudam a aferir intensidade de sintomas, mas seus pontos de corte não equivalem automaticamente ao diagnóstico. Diagnóstico realizado por psiquiatra é referência mais forte, embora sujeito a desenho amostral e critérios aplicados.

**Assimetria entre idiomas.** SetembroBR amplia escala em português, mas carece de verdade-terreno clínica independente; Viduani 2026 oferece rótulo clínico, mas apenas 30 participantes. Não existe evidência de que o desempenho de modelos ingleses como MentalBERT se transfira ao português sem ajuste e validação independente. Tokenização, regionalismos, negação, gírias e diferenças de registro são fontes de drift.

**Caixa-preta versus sintomas.** A geração de uma explicação por LLM não comprova fidelidade ao raciocínio interno do classificador nem validade médica. Recomenda-se uma análise paralela de categorias interpretáveis: sono, humor, desesperança, anedonia, preocupação, fadiga, tensão, autorreferência e negação; mapeamentos para DSM-5/PHQ-9 devem ser apresentados como hipóteses sobre *expressões linguísticas de sintomas*, não diagnóstico automático. PHQ-9 privilegia depressão; DASS-21 fornece dimensões de depressão, ansiedade e estresse se aplicada diretamente a participantes.

**Avaliação e leakage.** Separar treino/teste por participante, não por post, é obrigatório quando há repetidas mensagens por autor. Controlar temporalidade (somente textos anteriores ao marco), duplicatas, distorção entre plataformas, possíveis confundidores (idade, gênero, condição socioeconômica) e domínio. Reportar macro-F1, F1 por condição, AUROC com IC, sensibilidade, especificidade, calibração e desempenho externo. Para detecção precoce incluir ERDE/F1-latency e antecedência.

**Licença e privacidade.** Conteúdo publicado na internet não se torna automaticamente redistribuível, especialmente dados sobre saúde mental. SetembroBR oferece IDs de tweets sujeitos a hidratação/API, que pode não recuperar tweets removidos; o acesso a posts e conversas está sujeito a condições de plataforma. Analisar bases, termos de uso e IRB/CEP; anonimizar dados, reduzir reidentificação, separar chaves e limitar retenção. Áudios e transcrições de jovens exigem cuidado adicional, consentimento e autorização institucional. Para dados pessoais sensíveis sob LGPD, definir base legal e finalidade, e não enviar textos clínicos identificáveis a APIs externas sem autorização contratual e ética.

### Possíveis extensões metodológicas (não implementadas)
1. **Definir construtos distintos:** depressão, ansiedade e estresse; não combinar uma postagem com o diagnóstico da pessoa. Registrar nível do rótulo: trecho, postagem ou participante.
2. **Iniciar com baselines auditáveis:** TF-IDF + regressão logística, LIWC-PT e features n-gramas; ablações com e sem recursos linguísticos.
3. **Testar BERTimbau:** classificação supervisionada com fine-tuning em corpus PT-BR e comparação com mBERT e modelo multilíngue. Justificativas clínicas só se ancoradas em anotações de sinais; explicabilidade de tokens não é causalidade.
4. **Análise por dimensão:** classificadores independentes/multirrótulo com métricas por condição e avaliação por grupo. Se dados clínicos não estiverem disponíveis, limitar as conclusões à **detecção de indicadores textuais**, não à doença.
5. **Definir validação:** split por usuário, validação externa, intervalos de confiança e protocolo reproduzível; documentar licenças e consentimento.

## 4. Ajustes de atribuição bibliográfica
- **MentalBERT** é de **Ji et al. (2022)**, com Tianlin Zhang como coautor; citar “Zhang et al.” como primeiro autor é incorreto.
- **SetembroBR**: **dos Santos, de Oliveira e Paraboni**, artigo no volume de **2024** (aceitação/online anterior); não atribuir a “Leiva & Coto (2023)”.
- **MentaLLaMA**: preprint **2023**, publicação em conferência **2024**.
- **DEPTWEET**: volume 139 de *Computers in Human Behavior*, fevereiro de **2023**, embora DOI contenha o ano de 2022.
- **Viduani**: pronomes/LIWC **2025**; classificação GPT-4o **2026**; revisão de escopo **2026**.

## Fontes primárias

1. De Choudhury et al. (2013), *Predicting Depression via Social Media*: https://doi.org/10.1609/icwsm.v7i1.14432
2. Coppersmith et al. (2015), *CLPsych Shared Task*: https://aclanthology.org/W15-1204/
3. eRisk 2017, página oficial: https://erisk.irlab.org/2017/task.html
4. Cohan et al. (2018), *SMHD*: https://aclanthology.org/C18-1126/
5. Turcan & McKeown (2019), *Dreaddit*: https://aclanthology.org/D19-6213/
6. Ji et al. (2022), *MentalBERT*: https://aclanthology.org/2022.lrec-1.778/
7. Kabir et al. (2023), *DEPTWEET*: https://doi.org/10.1016/j.chb.2022.107503
8. Yang et al. (2023/2024), *MentaLLaMA*: https://arxiv.org/abs/2309.13567
9. dos Santos, de Oliveira & Paraboni (2024), *SetembroBR*: https://doi.org/10.1007/s10579-022-09633-0
10. Nagamatu & Paraboni (2024): https://doi.org/10.21814/lm.16.2.440
11. Mendes & Caseli (2024): https://aclanthology.org/2024.lrec-main.754/
12. Viduani et al. (2025), pronomes: https://pubmed.ncbi.nlm.nih.gov/40512870/
13. Viduani et al. (2026), GPT-4o: https://doi.org/10.1016/j.jad.2026.121956
14. AlSaad, Alshakhs & Thomas (2026): https://doi.org/10.3389/fdgth.2026.1790533
15. Kallstenius et al. (2026): https://doi.org/10.2196/98925
16. Viduani et al. (2026), revisão: https://doi.org/10.1016/j.psychres.2026.117064

**Nota de reprodutibilidade:** métricas de estudos distintos não constituem ranking. Cada valor corresponde a tarefa, unidade de análise, definição de rótulo e protocolo próprios. Citar sempre a unidade e o desfecho avaliado.

**Nota de atualização (outubro de 2026):** a página oficial da CLPsych informa que o conjunto de 2015 possuía **1.711 usuários** e foi retirado de distribuição em junho de 2026. Fonte: https://www.cs.jhu.edu/~mdredze/clpsych-2015-shared-task-evaluation/
