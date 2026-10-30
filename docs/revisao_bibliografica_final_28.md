# Indicadores textuais de depressão, ansiedade e estresse

**Revisão bibliográfica narrativa dirigida · 28 fontes bibliográficas distintas · 2013–2026 · 30 de outubro de 2026**

> Esta é uma revisão narrativa dirigida, não revisão sistemática ou metanálise. Inclui 27 publicações e 1 recurso oficial de benchmark, e não 28 coortes independentes. O catálogo [comparativo canônico](../tabelas/tabela_comparativa_tecnica.md) contém uma linha por fonte, com métricas, corpora e limitações.

## Resumo

Esta revisão bibliográfica narrativa dirigida analisa o emprego de inteligência artificial (IA) e processamento de linguagem natural (PLN) para identificar indicadores textuais de depressão, ansiedade e estresse, contemplando pesquisas baseadas em textos em português e em inglês. O levantamento abrange 28 fontes bibliográficas distintas, de 2013 a 2026: 27 publicações e um recurso oficial de benchmark. Os estudos são comparados quanto à origem e ao idioma dos textos, unidade de análise, estratégia de rotulagem, arquitetura computacional, métricas e ameaças à validade. A síntese examina métodos lexicais, redes neurais, transformers, LLMs e ensembles, destacando desafios comuns aos dois contextos linguísticos, como validade dos rótulos, generalização entre plataformas e línguas, disponibilidade de dados e reprodutibilidade. Trabalhos em outros idiomas são considerados quando contribuem para a avaliação metodológica. Os resultados não são agregados em metanálise, e a identificação de sinais textuais não equivale a diagnóstico clínico.

**Palavras-chave:** inteligência artificial; PLN; saúde mental; depressão; ansiedade; estresse.

## 1. Introdução

Redes sociais, fóruns e mensagens de aplicativos tornaram possível investigar características da linguagem relacionadas a estados psicológicos. Entretanto, a origem do texto, a finalidade original da publicação e a forma de rotulagem mudam o significado do que está sendo predito. Classificar uma postagem em uma categoria temática, predizer um autorrelato e identificar o diagnóstico atribuído por avaliação psiquiátrica são tarefas relacionadas, mas conceitualmente distintas.

A questão orientadora é: **como as abordagens de IA e PLN investigam indicadores linguísticos de depressão, ansiedade e estresse, e quais condições limitam a confiabilidade dos seus resultados?** O objetivo é comparar métodos, resultados e limitações de estudos com textos em português e em inglês, incluindo questões de comparabilidade e generalização entre idiomas e plataformas.

## 2. Metodologia do levantamento

O levantamento bibliográfico foi dirigido, com recorte de 2013 a 30/10/2026. Foram consultados registros de editoras e periódicos, ACL Anthology, PubMed, portais oficiais de conferências e páginas de benchmarks. Foram incluídos estudos relevantes por contribuição técnica, corpus, rotulagem, avaliação temporal, validade clínica, interpretação de sinais ou proteção dos dados.

A unidade de contagem é a **fonte bibliográfica**. Publicações de conferência e versões preliminares do mesmo artigo não são somadas duas vezes; por outro lado, estudos diferentes que utilizam SetembroBR, SMHD, Dreaddit ou eRisk são preservados como artigos distintos, sem considerá-los conjuntos de participantes independentes. Os campos avaliados são: condição, idioma, unidade de análise, corpus, ground truth, método, métrica e limitações. Quando um escore específico não pôde ser associado de forma inequívoca à tarefa e ao modelo, manteve-se **N/D**.

**Limitação do método:** não houve busca exaustiva pré-registrada, dupla triagem independente, avaliação formal do risco de viés nem meta-análise. A revisão não deve ser descrita como sistemática.

## 3. Trabalhos relacionados: evolução técnica

### 3.1 Abordagens lexicais, benchmarking e modelos multitarefa

De Choudhury et al. (2013) exploraram indicadores linguísticos e comportamentais em Twitter com supervisão a partir de medidas psicométricas e autorrelatos. Coppersmith et al. (2015) estruturaram uma shared task para depressão e PTSD. O benchmark eRisk (2017) introduziu a avaliação sequencial da detecção precoce, incluindo a métrica ERDE e penalização de atraso. Benton, Mitchell e Hovy (2017) estudaram aprendizado multitarefa, enquanto Yates, Cohan e Goharian (2017) distinguiram avaliação de posts e de usuários.

### 3.2 Recursos de dados e validade

Cohan et al. (2018) apresentaram SMHD, com autorrelatos em múltiplas condições. Husseini Orabi et al. (2018) compararam arquiteturas profundas com dados limitados. Pirina e Çöltekin (2018) mostraram como a seleção dos corpora altera o resultado. Eichstaedt et al. (2018) relacionaram linguagem de Facebook a diagnósticos registrados em prontuários (AUC 0,69; 0,72 em janela de seis meses), e Merchant et al. (2019) estudaram 21 categorias médicas em 999 participantes. A presença de prontuário não torna essas fontes equivalentes a avaliação psiquiátrica estruturada.

### 3.3 Estresse e generalização

Turcan e McKeown (2019) criaram o Dreaddit, com segmentos anotados quanto à expressão de estresse. Harrigian, Aguirre e Dredze (2020) observaram perda substancial de desempenho na transferência de classificadores de depressão entre plataformas, reforçando o risco de confundidores.

### 3.4 Transformers e LLMs

Ji et al. (2022) apresentaram MentalBERT/MentalRoBERTa, com adaptação de domínio. Poświata e Perełkiewicz (2022) combinaram DepRoBERTa e ensemble para três classes de sinais de depressão (macro-F1 0,583). Kabir et al. (2023) publicaram DEPTWEET, com 40.191 tweets anotados por gravidade expressa. Yang et al. (2024) apresentaram MentaLLaMA e um dataset de 105 mil instruções, incluindo explicações; estas não equivalem a evidência de fidelidade causal.

### 3.5 Português brasileiro e verificação clínica

SetembroBR, de dos Santos, de Oliveira e Paraboni (2024), contribui com dados de Twitter em português sobre depressão e ansiedade por autorrelato. Nagamatu e Paraboni (2024) estudam detecção precoce usando a mesma linhagem de dados; Mendes e Caseli (2024) investigam 21 sinais específicos em textos brasileiros. Viduani et al. (2025) identificaram associação entre pronomes de primeira pessoa e depressão em 52 jovens. No estudo de prova de conceito, Viduani et al. (2026a) utilizaram transcrições de 30 adolescentes e GPT-4o, reportando acurácia de 86,6%, sensibilidade de 100% e especificidade de 73,3%, com amostra pequena e selecionada. Uma revisão de escopo de Viduani et al. (2026b) enfatiza a heterogeneidade das técnicas e fontes.

### 3.6 Novos trabalhos em sintomas, privacidade e transferência

Pérez et al. (2025) apresentaram DepreSym, com 21.580 sentenças e 21 sintomas do BDI-II. Karpontinis e Soufleri (2025) investigaram DP-CARE sobre Dreaddit, com F1 de classe estresse de 78,08% e custo de privacidade aproximado ε=3. Chung et al. (2025) relacionaram mensagens em coreano a triagem PHQ-9 com KcBERT e BERTopic (F1 reportado 0,87). AlSaad, Alshakhs e Thomas (2026) compararam fine-tuning e few-shot para subtipos textuais de depressão. Kallstenius et al. (2026) avaliaram ensembles em 60.889 textos; a fusão soft alcançou acurácia 93,9%, mas a separação foi por postagem e os rótulos não eram clínicos. Alqahtani, Kayi e Diab (2026) obtiveram F1 0,82 em SMM4H e 0,81 em Dreaddit com StressRoBERTa, estudando transferência entre condições.

## 4. Análise crítica

**Validade de construto.** Fórum de origem, rótulo autorreferido, sintoma expresso, escala psicométrica, registro em prontuário e avaliação clínica têm significados diferentes. Resultados não devem ser agregados como se todos reconhecessem diagnósticos.

**Unidade de análise.** A independência entre treino e teste depende da divisão por participante, controle de duplicatas e temporalidade. Quando a divisão ocorre por postagem, mensagens relacionadas podem influenciar métricas; isso precisa ser investigado, não presumido.

**Comparabilidade.** Accuracy, macro-F1, AP, AUROC, ERDE e correlação respondem a perguntas diferentes. A acurácia de Kallstenius et al. (2026) para nove classes em textos de redes sociais não pode ser ranqueada diretamente contra a classificação binária da coorte clínica de Viduani et al. (2026a).

**Explicabilidade.** Uma justificativa gerada por LLM pode soar plausível sem ser uma explicação fiel da decisão. É preferível avaliar sinais linguísticos anotados, protocolos interpretativos e erros por classe.

**Privacidade e segurança.** Textos de saúde mental são potencialmente sensíveis, inclusive quando divulgados publicamente. A reutilização exige atenção à licença, finalidade, anonimização, LGPD, confidencialidade e avaliação ética cabível. Resultados com privacidade diferencial oferecem hipóteses relevantes, mas não eliminam restrições de dados.

## 5. Lacunas e oportunidades

Persistem desafios nos dois contextos linguísticos: estudos em inglês dispõem de maior diversidade de benchmarks, mas enfrentam limitações na qualidade dos rótulos e na transferência entre plataformas; em português, corpora com referência clínica independente para depressão, ansiedade e estresse permanecem restritos. Também há lacunas em avaliação entre faixas etárias, anotação de sintomas com consenso de especialistas e protocolos reprodutíveis com divisão por participante, baselines, calibração, intervalos de confiança e análises externas.

Uma avaliação técnica futura pode comparar TF-IDF e regressão logística, modelos especializados em português e inglês (como BERTimbau e modelos de domínio em inglês) e modelos multilíngues sob protocolos comparáveis e análise separada por idioma. Quando os rótulos forem apenas sociais ou textuais, a conclusão deve se restringir à detecção de **indicadores linguísticos**, e não a diagnósticos.

## 6. Conclusão

Os 28 trabalhos ilustram a progressão de recursos lexicais a transformers, LLMs e ensembles, mas deixam claro que o desempenho isolado não mede validade clínica. A confiabilidade depende do que o rótulo representa, do grupo sobre o qual o modelo decide, da transferência a outros contextos e dos controles de privacidade e engenharia de software. A principal contribuição desta revisão dirigida é organizar essas distinções e apoiar avaliações reproduzíveis de textos em português e em inglês, inclusive quanto à transferência entre contextos linguísticos.

## Quadro comparativo

Para evitar duplicação de linhas e facilitar atualização, os **28 trabalhos** estão na [tabela comparativa técnica canônica](../tabelas/tabela_comparativa_tecnica.md). Cada fonte apresenta corpus, modelos, métricas disponíveis e limitações.

## Referências bibliográficas (padrão autor-data/ABNT simplificado)

ALQAHTANI, Amal Abdullah; KAYI, Efsun; DIAB, Mona T.. **StressRoBERTa: Cross-Condition Transfer Learning from Depression, Anxiety, and PTSD to Stress Detection**. Proceedings of HeaLing 2026, p. 305-313, 2026. Disponível em: https://doi.org/10.18653/v1/2026.healing-1.27. Acesso em: 30 out. 2026.

ALSAAD, R.; ALSHAKHS, S.; THOMAS, R.. **Depression subtype classification from social media posts: few-shot prompting vs. fine-tuning of large language models**. Frontiers in Digital Health, v. 8, 1790533, 2026. Disponível em: https://doi.org/10.3389/fdgth.2026.1790533. Acesso em: 30 out. 2026.

BENTON, Adrian; MITCHELL, Margaret; HOVY, Dirk. **Multitask Learning for Mental Health Conditions with Limited Social Media Data**. Proceedings of EACL 2017, p. 152-162, 2017. Disponível em: https://aclanthology.org/E17-1015/. Acesso em: 30 out. 2026.

CHUNG, Moo-Kwon et al.. **BERT and BERTopic for screening clinical depression on open-ended text messages collected through a mobile application from older adults**. BMC Public Health, v. 25, 2161, 2025. Disponível em: https://doi.org/10.1186/s12889-025-23337-4. Acesso em: 30 out. 2026.

COHAN, Arman et al.. **SMHD: a Large-Scale Resource for Exploring Online Language Usage for Multiple Mental Health Conditions**. Proceedings of COLING 2018, p. 1485-1497, 2018. Disponível em: https://aclanthology.org/C18-1126/. Acesso em: 30 out. 2026.

COPPERSMITH, Glen et al.. **CLPsych 2015 Shared Task: Depression and PTSD on Twitter**. Proceedings of CLPsych 2015, p. 31-39, 2015. Disponível em: https://doi.org/10.3115/v1/W15-1204. Acesso em: 30 out. 2026.

DE CHOUDHURY, Munmun et al.. **Predicting Depression via Social Media**. Proceedings of the International AAAI Conference on Web and Social Media, v. 7, n. 1, p. 128-137, 2013. Disponível em: https://doi.org/10.1609/icwsm.v7i1.14432. Acesso em: 30 out. 2026.

DOS SANTOS, Wesley Ramos; DE OLIVEIRA, Rafael Lage; PARABONI, Ivandré. **SetembroBR: a social media corpus for depression and anxiety disorder prediction**. Language Resources and Evaluation, v. 58, p. 273-300, 2024. Disponível em: https://doi.org/10.1007/s10579-022-09633-0. Acesso em: 30 out. 2026.

EICHSTAEDT, Johannes C. et al.. **Facebook language predicts depression in medical records**. Proceedings of the National Academy of Sciences, v. 115, n. 44, p. 11203-11208, 2018. Disponível em: https://doi.org/10.1073/pnas.1802331115. Acesso em: 30 out. 2026.

ERISK. **eRisk 2017: Pilot task on Early Detection of Depression**. Página oficial do desafio CLEF eRisk, recurso eletrônico, 2017. Disponível em: https://erisk.irlab.org/2017/task.html. Acesso em: 30 out. 2026.

HARRIGIAN, Keith; AGUIRRE, Carlos; DREDZE, Mark. **Do Models of Mental Health Based on Social Media Data Generalize?**. Findings of EMNLP 2020, p. 3774-3788, 2020. Disponível em: https://doi.org/10.18653/v1/2020.findings-emnlp.337. Acesso em: 30 out. 2026.

HUSSEINI ORABI, Ahmed et al.. **Deep Learning for Depression Detection of Twitter Users**. Proceedings of CLPsych 2018, p. 88-97, 2018. Disponível em: https://doi.org/10.18653/v1/W18-0609. Acesso em: 30 out. 2026.

JI, Shaoxiong et al.. **MentalBERT: Publicly Available Pretrained Language Models for Mental Healthcare**. Proceedings of LREC 2022, p. 7184-7190, 2022. Disponível em: https://aclanthology.org/2022.lrec-1.778/. Acesso em: 30 out. 2026.

KABIR, Mohsinul et al.. **DEPTWEET: A typology for social media texts to detect depression severities**. Computers in Human Behavior, v. 139, 107503, 2023. Disponível em: https://doi.org/10.1016/j.chb.2022.107503. Acesso em: 30 out. 2026.

KALLSTENIUS, Thomas et al.. **Ensemble of Domain-Specific Natural Language Processing and Large Language Models for Detecting Suicidal Ideation and Mental Health Conditions in Social Media Text: Development and Evaluation Study**. JMIR Mental Health, v. 13, e98925, 2026. Disponível em: https://doi.org/10.2196/98925. Acesso em: 30 out. 2026.

KARPONTINIS, Dimitris; SOUFLERI, Efstathia. **DP-CARE: a differentially private classifier for mental health analysis in social media posts**. Frontiers in Digital Health, v. 7, 1709671, 2025. Disponível em: https://doi.org/10.3389/fdgth.2025.1709671. Acesso em: 30 out. 2026.

MENDES, Augusto R.; CASELI, Helena. **Identifying Fine-grained Depression Signs in Social Media Posts**. Proceedings of LREC-COLING 2024, p. 8594-8604, 2024. Disponível em: https://aclanthology.org/2024.lrec-main.754/. Acesso em: 30 out. 2026.

MERCHANT, Raina M. et al.. **Evaluating the predictability of medical conditions from social media posts**. PLOS ONE, v. 14, n. 6, e0215476, 2019. Disponível em: https://doi.org/10.1371/journal.pone.0215476. Acesso em: 30 out. 2026.

NAGAMATU, Bruno; PARABONI, Ivandré. **Detecção precoce de transtornos de saúde mental em português**. Linguamática, v. 16, n. 2, p. 3-19, 2024. Disponível em: https://doi.org/10.21814/lm.16.2.440. Acesso em: 30 out. 2026.

PÉREZ, Anxo et al.. **DepreSym: A Depression Symptom Annotated Corpus and the Role of Large Language Models as Assessors of Psychological Markers**. Language Resources and Evaluation, v. 59, p. 2737-2762, 2025. Disponível em: https://doi.org/10.1007/s10579-025-09831-6. Acesso em: 30 out. 2026.

PIRINA, Inna; ÇÖLTEKIN, Çağrı. **Identifying Depression on Reddit: The Effect of Training Data**. Proceedings of SMM4H 2018, p. 9-12, 2018. Disponível em: https://doi.org/10.18653/v1/W18-5903. Acesso em: 30 out. 2026.

POŚWIATA, Rafał; PEREŁKIEWICZ, Michał. **OPI@LT-EDI-ACL2022: Detecting Signs of Depression from Social Media Text using RoBERTa Pre-trained Language Models**. Proceedings of LT-EDI 2022, p. 276-282, 2022. Disponível em: https://doi.org/10.18653/v1/2022.ltedi-1.40. Acesso em: 30 out. 2026.

TURCAN, Elsbeth; MCKEOWN, Kathy. **Dreaddit: A Reddit Dataset for Stress Analysis in Social Media**. Proceedings of LOUHI 2019, p. 97-107, 2019. Disponível em: https://aclanthology.org/D19-6213/. Acesso em: 30 out. 2026.

VIDUANI, Anna et al.. **First-person pronouns as linguistic markers of depression among Brazilian youths**. Brazilian Journal of Psychiatry, v. 47, e20244058, 2025. Disponível em: https://doi.org/10.47626/1516-4446-2024-4058. Acesso em: 30 out. 2026.

VIDUANI, Anna et al.. **Exploring GPT-based models for depression detection in adolescents using naturalistic speech: A proof-of-concept study**. Journal of Affective Disorders, v. 410, 121956, 2026a. Disponível em: https://doi.org/10.1016/j.jad.2026.121956. Acesso em: 30 out. 2026.

VIDUANI, Anna et al.. **From linguistic analyses to large language models: A scoping review of methods used to investigate language features in depression research**. Psychiatry Research, v. 360, 117064, 2026b. Disponível em: https://doi.org/10.1016/j.psychres.2026.117064. Acesso em: 30 out. 2026.

YANG, Kailai et al.. **MentaLLaMA: Interpretable Mental Health Analysis on Social Media with Large Language Models**. Proceedings of The Web Conference 2024, p. 4489-4500, 2024. Disponível em: https://doi.org/10.1145/3589334.3648137. Acesso em: 30 out. 2026.

YATES, Andrew; COHAN, Arman; GOHARIAN, Nazli. **Depression and Self-Harm Risk Assessment in Online Forums**. Proceedings of EMNLP 2017, p. 2968-2978, 2017. Disponível em: https://doi.org/10.18653/v1/D17-1322. Acesso em: 30 out. 2026.


## Registro de verificações e ressalvas

- **28 identificadores únicos:** conferidos com as URLs da tabela canônica; 27 publicações e a página de benchmark eRisk 2017.
- **Divergência em DP-CARE:** o resumo reporta recall 88,67%, mas a Tabela 4 apresenta 86,67% para a classe de estresse. A divergência foi documentada; mantém-se F1 de 78,08%.
- **Datas bibliográficas:** SetembroBR online em 2023 e publicado no volume de 2024; MentaLLaMA preprint 2023 e versão conferência 2024; ambos contabilizados uma vez.
- **Limitações:** nem todos os artigos permitiram consulta integral irrestrita; N/D não significa desempenho zero. A conferência não reproduz experimentos, inspeciona todos os corpora privados nem certifica licenças.
- **Formatação:** normalização autor-data/ABNT simplificada com acesso em 30/10/2026; ajustar, se necessário, às exigências específicas do programa.
- **Uso responsável:** o material não reproduz textos pessoais, transcrições clínicas nem identificadores de participantes.
