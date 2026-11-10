# Auditoria de datasets, procedência e acessibilidade — 33 referências (2020–2026)

**Data de conferência:** 10 de novembro de 2026  
**Objeto:** inventário documental de 33 referências de IA e PLN em indicadores textuais de saúde mental.  
**Natureza:** revisão narrativa; não é revisão sistemática, metanálise própria ou reprodução independente de cada experimento.

## O que este registro responde

Cada ficha declara **qual dataset ou recurso** foi usado (quando identificável), **de onde vieram os textos**, **se o corpus ou suas partes podem ser obtidos**, **onde está a evidência** e **o que permanece sem confirmação**. Um artigo, código ou modelo de acesso aberto **não demonstra** acesso aberto ao corpus completo. Para trabalhos de revisão, não se pressupõe dataset novo.

## Distribuição documental

- **Público (documentado):** 5 referências
- **Controlado / mediante solicitação:** 5 referências
- **Restrito:** 2 referências
- **Parcial / componentes diferentes:** 8 referências
- **Não confirmado:** 8 referências
- **Não se aplica (revisão):** 5 referências

**Total:** 33. Essas categorias são por *publicação*, não por corpus distinto: um artigo pode combinar bases com regimes diversos, classificado então como **parcial**. Nem toda publicação é empírica.

## Fichas de auditoria

### 01. Harrigian, Aguirre & Dredze (2020) — Generalization

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2020.findings-emnlp.337/)  
**Categoria:** Pesquisa · 2020 · Inglês  
**Dataset / recurso:** CLPsych 2015; Multi-Task Learning; RSDD; SMHD; Topic-Restricted Text  
**Plataforma de origem:** Twitter/X e Reddit  
**Acesso ao corpus:** **Controlado / mediante solicitação**  
**Portal de dados, IDs ou solicitação:** [acessar](https://github.com/kharrigian/emnlp-2020-mental-health-generalization)  
**Fonte da verificação:** [consultar fonte](https://github.com/kharrigian/emnlp-2020-mental-health-generalization)  
**Evidência:** A maior parte das bases exige acordos de uso ou aprovação ética; o repositório descreve uma exceção de acesso para Topic-Restricted Text.  
**Ressalva técnica:** Cinco corpora comparados; não existe um único dataset independente criado pelo artigo.  
**Volume e amostra descritos:** Cinco corpora de usuários: CLPsych (477 depressão / 477 controle), Multi-Task Learning (1.400 / 1.400), RSDD (9.210 / 107.274), SMHD (14.139 / 127.251) e Topic-Restricted Text (6.853 / 7.016). Valores por grupo reportados na Tabela 1 do artigo.  
**Rotulagem:** Supervisão distante por autorrelato ou proxy de plataforma  
**Abordagem:** Classificadores de depressão; testes de transferência entre plataformas  
**Resultado original resumido:** Na análise de artefatos temporais, a separação desajustada elevou artificialmente o F1 em 3–22% , dependendo do corpus (§5.2.1); não há F1 único para transferência entre plataformas.  
**Limitações da ficha:** Demonstra confundidores e sobre-estimação por dados proxy; fundamenta validação externa

### 02. Ji et al. (2022) — MentalBERT

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2022.lrec-1.778/)  
**Categoria:** Pesquisa · 2022 · Inglês  
**Dataset / recurso:** MentalBERT (corpus Reddit de pré-treinamento); Dreaddit e outros benchmarks  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://huggingface.co/mental/mental-bert-base-uncased)  
**Evidência:** O checkpoint MentalBERT exige aceite de condições no Hugging Face. Dreaddit tem versões públicas; isso não comprova acesso ao corpus bruto completo de pré-treinamento.  
**Ressalva técnica:** O link de modelo MentalBERT no Hugging Face não é um link de corpus. Dreaddit é benchmark distinto; requer buscar dados nas fontes originais, sem presumir acesso ao corpus de pré-treino.  
**Volume e amostra descritos:** Pré-treino em textos de saúde mental; diversos benchmarks, inclusive Dreaddit  
**Rotulagem:** Rótulos herdados de cada conjunto de avaliação  
**Abordagem:** Pré-treino de domínio: MentalBERT e MentalRoBERTa  
**Resultado original resumido:** Em Dreaddit : MentalRoBERTa F1 81,76% , MentalBERT F1 80,04% (Tabela 3)  
**Limitações da ficha:** Resultado específico de benchmark; transferência ao PT-BR não avaliada

### 03. Poświata & Perełkiewicz (2022) — DepRoBERTa

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2022.ltedi-1.40/)  
**Categoria:** Pesquisa · 2022 · Inglês  
**Dataset / recurso:** DepSign-LT-EDI@ACL 2022; Reddit Depression Corpora  
**Plataforma de origem:** Reddit (r/depression; r/SuicideWatch e outros)  
**Acesso ao corpus:** **Público (documentado)**  
**Portal de dados, IDs ou solicitação:** [acessar](https://github.com/rafalposwiata/depression-detection-lt-edi-2022)  
**Fonte da verificação:** [consultar fonte](https://github.com/rafalposwiata/depression-detection-lt-edi-2022)  
**Evidência:** O repositório dos autores disponibiliza dataset de competição pré-processado e código; o corpus de adaptação de domínio também é documentado.  
**Ressalva técnica:** Os 396.968 textos de pré-treino não equivalem ao tamanho do benchmark rotulado.  
**Volume e amostra descritos:** Reddit — DepSign-LT-EDI@ACL2022. Partição original: treino 8.891, desenvolvimento 4.496, teste 3.245 posts; após remoção de duplicatas e redivisão: treino 6.006, desenvolvimento 1.000, teste 3.245. Pré-treino adicional do DepRoBERTa com 396.968 posts (Figura 1; §4.2).  
**Rotulagem:** Classes não depressivo, moderado e grave do desafio; rótulo do texto, não diagnóstico clínico  
**Abordagem:** Fine-tuning BERT/RoBERTa/XLNet, adaptação DepRoBERTa, ensemble  
**Resultado original resumido:** Macro-F1 0,583 para o ensemble vencedor da tarefa  
**Limitações da ficha:** Fornece baseline de transformers e modelo especializado; não comparar com classificação clínica individual

### 04. Kabir et al. (2023) — DEPTWEET

**Publicação:** [abrir artigo / tese](https://www.sciencedirect.com/science/article/pii/S0747563222003235)  
**Categoria:** Dataset/recurso · 2023 · Inglês  
**Dataset / recurso:** DEPTWEET  
**Plataforma de origem:** Twitter/X  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://github.com/mohsinulkabir14/DEPTWEET)  
**Fonte da verificação:** [consultar fonte](https://github.com/mohsinulkabir14/DEPTWEET)  
**Evidência:** Repositório dos autores distribui IDs de tweets e rótulos; o texto deve ser reidratado, sujeito à disponibilidade atual no Twitter/X. Como alternativa, os autores solicitam assinatura de acordo de uso (DUA) para fornecer os textos.  
**Ressalva técnica:** Não confundir IDs publicamente distribuídos com disponibilidade integral dos textos. Tweets apagados ou indisponíveis não podem ser recuperados por reidratação.  
**Volume e amostra descritos:** 40.191 tweets , quatro categorias  
**Rotulagem:** Anotação supervisionada por especialistas; tipologia inspirada em PHQ-9/DSM-5  
**Abordagem:** BERT, DistilBERT e baselines de classificação  
**Resultado original resumido:** DistilBERT, AUC-ROC por classe : não deprimido 0,789 ; leve 0,747 ; moderado 0,788 ; grave 0,866 (Tabela 5 do manuscrito).  
**Limitações da ficha:** Gravidade anotada do tweet não é avaliação clínica do autor

### 05. Yang et al. (2024) — MentaLLaMA; preprint 2023

**Publicação:** [abrir artigo / tese](https://arxiv.org/abs/2309.13567)  
**Categoria:** Pesquisa · 2024 · Inglês  
**Dataset / recurso:** IMHI — Interpretable Mental Health Instruction Dataset  
**Plataforma de origem:** Reddit; Twitter/X; SMS  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://github.com/SteveKGYang/MentalLLaMA)  
**Fonte da verificação:** [consultar fonte](https://github.com/SteveKGYang/MentalLLaMA)  
**Evidência:** Repositório oficial indica quais tarefas/partições foram liberadas; o benchmark agrega dez fontes e nem todas são disponibilizadas como dados brutos.  
**Ressalva técnica:** Inclui dez bases subjacentes; evitar contar cada base reutilizada como nova amostra.  
**Volume e amostra descritos:** 105 mil instâncias de instrução IMHI de dez fontes  
**Rotulagem:** Rótulos existentes e explicações geradas/avaliadas  
**Abordagem:** LLaMA 2, instruction tuning, geração de explicações  
**Resultado original resumido:** MentaLLaMA-chat-13B: F1 ponderado 75,79% em Dreaddit (Tabela 2); comparar com MentalRoBERTa 81,76% no mesmo benchmark.  
**Limitações da ficha:** Justificativas geradas não garantem fidelidade clínica

### 06. dos Santos, de Oliveira & Paraboni (2024) — SetembroBR; online 2023

**Publicação:** [abrir artigo / tese](https://link.springer.com/article/10.1007/s10579-022-09633-0)  
**Categoria:** Dataset/recurso · 2024 · PT-BR  
**Dataset / recurso:** SetembroBR  
**Plataforma de origem:** Twitter/X  
**Acesso ao corpus:** **Público (documentado)**  
**Portal de dados, IDs ou solicitação:** [acessar](https://drive.google.com/drive/folders/1MXFRs0u8iF1RNUWABTA0Oz8_Ix1skqZT)  
**Fonte da verificação:** [consultar fonte](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Evidência:** A página do grupo responsável informa disponibilização pública e aponta diretamente para a pasta de distribuição.  
**Ressalva técnica:** Download indicado pelo grupo; verificar licença e formato antes de reutilizar.  
**Volume e amostra descritos:** 46,8 milhões de tweets; 18.819 usuários ; 3.163 usuários com autorrelato (3.903 ocorrências parcialmente sobrepostas)  
**Rotulagem:** Autorrelato de diagnóstico/tratamento e marco temporal  
**Abordagem:** Corpus e comparações de modelos textuais e informações de rede  
**Resultado original resumido:** Artigo de apresentação do corpus : oferece baselines para tarefas específicas; não existe um resultado agregado único do dataset. As métricas dos modelos não são utilizadas sem identificação de tarefa e configuração.  
**Limitações da ficha:** Dados do mesmo corpus usado no estudo seguinte; não constitui nova coorte

### 07. Nagamatu & Paraboni (2024)

**Publicação:** [abrir artigo / tese](https://www.linguamatica.com/index.php/linguamatica/pt/article/view/440)  
**Categoria:** Pesquisa · 2024 · PT-BR  
**Dataset / recurso:** SetembroBR (reutilização)  
**Plataforma de origem:** Twitter/X  
**Acesso ao corpus:** **Público (documentado)**  
**Portal de dados, IDs ou solicitação:** [acessar](https://drive.google.com/drive/folders/1MXFRs0u8iF1RNUWABTA0Oz8_Ix1skqZT)  
**Fonte da verificação:** [consultar fonte](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Evidência:** Reutiliza corpus SetembroBR, com acesso documentado no site do grupo original.  
**Ressalva técnica:** Mesmo corpus da referência 6; não contabilizar como base independente.  
**Volume e amostra descritos:** Reutiliza SetembroBR ; subconjuntos por condição; não somar usuários como casos independentes  
**Rotulagem:** Autorrelato herdado do corpus de origem  
**Abordagem:** Modelos tradicionais e abordagem LLM com engenharia de prompts  
**Resultado original resumido:** GPT_relev: F1-latency 0,24 (depressão) e 0,23 (ansiedade); F1-macro 0,56/0,55 ; antecipação de 436/479 dias (Tabela 5).  
**Limitações da ficha:** Dependência do mesmo corpus e da proximidade ao momento declarado

### 08. Mendes & Caseli (2024)

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2024.lrec-main.754/)  
**Categoria:** Pesquisa · 2024 · PT-BR  
**Dataset / recurso:** Corpus de sinais de depressão em postagens universitárias (Mendes & Caseli)  
**Plataforma de origem:** Facebook  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://aclanthology.org/2024.lrec-main.754/)  
**Evidência:** O estudo usa 780 posts de universitários; não identifiquei um link oficial para download dos textos e anotações.  
**Ressalva técnica:** Textos potencialmente sensíveis: não pressupor redistribuição pública.  
**Volume e amostra descritos:** 780 posts , 21 sinais , 2.304 ocorrências positivas  
**Rotulagem:** Anotação humana dos sinais; não classifica diagnósticos  
**Abordagem:** Regressão logística, SVM, BERTimbau, MentalBERT, MentalRoBERTa  
**Resultado original resumido:** Average Precision : sono 0,900 (regressão logística); preocupação/ansiedade 0,794 (MentalBERT); tristeza 0,745 (BERTimbau); Tabela 5  
**Limitações da ficha:** Métrica por sinal; corpus pequeno; não avalia estresse como transtorno

### 09. Viduani et al. (2025) — pronomes/LIWC

**Publicação:** [abrir artigo / tese](https://doi.org/10.47626/1516-4446-2024-4058)  
**Categoria:** Pesquisa · 2025 · PT-BR  
**Dataset / recurso:** IDEA-RiSCo — transcrições de respostas por WhatsApp  
**Plataforma de origem:** WhatsApp (áudio transcrito)  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://rbppsiquiatria.org.br/details/3628/en-US/first-person-pronouns-as-linguistic-markers-of-depression-among-brazilian-youths)  
**Evidência:** Coleta com 52 jovens via chatbot WhatsApp; a fonte consultada não estabelece acesso aberto às transcrições individuais.  
**Ressalva técnica:** A publicação é aberta; a base de falas não foi localizada em repositório público.  
**Volume e amostra descritos:** 52 jovens ; 13 com depressão maior, 39 controles  
**Rotulagem:** Caracterização clínica + sintomas autorreferidos e avaliados  
**Abordagem:** LIWC; frequência de pronomes; testes estatísticos  
**Resultado original resumido:** Pronomes de 1ª pessoa singular: 9,15% vs. 8,02% , p=0,026 ; rho autorrelato 0,366  
**Limitações da ficha:** Estudo correlacional; não é experimento de fine-tuning de BERTimbau

### 10. Pérez et al. (2025) — DepreSym

**Publicação:** [abrir artigo / tese](https://doi.org/10.1007/s10579-025-09831-6)  
**Categoria:** Pesquisa · 2025 · Inglês  
**Dataset / recurso:** DepreSym / CLEF eRisk 2023 Task 1  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://erisk.irlab.org/depresym_dataset.html)  
**Fonte da verificação:** [consultar fonte](https://erisk.irlab.org/depresym_dataset.html)  
**Evidência:** Qrels de relevância podem ser consultados; a coleção textual completa exige acordo de utilização para pesquisa enviado aos organizadores.  
**Ressalva técnica:** 21.580 sentenças anotadas; acervo maior de 3.807.115 sentenças não é a mesma amostra.  
**Volume e amostra descritos:** 21.580 sentenças avaliadas quanto a 21 sintomas BDI-II  
**Rotulagem:** Julgamento de relevância por três avaliadores especialistas, incluindo psicólogo; não diagnóstico do autor  
**Abordagem:** LLMs como avaliadores, recuperação de informação lexical/densa e re-ranking  
**Resultado original resumido:** Recuperação de sintomas com ANCE : NDCG@10 = 0,746 e AP@1000 = 0,340 nas consultas baseadas em respostas do BDI-II (Tabela 6). Métricas de busca, não de diagnóstico.  
**Limitações da ficha:** Valioso para detecção de sinais interpretáveis; dependência do benchmark eRisk e anotações de relevância

### 11. Karpontinis & Soufleri (2025) — DP-CARE

**Publicação:** [abrir artigo / tese](https://doi.org/10.3389/fdgth.2025.1709671)  
**Categoria:** Pesquisa · 2025 · Inglês  
**Dataset / recurso:** Dreaddit  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Público (documentado)**  
**Portal de dados, IDs ou solicitação:** [acessar](https://github.com/agircc/agir-dreaddit-experiments)  
**Fonte da verificação:** [consultar fonte](https://pmc.ncbi.nlm.nih.gov/articles/PMC12739647/)  
**Evidência:** Benchmark com 3.553 segmentos rotulados e versões de download publicadas; distinguir os segmentos rotulados do corpus maior coletado.  
**Ressalva técnica:** O repositório referenciado é de experimentos públicos com Dreaddit; não substitui a atribuição ao dataset original.  
**Volume e amostra descritos:** Benchmark Dreaddit, 3.553 segmentos rotulados no corpus de referência  
**Rotulagem:** Rótulos humanos de estresse expresso; não avaliação diagnóstica  
**Abordagem:** Encoder MentalBERT congelado e classificador com DP-AdamW (privacidade diferencial)  
**Resultado original resumido:** F1 classe estresse 0,7808 , ε≈3; baseline sem DP F1 0,8058  
**Limitações da ficha:** Trade-off utilidade/privacidade; o artigo diverge entre resumo e tabela no recall, por isso recall não é reproduzido aqui

### 12. Chung et al. (2025) — BERT and BERTopic

**Publicação:** [abrir artigo / tese](https://doi.org/10.1186/s12889-025-23337-4)  
**Categoria:** Pesquisa · 2025 · Coreano  
**Dataset / recurso:** Mensagens abertas de aplicativo de saúde comunitária (Chung et al.)  
**Plataforma de origem:** Aplicativo móvel de mensagens (Coreia do Sul)  
**Acesso ao corpus:** **Controlado / mediante solicitação**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://pmc.ncbi.nlm.nih.gov/articles/PMC12150497/)  
**Evidência:** A declaração 'Data availability' informa explicitamente que os dados não estão em repositório público para proteger participantes; solicitações devem ser encaminhadas ao autor correspondente.  
**Ressalva técnica:** Dados originais de 1.332 textos e 230 idosos sob proteção de privacidade; artigo integral disponível não implica corpus aberto.  
**Volume e amostra descritos:** 1.332 mensagens , 230 participantes idosos  
**Rotulagem:** Triagem PHQ-9 ≥ 10 ; não equivale a entrevista clínica estruturada  
**Abordagem:** KcBERT e KLUE BERT; BERTopic para temas e evolução temporal  
**Resultado original resumido:** KcBERT F1 global reportado 0,87 ; F1 da classe de risco 0,83  
**Limitações da ficha:** Protocolo reporta split por mensagens; examinar possível dependência entre mensagens da mesma pessoa

### 13. Viduani et al. (2026) — estudo experimental GPT-4o

**Publicação:** [abrir artigo / tese](https://pubmed.ncbi.nlm.nih.gov/42134742/)  
**Categoria:** Pesquisa · 2026 · PT-BR  
**Dataset / recurso:** Transcrições de fala cotidiana de adolescentes (Viduani et al. 2026)  
**Plataforma de origem:** Falas em áudio / transcrições  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://pubmed.ncbi.nlm.nih.gov/42134742/)  
**Evidência:** O estudo relata participantes clínicos e controle; não foi identificada cópia pública verificável das transcrições.  
**Ressalva técnica:** Consultar declaração de disponibilidade do artigo integral.  
**Volume e amostra descritos:** 30 adolescentes (15 com depressão maior, 15 controles); coleta de 14 dias  
**Rotulagem:** Diagnóstico de psiquiatra infantojuvenil com procedimentos padrão-ouro  
**Abordagem:** GPT-4o por prompting; comparação com 12 modelos GPT  
**Resultado original resumido:** Acurácia 86,6% (IC95% 70,3–95,6%); sensibilidade 100% ; especificidade 73,3%  
**Limitações da ficha:** n=30 e grupos extremos; não emprega BERTimbau+LIWC ou laudos como texto de entrada

### 14. AlSaad, Alshakhs & Thomas (2026)

**Publicação:** [abrir artigo / tese](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1790533/full)  
**Categoria:** Pesquisa · 2026 · Inglês  
**Dataset / recurso:** Depression Subtype Twitter Dataset (Zenodo 14233292)  
**Plataforma de origem:** Twitter/X  
**Acesso ao corpus:** **Público (documentado)**  
**Portal de dados, IDs ou solicitação:** [acessar](https://doi.org/10.5281/zenodo.14233292)  
**Fonte da verificação:** [consultar fonte](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1790533/full)  
**Evidência:** Os autores declaram que a base de 14.983 tweets em seis categorias está disponível no Zenodo e publicam repositório de código.  
**Ressalva técnica:** Nome descritivo; não afirmar que o arquivo no Zenodo possui exatamente esse título sem abrir o registro.  
**Volume e amostra descritos:** 14.983 tweets  
**Rotulagem:** Curadoria/anotação textual; sem confirmação diagnóstica por pessoa  
**Abordagem:** LLMs few-shot; encoders fine-tuned (RoBERTa, DeBERTa e outros)  
**Resultado original resumido:** RoBERTa-large : macro-F1 0,957 , acurácia 0,954 no teste (Tabela 2)  
**Limitações da ficha:** Taxonomia textual, não avaliação psiquiátrica; um domínio

### 15. Kallstenius et al. (2026)

**Publicação:** [abrir artigo / tese](https://mental.jmir.org/2026/1/e98925/)  
**Categoria:** Pesquisa · 2026 · Inglês  
**Dataset / recurso:** Mental Health Sentiment Analysis (Kaggle), complementado por quatro subreddits  
**Plataforma de origem:** Reddit; Twitter/X  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://mental.jmir.org/2026/1/e98925/)  
**Evidência:** O artigo identifica Kaggle Mental Health Sentiment Analysis como corpus-base e Reddit como fonte adicional (r/ADHD, r/adhdwomen, r/autism, r/aspergers); acesso à compilação exata de 60.889 instâncias e saídas de modelos não foi reproduzido nesta auditoria.  
**Ressalva técnica:** A coleta ampliada adicionou r/ADHD, r/adhdwomen, r/autism e r/aspergers; separar dataset-base de dados agregados.  
**Volume e amostra descritos:** 60.889 textos ; 9 classes ; treino 42.622, validação 6.089, teste 12.178  
**Rotulagem:** Comunidade de origem ou autodeclaração  
**Abordagem:** TF-IDF + SVM RBF; GPT-4o-mini base/ajustado; 2 ensembles  
**Resultado original resumido:** Acurácia teste: 0,939 (soft), 0,938 (híbrido), 0,919 (SVM), 0,886 (GPT ajustado)  
**Limitações da ficha:** Split por post e back-translation pré-split; ausência de avaliação clínica externa

### 16. Viduani et al. (2026) — revisão de escopo

**Publicação:** [abrir artigo / tese](https://pubmed.ncbi.nlm.nih.gov/41825397/)  
**Categoria:** Revisão · 2026 · Diversos/NI  
**Dataset / recurso:** Não se aplica — revisão de escopo (180 estudos)  
**Plataforma de origem:** Literatura científica  
**Acesso ao corpus:** **Não se aplica (revisão)**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://pubmed.ncbi.nlm.nih.gov/41825397/)  
**Evidência:** Revisão secundária, sem corpus textual próprio que deva ser disponibilizado.  
**Ressalva técnica:** Os 180 estudos são referências incluídas, não registros textuais para treinamento.  
**Volume e amostra descritos:** 180 estudos incluídos de 27.967 registros  
**Rotulagem:** Auditoria da referência diagnóstica nos estudos incluídos  
**Abordagem:** Revisão de recursos lexicais, LIWC, PLN, transformers e LLMs  
**Resultado original resumido:** 20,5% com instrumento diagnóstico padrão-ouro; 64,2% das amostras em inglês  
**Limitações da ficha:** Síntese da evidência, não produz classificador nem F1 próprio

### 17. Alqahtani, Kayi & Diab (2026) — StressRoBERTa

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2026.healing-1.27/)  
**Categoria:** Pesquisa · 2026 · Inglês  
**Dataset / recurso:** Stress-SMHD (pré-treinamento); SMM4H 2022 Task 8; Dreaddit  
**Plataforma de origem:** Reddit e Twitter/X  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://healthlanguageprocessing.org/smm4h-2022/)  
**Fonte da verificação:** [consultar fonte](https://aclanthology.org/2026.healing-1.27/)  
**Evidência:** Dreaddit possui cópias públicas; o SMM4H é distribuído via portal da tarefa, com cadastro para participação. Não identifiquei download aberto do Stress-SMHD integral.  
**Ressalva técnica:** Distinguir 108 milhões de palavras de pré-treinamento das instâncias rotuladas de avaliação.  
**Volume e amostra descritos:** Pré-treino em 108 milhões de palavras do Stress-SMHD; avaliação SMM4H 2022 e Dreaddit  
**Rotulagem:** Histórico de diagnósticos autorreportados para pré-treino; rótulos de estresse dos benchmarks  
**Abordagem:** RoBERTa com pré-treino contínuo entre condições e fine-tuning na tarefa de estresse  
**Resultado original resumido:** F1 0,82 no SMM4H 2022 e 0,81 no Dreaddit  
**Limitações da ficha:** Estudo 2026 diretamente ligado às três condições; resultados por corpus, sem validade clínica externa

### 18. Herculano et al. (2024) — DepreRedditBR

**Publicação:** [abrir artigo / tese](https://doi.org/10.5753/dsw.2024.243994)  
**Categoria:** Dataset/recurso · 2024 · PT-BR  
**Dataset / recurso:** DepreRedditBR  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Restrito**  
**Portal de dados, IDs ou solicitação:** [acessar](https://zenodo.org/records/12744841)  
**Fonte da verificação:** [consultar fonte](https://zenodo.org/records/12744841)  
**Evidência:** Registro público no Zenodo, mas arquivos explicitamente marcados como restritos. É preciso acesso concedido pelo depositante.  
**Ressalva técnica:** Página pública ≠ arquivos públicos. Não prometer download dos textos.  
**Volume e amostra descritos:** DepreRedditBR: 509.675 postagens textuais em português brasileiro; recurso apresentado no DSW 2024.  
**Rotulagem:** Seleção de conteúdo relacionado à depressão; não equivale a confirmação de diagnóstico clínico do autor.  
**Abordagem:** Tarefa: Construção de dataset e apoio ao pré-treinamento e à classificação de intensidade de sinais depressivos. Modelos e representações: Corpus para pré-treinamento de modelo de linguagem de domínio; aplicação posterior em classificação textual.  
**Resultado original resumido:** Contribuição principal: conjunto de 509.675 instâncias. Não atribuir a esse artigo uma acurácia única de diagnóstico.  
**Limitações da ficha:** Conteúdo e amostragem de rede social não constituem padrão-ouro clínico.

### 19. Herculano et al. (2025) — Comparação DepreBERTBR

**Publicação:** [abrir artigo / tese](https://doi.org/10.5753/sbbd.2025.247283)  
**Categoria:** Pesquisa · 2025 · PT-BR  
**Dataset / recurso:** Base de avaliação multiclasse DepreBERTBR (nome formal não confirmado)  
**Plataforma de origem:** Português brasileiro; plataforma não confirmada para avaliação 2025  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.5753/sbbd.2025.247283)  
**Evidência:** A base e a partição exatas da comparação 2025 não foram verificadas; não tratar os 509.675 posts do DepreRedditBR como sua amostra de teste.  
**Ressalva técnica:** Também faltam valores exatos de F1 por configuração, exigindo tabelas do artigo completo.  
**Volume e amostra descritos:** Estudo comparativo de classificação em quatro classes (ausente, leve, moderada, grave) no português brasileiro. A base de avaliação e sua volumetria específica não foram confirmadas no resumo público do artigo de 2025. Não confundir com as 509.675 instâncias do corpus DepreRedditBR publicado em 2024 (recurso de pré-treinamento), cuja totalidade não foi comprovada como conjunto de avaliação de 2025.  
**Rotulagem:** Quatro classes textuais: ausente, leve, moderada e grave; não são diagnósticos individualizados.  
**Abordagem:** Tarefa: Classificação supervisionada multiclasse. Modelos e representações: DepreBERTBR especializado versus modelos de linguagem monolíngues e multilíngues de domínio geral.  
**Resultado original resumido:** Resumo original: DepreBERTBR obtém F1-score competitivo, comparável a modelos gerais monolíngues e multilíngues. Valores exatos de F1 por modelo/configuração não confirmados sem acesso às tabelas do artigo completo.  
**Limitações da ficha:** A comparação depende das mesmas classes, partições e critérios de rotulagem.
**Campos ainda pendentes:** Dataset, Resultados

### 20. Santos et al. (2025) — Mixture of Experts

**Publicação:** [abrir artigo / tese](https://doi.org/10.1109/ACCESS.2025.3583259)  
**Categoria:** Pesquisa · 2025 · Misto  
**Dataset / recurso:** SetembroBR; SMHD (Self-Reported Mental Health Diagnoses)  
**Plataforma de origem:** Twitter/X e Reddit  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.1109/ACCESS.2025.3583259)  
**Evidência:** SetembroBR foi divulgado publicamente; SMHD segue condições de acesso de seu provedor. Os tamanhos exatos de cada subconjunto na Tabela 2 ainda devem ser conferidos.  
**Ressalva técnica:** Usa até mil tweets recentes por usuário no domínio português; diferenças de unidade impedem soma direta.  
**Volume e amostra descritos:** Corpora identificados na publicação: SetembroBR (Twitter/X, português brasileiro) e SMHD (Reddit, inglês). Os modelos no Twitter/X consideram até as 1.000 mensagens mais recentes de cada usuário. A Tabela 2 apresenta quantidades por grupo/domínio, mas os números exatos de cada subconjunto não foram transcritos ou confirmados nesta auditoria.  
**Rotulagem:** Dados dos corpora e avaliação humana por especialistas; não generalizar para diagnóstico clínico confirmado.  
**Abordagem:** Tarefa: Predição de condições por dados textuais e não textuais; avaliação entre plataformas e idiomas. Modelos e representações: Modelos de linguagem em arquitetura mixture-of-experts (MoE), com atributos textuais e sociais.  
**Resultado original resumido:** Melhorias ante trabalhos anteriores segundo autores, com métricas computacionais e avaliação humana; não utilizar métrica agregada não apresentada.  
**Limitações da ficha:** Heterogeneidade de domínio, idioma e rotulagem afeta a transferência.
**Campos ainda pendentes:** Dataset

### 21. Mao & Han (2025) — TextGCN com emoção

**Publicação:** [abrir artigo / tese](https://doi.org/10.3389/fpsyg.2025.1612769)  
**Categoria:** Pesquisa · 2025 · Diversos/NI  
**Dataset / recurso:** Twitter Depression Dataset; Multilingual Twitter (EN); Identifying Depression (3 conjuntos)  
**Plataforma de origem:** Twitter/X; Reddit; fóruns web  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1612769/full)  
**Evidência:** O artigo lista cinco conjuntos de avaliação descritos como públicos, mas não foi confirmado nesta auditoria um endereço de download direto e único para todos eles.  
**Ressalva técnica:** Volumes: 3.200, 1.000, 1.323, 1.841 e 2.821 posts; conjuntos reutilizados, potencialmente sobrepostos.  
**Volume e amostra descritos:** Cinco conjuntos de avaliação de mídias sociais relatados no artigo; tamanhos variam conforme corpus.  
**Rotulagem:** Rótulos fornecidos por cada benchmark, sem equivalência automática a diagnóstico clínico.  
**Abordagem:** Tarefa: Classificação de textos com sinais de depressão. Modelos e representações: TextGCN enriquecido com representações emocionais derivadas de modelos de linguagem especializados.  
**Resultado original resumido:** Ganhos relatados frente a configurações de referência; não consolidar resultados de datasets distintos em um F1 único.  
**Limitações da ficha:** Dependência de corpus, estratégias de anotação e linguagem.

### 22. Shah et al. (2025) — Fine-tuning de LLMs

**Publicação:** [abrir artigo / tese](https://doi.org/10.1016/j.osnem.2025.100311)  
**Categoria:** Pesquisa · 2025 · Diversos/NI  
**Dataset / recurso:** Shen et al. (IJCAI 2017) — D1/D2/D3 (Twitter)  
**Plataforma de origem:** Twitter/X  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://arxiv.org/abs/2409.14794)  
**Evidência:** O pré-print descreve 20 mil instâncias para ajuste e 20 mil para teste; link e condições de redistribuição da base original não foram confirmados.  
**Ressalva técnica:** Pré-print 2024 vs artigo editorial 2025: garantir concordância do protocolo antes de reutilizar resultado.  
**Volume e amostra descritos:** Twitter/X; reutiliza o corpus de Shen et al. (IJCAI 2017), organizado em D1 (usuários com autorrelato de depressão), D2 (controles operacionais) e D3 (candidatos com rótulos mais ruidosos). O pré-print dos autores (arXiv:2409.14794, §3.4.1) informa 20.000 instâncias rotuladas para ajuste do GPT-3.5 Turbo e outras 20.000 instâncias para teste, sem sobreposição declarada. Não são o total do corpus original; diferenças na versão editorial de 2025 não foram verificadas.  
**Rotulagem:** Rótulos binários de conteúdo depressivo ou não depressivo da base utilizada.  
**Abordagem:** Tarefa: Classificação binária de postagens. Modelos e representações: GPT-3.5 Turbo 1106 e LLaMA2-7B ajustados; avaliação zero-shot/few-shot.  
**Resultado original resumido:** No protocolo few-shot relatado: 96,4% de acurácia para GPT-3.5 ajustado e 87,1% para LLaMA2-7B; não comparável diretamente a outros datasets.  
**Limitações da ficha:** Desempenho no corpus avaliado não valida uso diagnóstico.

### 23. Hussain et al. (2025) — Gravidade em quatro níveis

**Publicação:** [abrir artigo / tese](https://doi.org/10.3390/ai6070157)  
**Categoria:** Pesquisa · 2025 · Inglês  
**Dataset / recurso:** Corpus de gravidade textual em quatro níveis de Hussain et al.  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://www.mdpi.com/2673-2688/6/7/157)  
**Evidência:** Foram descritas 9.841 postagens de 6.200 usuários. Não foi identificado um repositório validado com os textos e rótulos usados integralmente.  
**Ressalva técnica:** Publicação de resultados não prova download público de 9.841 instâncias.  
**Volume e amostra descritos:** 9.841 postagens em inglês de 6.200 usuários únicos do Reddit, coletadas de janeiro de 2019 a dezembro de 2023, após filtragem; quatro níveis anotados de gravidade textual (mínimo, leve, moderado, grave). Os usuários contribuem em média com 1,59 postagem. Trata-se de posts de comunidades de saúde mental, não de amostra representativa da população geral.  
**Rotulagem:** Quatro classes definidas no dataset; não inferir avaliação clínica individual.  
**Abordagem:** Tarefa: Classificação multiclasse de gravidade textual. Modelos e representações: Dez classificadores clássicos com GloVe/Word2Vec e dez transformers, incluindo MentalBERT.  
**Resultado original resumido:** F1 relatado: MentalBERT 97,31%; XGBoost + GloVe 94,01%, dentro do protocolo do estudo.  
**Limitações da ficha:** Comparações externas exigem mesma tarefa, classes e divisão dos dados.

### 24. Tahir et al. (2025) — Revisão ML/DL

**Publicação:** [abrir artigo / tese](https://doi.org/10.1109/ACCESS.2025.3530862)  
**Categoria:** Revisão · 2025 · Diversos/NI  
**Dataset / recurso:** Não se aplica — revisão metodológica ML/DL  
**Plataforma de origem:** Literatura científica  
**Acesso ao corpus:** **Não se aplica (revisão)**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.1109/ACCESS.2025.3530862)  
**Evidência:** Reúne datasets de terceiros; não informa um único corpus experimental novo.  
**Ressalva técnica:** A avaliação deve comparar cobertura da revisão, não métricas de treino de um corpus inexistente.  
**Volume e amostra descritos:** Múltiplos corpora analisados na literatura; não se trata de um corpus de teste único.  
**Rotulagem:** Analisa diferenças de anotação e rotulagem entre estudos; não gera rótulos próprios.  
**Abordagem:** Tarefa: Revisão de técnicas e datasets para detecção de depressão. Modelos e representações: Mapeamento de ML e DL, representações e arquiteturas; discussão de desafios.  
**Resultado original resumido:** Revisão sem acurácia ou F1 experimental próprio.  
**Limitações da ficha:** Evidência secundária; exclui algumas famílias de métodos e se concentra em redes sociais.

### 25. Jin & Zhang (2026) — Multitarefa guiada por DSM-5

**Publicação:** [abrir artigo / tese](https://doi.org/10.3390/electronics15030598)  
**Categoria:** Pesquisa · 2026 · Diversos/NI  
**Dataset / recurso:** WU3D — Weibo User Depression Detection Dataset  
**Plataforma de origem:** Weibo  
**Acesso ao corpus:** **Controlado / mediante solicitação**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://www.mdpi.com/2079-9292/15/3/598)  
**Evidência:** Apesar de seção metodológica chamar o conjunto de público, a declaração de disponibilidade informa que dados brutos não são públicos, com possível contato aos autores e aprovação ética.  
**Ressalva técnica:** 32.570 usuários, 2.191.910 posts; declaração de acesso prevalece sobre rótulo genérico 'publicamente disponível'.  
**Volume e amostra descritos:** WU3D: 32.570 usuários e cerca de 2,19 milhões de postagens; 1.390 usuários no grupo de depressão e 31.180 controles, conforme artigo.  
**Rotulagem:** O artigo descreve entrevistas clínicas e PHQ-9 para o grupo de depressão, com anotação especializada.  
**Abordagem:** Tarefa: Detecção binária, reconhecimento multirrótulo de sintomas e classificação da gravidade. Modelos e representações: BERT chinês + Bi-LSTM + atenção hierárquica + características temporais e tópicos LDA; treinamento multitarefa guiado por DSM-5.  
**Resultado original resumido:** F1 principal de 91,8% no WU3D, contra 85,6% do BERT-base, conforme autores.  
**Limitações da ficha:** Uma população e plataforma específicas; não supõe validade clínica externa ou em português.

### 26. Tang et al. (2026) — AI in the Wild (metanálise)

**Publicação:** [abrir artigo / tese](https://doi.org/10.1609/aaai.v40i46.41283)  
**Categoria:** Revisão · 2026 · Diversos/NI  
**Dataset / recurso:** Não se aplica — metanálise AI in the Wild  
**Plataforma de origem:** Literatura científica  
**Acesso ao corpus:** **Não se aplica (revisão)**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.1609/aaai.v40i46.41283)  
**Evidência:** Dados agregados extraídos de 67 estudos; não constitui nova coleção de postagens.  
**Ressalva técnica:** Metanálise exige método de síntese próprio; não registrar como dataset primário.  
**Volume e amostra descritos:** Síntese de 67 estudos empíricos, não uma nova base de postagens.  
**Rotulagem:** Analisa procedência dos rótulos como moderador metodológico.  
**Abordagem:** Tarefa: Metanálise de desempenho, fatores de heterogeneidade e avaliação alinhada a critérios psicológicos. Modelos e representações: Comparação de técnicas tradicionais, transformers e modelos multimodais.  
**Resultado original resumido:** Desempenho agregado descrito pelos autores como r≈0,80; não é acurácia, nem F1 de classificador individual.  
**Limitações da ficha:** Heterogeneidade de estudos e diferença entre tarefa computacional e validade clínica.

### 27. Chim et al. (2024) — CLPsych Shared Task

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2024.clpsych-1.15/)  
**Categoria:** Pesquisa · 2024 · Inglês  
**Dataset / recurso:** UMD Reddit Suicidality Dataset — CLPsych 2024 (subconjunto de 125 usuários)  
**Plataforma de origem:** Reddit (r/SuicideWatch)  
**Acesso ao corpus:** **Não confirmado**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://aclanthology.org/2024.clpsych-1.15/)  
**Evidência:** Tarefa com 125 usuários anotados; o acesso aos textos específicos de competição não foi confirmado como público nesta auditoria.  
**Ressalva técnica:** Não interpretar rótulo de risco no desafio como diagnóstico clínico.  
**Volume e amostra descritos:** Amostra anotada de 125 usuários; postagens de Reddit e níveis de risco predefinidos.  
**Rotulagem:** Risco predefinido em três níveis (baixo, moderado e alto); evidências textuais anotadas para avaliação das subtarefas.  
**Abordagem:** Tarefa: Extração de trechos de evidência e sumarização de evidências de risco. Modelos e representações: Benchmark de sistemas com LLMs abertos; comparação por BERTScore e inferência textual.  
**Resultado original resumido:** O artigo introduz protocolo e métricas de avaliação das duas subtarefas; não reportar um único F1 de diagnóstico.  
**Limitações da ficha:** Níveis de risco atribuídos no benchmark não equivalem a decisão clínica automatizada.

### 28. Yu et al. (2026) — MIND e detecção precoce

**Publicação:** [abrir artigo / tese](https://doi.org/10.2196/87138)  
**Categoria:** Pesquisa · 2026 · Inglês  
**Dataset / recurso:** CLEF eRisk 2017 — Early Risk Detection (depressão)  
**Plataforma de origem:** Reddit  
**Acesso ao corpus:** **Controlado / mediante solicitação**  
**Portal de dados, IDs ou solicitação:** [acessar](https://erisk.irlab.org/2017/task.html)  
**Fonte da verificação:** [consultar fonte](https://erisk.irlab.org/2017/task.html)  
**Evidência:** Datasets da competição foram disponibilizados a participantes registrados. Um artigo posterior tornar código público não significa abrir os textos integrais.  
**Ressalva técnica:** Sequências por usuário: unidade de análise e marco temporal devem ser preservados.  
**Volume e amostra descritos:** Benchmark eRisk 2017; sequências temporais de postagens por usuário.  
**Rotulagem:** Grupos deprimido/controle do eRisk baseados em registros e autorrelatos disponíveis no benchmark.  
**Abordagem:** Tarefa: Predição sequencial no nível de usuário e identificação precoce de risco. Modelos e representações: MIND: padrões temporais de postagem e filtragem/análise por LLM.  
**Resultado original resumido:** A análise de ablação relata F1-ERD 0,671; ERDE5 0,080 e ERDE50 0,069 para MIND.  
**Limitações da ficha:** Horários de postagem são proxies de atividade, não medidas diretas de sono ou diagnóstico.

### 29. Mandal et al. (2025) — QuestMF

**Publicação:** [abrir artigo / tese](https://aclanthology.org/2025.clpsych-1.4/)  
**Categoria:** Pesquisa · 2025 · Inglês  
**Dataset / recurso:** E-DAIC — Extended Distress Analysis Interview Corpus (AVEC 2019)  
**Plataforma de origem:** Entrevistas clínico-computacionais (transcrição, áudio e vídeo)  
**Acesso ao corpus:** **Controlado / mediante solicitação**  
**Portal de dados, IDs ou solicitação:** [acessar](https://dcapswoz.ict.usc.edu/)  
**Fonte da verificação:** [consultar fonte](https://dcapswoz.ict.usc.edu/)  
**Evidência:** USC ICT distribui E-DAIC mediante solicitação assinada de pesquisadores acadêmicos ou sem fins lucrativos.  
**Ressalva técnica:** 275 sessões no protocolo descrito; dados não são corpus de Reddit e não são download aberto.  
**Volume e amostra descritos:** E-DAIC (AVEC 2019): 275 sessões multimodais de entrevistas em inglês, sendo 163 para treino, 56 para validação e 56 para teste; uma sessão da validação e uma de teste excluídas por arquivos incompletos de vídeo. Textos transcritos, áudio, atributos visuais e escores PHQ-8; não é corpus de postagens de redes sociais.  
**Rotulagem:** Escores de avaliação de depressão por questionários/entrevistas no benchmark; a predição é de gravidade, não diagnóstico clínico novo.  
**Abordagem:** Tarefa: Predição ordinal de gravidade e de respostas por pergunta. Modelos e representações: QuestMF (fusão multimodal por questão) e função de perda ImbOLL para desequilíbrio e ordinalidade.  
**Resultado original resumido:** QuestMF com ImbOLL no E-DAIC, Tabela 1 (melhor execução): CCC = 0,685, RMSE = 5,32, MAE = 4,11. Tabela 2 (média ± desvio-padrão, três sementes): CCC = 0,662 ± 0,022, RMSE = 5,25 ± 0,08, MAE = 3,95 ± 0,13. CCC mede concordância, não acurácia ou F1.  
**Limitações da ficha:** Avaliação circunscrita ao benchmark de entrevista, distinta de redes sociais.

### 30. Wesley Ramos dos Santos (2025) — Predição de transtornos de saúde mental

**Publicação:** [abrir artigo / tese](https://doi.org/10.11606/T.100.2025.tde-12062025-101544)  
**Categoria:** Tese/TCC · 2025 · Misto  
**Dataset / recurso:** SetembroBR; corpus Reddit usado na tese  
**Plataforma de origem:** Twitter/X e Reddit  
**Acesso ao corpus:** **Parcial / componentes diferentes**  
**Portal de dados, IDs ou solicitação:** [acessar](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.11606/T.100.2025.tde-12062025-101544)  
**Evidência:** SetembroBR possui acesso público indicado pelo grupo. O corpus do domínio Reddit e condições de reprodução exatas na tese não foram confirmados aqui.  
**Ressalva técnica:** Evitar confundir métricas de baseline com resultado agregado da tese.  
**Volume e amostra descritos:** SetembroBR e corpus de Reddit para transferência entre domínios.  
**Rotulagem:** Autorrelatos de diagnóstico/tratamento para seleção dos indivíduos; parcela do corpus em português avaliada por especialistas humanos.  
**Abordagem:** Tarefa: Predição no nível de usuário a partir de timelines; transferência entre domínio e idioma. Modelos e representações: Filtros de relevância, atributos textuais/não textuais e comitês de classificadores.  
**Resultado original resumido:** Exemplo experimental documentado na tese, Tabela 4, p. 87: classificador LSTM.BERT treinado em dados desbalanceados do SetembroBR obteve macro-F1 = 0,63 em depressão e = 0,61 em ansiedade; versões balanceadas obtiveram 0,43 e 0,31, respectivamente. São resultados desse experimento e não um único desempenho consolidado da tese ou do método final.  
**Limitações da ficha:** Tese de doutorado, não artigo de periódico; possível sobreposição temática e de recursos com Santos et al. (2025).

### 31. Figueiredo (2026) — Dados sintéticos em saúde mental

**Publicação:** [abrir artigo / tese](https://repositorio.ufscar.br/items/e2916bfc-974c-4b67-b96e-f0d67065827c)  
**Categoria:** Tese/TCC · 2026 · PT-BR  
**Dataset / recurso:** Amive (corpus original); versões sintéticas em desenvolvimento  
**Plataforma de origem:** Postagens anônimas em rede social; plataforma não identificada  
**Acesso ao corpus:** **Restrito**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://repositorio.ufscar.br/items/e2916bfc-974c-4b67-b96e-f0d67065827c)  
**Evidência:** O projeto acadêmico explicita que textos originais não podem ser distribuídos publicamente por sensibilidade. O código de paráfrase está público; divulgação efetiva do CSV sintético ainda não confirmada.  
**Ressalva técnica:** O repositório público contém o pipeline de geração; não apresenta confirmação de livre distribuição dos textos originais do Amive nem do CSV final sintético.  
**Volume e amostra descritos:** Corpus Amive (UFSCar): postagens anônimas em português brasileiro anotadas por sintomas de depressão, não disponibilizadas integralmente por motivos de privacidade. O trabalho estuda geração de paráfrases sintéticas e avalia o sintoma tristeza/humor deprimido. A volumetria da base original e das partições usadas nos experimentos não foi confirmada no resumo institucional nem no README público do código.  
**Rotulagem:** Anotações de sintomas provenientes do corpus Amive; foco de avaliação no sintoma tristeza/humor deprimido.  
**Abordagem:** Tarefa: Paráfrase sintética, similaridade textual e avaliação extrínseca de classificação binária. Modelos e representações: Retrotradução, PEGASUS, BERTScore com BERTimbau; baselines LR, SVM, Naive Bayes e Random Forest.  
**Resultado original resumido:** Utilidade classificatória em geral preservada, mas perda de precisão em transferência sintético→real e alterações de nuances discursivas.  
**Limitações da ficha:** Trabalho de conclusão de curso, não artigo revisado por pares; apenas parte dos sintomas foi estudada.
**Campos ainda pendentes:** Dataset

### 32. Bhatt et al. (2026) — Revisão entre plataformas

**Publicação:** [abrir artigo / tese](https://doi.org/10.1007/s44192-026-00368-w)  
**Categoria:** Revisão · 2026 · Diversos/NI  
**Dataset / recurso:** Não se aplica — revisão entre plataformas  
**Plataforma de origem:** Literatura científica  
**Acesso ao corpus:** **Não se aplica (revisão)**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.1007/s44192-026-00368-w)  
**Evidência:** Revisão de estudos, sem base original independente para baixar.  
**Ressalva técnica:** Usar como evidência secundária e fonte para localizar bases subjacentes.  
**Volume e amostra descritos:** Revisão de datasets e tarefas de mídias sociais; sem novo conjunto de avaliação próprio.  
**Rotulagem:** Discute heterogeneidade da anotação e das populações entre estudos.  
**Abordagem:** Tarefa: Revisão narrativa de métodos, datasets, transferência e ética. Modelos e representações: Panorama de BERT, RoBERTa e outros métodos de PLN para análise de saúde mental.  
**Resultado original resumido:** Síntese secundária, sem acurácia ou F1 experimental único.  
**Limitações da ficha:** A heterogeneidade dos estudos impede comparações quantitativas diretas.

### 33. Jin et al. (2025) — Scoping Review de LLMs

**Publicação:** [abrir artigo / tese](https://doi.org/10.2196/69284)  
**Categoria:** Pesquisa · 2025 · Diversos/NI  
**Dataset / recurso:** Não se aplica — scoping review sobre LLMs  
**Plataforma de origem:** Literatura científica  
**Acesso ao corpus:** **Não se aplica (revisão)**  
**Portal de dados, IDs ou solicitação:** Não identificado ou não confirmado  
**Fonte da verificação:** [consultar fonte](https://doi.org/10.2196/69284)  
**Evidência:** Inclui 95 trabalhos, não um dataset de postagens rotuladas para experimentar.  
**Ressalva técnica:** 95 artigos ≠ 95 instâncias ou 95 corpora independentes.  
**Volume e amostra descritos:** Revisão de escopo: 95 artigos incluídos de 4.859 registros examinados em sete bases.  
**Rotulagem:** Consolida tipos de ground truth empregados nos estudos; não produz rótulos originais.  
**Abordagem:** Tarefa: Mapeamento de triagem, detecção, tratamento e aconselhamento apoiado por LLMs. Modelos e representações: Famílias de LLMs e estratégias de uso; estudos de detecção e intervenções.  
**Resultado original resumido:** 67/95 artigos abordam triagem/detecção; 33/95 tratam especificamente de detecção/classificação de depressão, segundo a revisão.  
**Limitações da ficha:** Revisão secundária com grande heterogeneidade de tarefas e desenhos; não implica eficácia clínica comprovada.

## Pendências prioritárias

1. **Dados de avaliação efetivamente não documentados:** conferir no artigo original os volumes, partições e métricas de Herculano et al. (2025), a Tabela 2 de Santos et al. (2025) e as tabelas do TCC de Figueiredo (2026).
2. **Status de acesso não confirmado:** preservar essa marcação nas fichas que não apresentam portal de corpus ou declaração inequívoca sobre sua distribuição; não inventar endereço.
3. **Comparabilidade:** só comparar numericamente quando tarefa, dataset, classe, partição, unidade de análise e métrica forem compatíveis.
4. **Reutilização:** o mesmo corpus (SetembroBR, Dreaddit, SMHD etc.) pode aparecer em múltiplas publicações, sem constituir novas amostras independentes.
5. **Privacidade e ética:** disponibilidade técnica não significa direito irrestrito de redistribuição, sobretudo para transcrições clínicas, tweets e relatos sobre sofrimento psíquico.

## Links para o projeto

- [Atlas interativo](https://fernandomarquesaluno-svg.github.io/depression_poject/tabelas/comparativo/)
- [Base estruturada JSON](https://fernandomarquesaluno-svg.github.io/depression_poject/tabelas/comparativo/estudos.json)
- [Tabela técnica de origem](tabela_comparativa_tecnica.md)

*Todos os dados sem confirmação ficaram explicitamente rotulados. Esta auditoria é uma trilha documental e não certifica acesso permanente aos recursos externos.*
