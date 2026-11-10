# Auditoria de datasets, procedência e acessibilidade — 33 estudos (2020–2026)

**Auditoria documental atualizada:** 10 de novembro de 2026  
**Método:** cruzamento de publicações e repositórios dos autores, páginas institucionais, declarações formais de disponibilidade e descrição de conjuntos de dados. Sem execução independente dos experimentos e sem acesso privilegiado a corpora restritos.

## Visão geral da disponibilidade

| Regime de acesso | Estudos | O que significa |
|---|---:|---|
| Público documentado | 5 | Consultar ficha |
| Controlado | 7 | mediante solicitação/acordo |
| Restrito | 3 | corpus não distribuído livremente |
| Acesso parcial | 9 | modalidades diferentes |
| Não confirmado | 4 | sem prova suficiente de acesso |
| Não se aplica | 5 | revisão sem base própria |
| **Total** | **33** | Cada registro representa uma **publicação**, não um corpus único |

**18 registros** têm link de portal do conjunto de dados, canal de solicitação ou página oficial de obtenção, mas isso **não garante download imediato** nem acesso à versão experimental completa. Distinguir ainda os links do artigo, código, modelo, corpus-base e partições de avaliação.

## Revisões desta terceira rodada

| Estudo | Antes | Depois | Evidência principal |
|---|---|---|---|
| **08 — Mendes & Caseli (2024)** | Acesso não confirmado | **Restrito** | É a família **Amive**, 780 postagens Facebook e rótulos em 21 sinais. O código de síntese confirma que os textos originais não podem ser redistribuídos. |
| **22 — Shah et al. (2025)** | Não confirmado | **Parcial** | Autores originais do corpus MDDL publicam página e link externo para D1/D2/D3; as partições de Shah não foram conferidas. |
| **23 — Hussain et al. (2025)** | Não confirmado | **Controlado** | Declaração de dados da revista: dados disponibilizados mediante solicitação. |
| **27 — Chim et al. / CLPsych 2024** | Não confirmado | **Controlado** | Universidade de Maryland exige solicitação com apreciação ética (IRB ou equivalente); acordo do desafio era temporário. |

### Relações documentadas entre corpora e publicações

- **Amive — 08 ↔ 31.** O trabalho de Mendes & Caseli (2024) estuda 780 postagens originais de páginas de segredos universitários no Facebook, com 21 sinais anotados. Figueiredo (2026) emprega o **mesmo projeto de corpus original** como entrada para geração sintética, mas a contagem efetiva de sentenças usadas no experimento de 2026 ainda não foi conferida.
- **IDEA/IDEABot — 09 ↔ 13.** Os dois estudos usam coleta de mensagens de áudio via WhatsApp/IDEABot e transcrição em português. Os tamanhos de amostra são **52** e **30 adolescentes**, respectivamente. **Não existe confirmação de sobreposição de participantes**.
- **SetembroBR — 06, 07, 20 e 30.** Reutilizações da mesma família de corpus, com protocolos e tarefas distintas. A presença em quatro publicações não equivale a quatro datasets inéditos.
- **MDDL / Shen et al. (2017) — 22.** D1/D2/D3 têm distribuição anunciada no repositório original. As **20 mil instâncias de treino e 20 mil de teste** descritas pelo pré-print de Shah são um recorte experimental, não a volumetria bruta do MDDL.
- **UMD Reddit Suicidality — 27.** O conjunto original é reutilizado na CLPsych 2024 com amostra anotada de 125 usuários; os dados requerem aprovação ética para pesquisa posterior.
- **Hussain 2025 — 23.** Nove mil oitocentas e quarenta e uma postagens vêm de 6.200 usuários, mas os arquivos **não são disponibilizados para download imediato**: é necessário solicitar acesso.

## Fichas técnicas e evidências

### 01. Harrigian, Aguirre & Dredze (2020) — Generalization

**Identificação da fonte:** CLPsych 2015; Multi-Task Learning; RSDD; SMHD; Topic-Restricted Text  
**Origem/plataforma:** Twitter/X e Reddit  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/kharrigian/emnlp-2020-mental-health-generalization)  
**Publicação:** [abrir publicação](https://aclanthology.org/2020.findings-emnlp.337/)  
**Fonte da verificação:** [abrir evidência](https://github.com/kharrigian/emnlp-2020-mental-health-generalization)  
**Justificativa do status:** A maior parte das bases exige acordos de uso ou aprovação ética; o repositório descreve uma exceção de acesso para Topic-Restricted Text.  
**Ressalva de uso e reprodutibilidade:** Cinco corpora comparados; não existe um único dataset independente criado pelo artigo.  
**Descrição amostral original:** Cinco corpora de usuários: CLPsych (477 depressão / 477 controle), Multi-Task Learning (1.400 / 1.400), RSDD (9.210 / 107.274), SMHD (14.139 / 127.251) e Topic-Restricted Text (6.853 / 7.016). Valores por grupo reportados na Tabela 1 do artigo.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Supervisão distante por autorrelato ou proxy de plataforma  
**Abordagem de PLN/IA:** Classificadores de depressão; testes de transferência entre plataformas  
**Métricas relatadas:** Na análise de artefatos temporais, a separação desajustada elevou artificialmente o F1 em 3–22% , dependendo do corpus (§5.2.1); não há F1 único para transferência entre plataformas.  
**Limitações:** Demonstra confundidores e sobre-estimação por dados proxy; fundamenta validação externa  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 02. Ji et al. (2022) — MentalBERT

**Identificação da fonte:** MentalBERT (corpus Reddit de pré-treinamento); Dreaddit e outros benchmarks  
**Origem/plataforma:** Reddit  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://aclanthology.org/2022.lrec-1.778/)  
**Fonte da verificação:** [abrir evidência](https://huggingface.co/mental/mental-bert-base-uncased)  
**Justificativa do status:** O checkpoint MentalBERT exige aceite de condições no Hugging Face. Dreaddit tem versões públicas; isso não comprova acesso ao corpus bruto completo de pré-treinamento.  
**Ressalva de uso e reprodutibilidade:** O link de modelo MentalBERT no Hugging Face não é um link de corpus. Dreaddit é benchmark distinto; requer buscar dados nas fontes originais, sem presumir acesso ao corpus de pré-treino.  
**Descrição amostral original:** Pré-treino em textos de saúde mental; diversos benchmarks, inclusive Dreaddit  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Rótulos herdados de cada conjunto de avaliação  
**Abordagem de PLN/IA:** Pré-treino de domínio: MentalBERT e MentalRoBERTa  
**Métricas relatadas:** Em Dreaddit : MentalRoBERTa F1 81,76% , MentalBERT F1 80,04% (Tabela 3)  
**Limitações:** Resultado específico de benchmark; transferência ao PT-BR não avaliada  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 03. Poświata & Perełkiewicz (2022) — DepRoBERTa

**Identificação da fonte:** DepSign-LT-EDI@ACL 2022; Reddit Depression Corpora  
**Origem/plataforma:** Reddit (r/depression; r/SuicideWatch e outros)  
**Regime de acesso:** Público documentado  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/rafalposwiata/depression-detection-lt-edi-2022)  
**Publicação:** [abrir publicação](https://aclanthology.org/2022.ltedi-1.40/)  
**Fonte da verificação:** [abrir evidência](https://github.com/rafalposwiata/depression-detection-lt-edi-2022)  
**Justificativa do status:** O repositório dos autores disponibiliza dataset de competição pré-processado e código; o corpus de adaptação de domínio também é documentado.  
**Ressalva de uso e reprodutibilidade:** Os 396.968 textos de pré-treino não equivalem ao tamanho do benchmark rotulado.  
**Descrição amostral original:** Reddit — DepSign-LT-EDI@ACL2022. Partição original: treino 8.891, desenvolvimento 4.496, teste 3.245 posts; após remoção de duplicatas e redivisão: treino 6.006, desenvolvimento 1.000, teste 3.245. Pré-treino adicional do DepRoBERTa com 396.968 posts (Figura 1; §4.2).  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Classes não depressivo, moderado e grave do desafio; rótulo do texto, não diagnóstico clínico  
**Abordagem de PLN/IA:** Fine-tuning BERT/RoBERTa/XLNet, adaptação DepRoBERTa, ensemble  
**Métricas relatadas:** Macro-F1 0,583 para o ensemble vencedor da tarefa  
**Limitações:** Fornece baseline de transformers e modelo especializado; não comparar com classificação clínica individual  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 04. Kabir et al. (2023) — DEPTWEET

**Identificação da fonte:** DEPTWEET  
**Origem/plataforma:** Twitter/X  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/mohsinulkabir14/DEPTWEET)  
**Publicação:** [abrir publicação](https://www.sciencedirect.com/science/article/pii/S0747563222003235)  
**Fonte da verificação:** [abrir evidência](https://github.com/mohsinulkabir14/DEPTWEET)  
**Justificativa do status:** Repositório dos autores distribui IDs de tweets e rótulos; o texto deve ser reidratado, sujeito à disponibilidade atual no Twitter/X. Como alternativa, os autores solicitam assinatura de acordo de uso (DUA) para fornecer os textos.  
**Ressalva de uso e reprodutibilidade:** Não confundir IDs publicamente distribuídos com disponibilidade integral dos textos. Tweets apagados ou indisponíveis não podem ser recuperados por reidratação.  
**Descrição amostral original:** 40.191 tweets , quatro categorias  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Anotação supervisionada por especialistas; tipologia inspirada em PHQ-9/DSM-5  
**Abordagem de PLN/IA:** BERT, DistilBERT e baselines de classificação  
**Métricas relatadas:** DistilBERT, AUC-ROC por classe : não deprimido 0,789 ; leve 0,747 ; moderado 0,788 ; grave 0,866 (Tabela 5 do manuscrito).  
**Limitações:** Gravidade anotada do tweet não é avaliação clínica do autor  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 05. Yang et al. (2024) — MentaLLaMA; preprint 2023

**Identificação da fonte:** IMHI — Interpretable Mental Health Instruction Dataset  
**Origem/plataforma:** Reddit; Twitter/X; SMS  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/SteveKGYang/MentalLLaMA)  
**Publicação:** [abrir publicação](https://arxiv.org/abs/2309.13567)  
**Fonte da verificação:** [abrir evidência](https://github.com/SteveKGYang/MentalLLaMA)  
**Justificativa do status:** Repositório oficial indica quais tarefas/partições foram liberadas; o benchmark agrega dez fontes e nem todas são disponibilizadas como dados brutos.  
**Ressalva de uso e reprodutibilidade:** Inclui dez bases subjacentes; evitar contar cada base reutilizada como nova amostra.  
**Descrição amostral original:** 105 mil instâncias de instrução IMHI de dez fontes  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Rótulos existentes e explicações geradas/avaliadas  
**Abordagem de PLN/IA:** LLaMA 2, instruction tuning, geração de explicações  
**Métricas relatadas:** MentaLLaMA-chat-13B: F1 ponderado 75,79% em Dreaddit (Tabela 2); comparar com MentalRoBERTa 81,76% no mesmo benchmark.  
**Limitações:** Justificativas geradas não garantem fidelidade clínica  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 06. dos Santos, de Oliveira & Paraboni (2024) — SetembroBR; online 2023

**Identificação da fonte:** SetembroBR  
**Origem/plataforma:** Twitter/X  
**Regime de acesso:** Público documentado  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://drive.google.com/drive/folders/1MXFRs0u8iF1RNUWABTA0Oz8_Ix1skqZT)  
**Publicação:** [abrir publicação](https://link.springer.com/article/10.1007/s10579-022-09633-0)  
**Fonte da verificação:** [abrir evidência](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Justificativa do status:** A página do grupo responsável informa disponibilização pública e aponta diretamente para a pasta de distribuição.  
**Ressalva de uso e reprodutibilidade:** Download indicado pelo grupo; verificar licença e formato antes de reutilizar.  
**Descrição amostral original:** 46,8 milhões de tweets; 18.819 usuários ; 3.163 usuários com autorrelato (3.903 ocorrências parcialmente sobrepostas)  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Autorrelato de diagnóstico/tratamento e marco temporal  
**Abordagem de PLN/IA:** Corpus e comparações de modelos textuais e informações de rede  
**Métricas relatadas:** Artigo de apresentação do corpus : oferece baselines para tarefas específicas; não existe um resultado agregado único do dataset. As métricas dos modelos não são utilizadas sem identificação de tarefa e configuração.  
**Limitações:** Dados do mesmo corpus usado no estudo seguinte; não constitui nova coorte  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 07. Nagamatu & Paraboni (2024)

**Identificação da fonte:** SetembroBR (reutilização)  
**Origem/plataforma:** Twitter/X  
**Regime de acesso:** Público documentado  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://drive.google.com/drive/folders/1MXFRs0u8iF1RNUWABTA0Oz8_Ix1skqZT)  
**Publicação:** [abrir publicação](https://www.linguamatica.com/index.php/linguamatica/pt/article/view/440)  
**Fonte da verificação:** [abrir evidência](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Justificativa do status:** Reutiliza corpus SetembroBR, com acesso documentado no site do grupo original.  
**Ressalva de uso e reprodutibilidade:** Mesmo corpus da referência 6; não contabilizar como base independente.  
**Descrição amostral original:** Reutiliza SetembroBR ; subconjuntos por condição; não somar usuários como casos independentes  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Autorrelato herdado do corpus de origem  
**Abordagem de PLN/IA:** Modelos tradicionais e abordagem LLM com engenharia de prompts  
**Métricas relatadas:** GPT_relev: F1-latency 0,24 (depressão) e 0,23 (ansiedade); F1-macro 0,56/0,55 ; antecipação de 436/479 dias (Tabela 5).  
**Limitações:** Dependência do mesmo corpus e da proximidade ao momento declarado  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 08. Mendes & Caseli (2024)

**Identificação da fonte:** Amive — corpus de 780 postagens universitárias com 21 sinais de depressão  
**Origem/plataforma:** Facebook — páginas públicas de segredos universitários  
**Regime de acesso:** Restrito — corpus não distribuído livremente  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://aclanthology.org/2024.lrec-main.754/)  
**Fonte da verificação:** [abrir evidência](https://brasileiraspln.com/livro-pln/3a-edicao/parte-dominios/cap-saude-mental/cap-saude-mental.html)  
**Justificativa do status:** Livro técnico do grupo UFSCar documenta 780 postagens do Facebook (2012–2021), selecionadas e anotadas manualmente em 21 sinais. O repositório oficial do projeto de geração de dados sintéticos afirma que os textos originais do Amive não podem ser distribuídos publicamente devido à sensibilidade.  
**Ressalva de uso e reprodutibilidade:** A publicação Mendes & Caseli (2024) avalia os textos anotados do projeto Amive; Figueiredo (2026) estuda síntese do mesmo recurso. Não contar as duas publicações como corpora independentes.  
**Descrição amostral original:** Amive: 780 postagens públicas de páginas universitárias do Facebook, coletadas de 2012–2021; 21 sinais anotados por quatro especialistas em formação. Dados originais não redistribuídos publicamente pelo grupo devido à sensibilidade.  
**Unidade de análise:** postagem  
**Volume vinculado ao protocolo:** 780 postagens selecionadas (2012–2021)  
**Família de corpus:** AMIVE  
**Rotulagem:** Quatro anotadores de psicologia, psiquiatria ou terapia ocupacional marcaram trechos associados a 21 sinais e um rótulo de postagem indicativa.  
**Abordagem de PLN/IA:** Regressão logística, SVM, BERTimbau, MentalBERT, MentalRoBERTa  
**Métricas relatadas:** Average Precision : sono 0,900 (regressão logística); preocupação/ansiedade 0,794 (MentalBERT); tristeza 0,745 (BERTimbau); Tabela 5  
**Limitações:** Métrica por sinal; corpus pequeno; não avalia estresse como transtorno  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://brasileiraspln.com/livro-pln/3a-edicao/parte-dominios/cap-saude-mental/cap-saude-mental.html) · [documento](https://github.com/LALIC-UFSCar/synthetic-data-mental-health)  

### 09. Viduani et al. (2025) — pronomes/LIWC

**Identificação da fonte:** IDEA-RiSCo / IDEABot — transcrições de mensagens de voz de adolescentes  
**Origem/plataforma:** WhatsApp (IDEABot), respostas em áudio transcritas em português brasileiro  
**Regime de acesso:** Não confirmado — sem prova suficiente de acesso  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.47626/1516-4446-2024-4058)  
**Fonte da verificação:** [abrir evidência](https://pmc.ncbi.nlm.nih.gov/articles/PMC12815307/)  
**Justificativa do status:** Estudo original do IDEA-RiSCo: 52 participantes (13 MDD e 39 controles), que responderam aos sete dias de perguntas em áudio do IDEABot; cada participante possui sete transcrições, segundo a seção de métodos. A publicação não fornece um link de redistribuição do corpus de transcrições.  
**Ressalva de uso e reprodutibilidade:** O estudo Viduani 2026 utiliza também IDEABot/WhatsApp, mas não foi demonstrado que os mesmos participantes ou transcrições se repetem. Tratar como família de coleta compartilhada, não amostra idêntica.  
**Descrição amostral original:** 52 jovens ; 13 com depressão maior, 39 controles  
**Unidade de análise:** participante com série de transcrições diárias  
**Volume vinculado ao protocolo:** 52 adolescentes; sete transcrições por participante no protocolo descrito  
**Família de corpus:** IDEA-IDEABOT  
**Rotulagem:** Transtorno depressivo maior identificado por avaliação psiquiátrica; sintomas analisados por MFQ e CDRS-R; indicadores pronominais via LIWC em português.  
**Abordagem de PLN/IA:** LIWC; frequência de pronomes; testes estatísticos  
**Métricas relatadas:** Pronomes de 1ª pessoa singular: 9,15% vs. 8,02% , p=0,026 ; rho autorrelato 0,366  
**Limitações:** Estudo correlacional; não é experimento de fine-tuning de BERTimbau  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://pmc.ncbi.nlm.nih.gov/articles/PMC12815307/)  

### 10. Pérez et al. (2025) — DepreSym

**Identificação da fonte:** DepreSym / CLEF eRisk 2023 Task 1  
**Origem/plataforma:** Reddit  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://erisk.irlab.org/depresym_dataset.html)  
**Publicação:** [abrir publicação](https://doi.org/10.1007/s10579-025-09831-6)  
**Fonte da verificação:** [abrir evidência](https://erisk.irlab.org/depresym_dataset.html)  
**Justificativa do status:** Qrels de relevância podem ser consultados; a coleção textual completa exige acordo de utilização para pesquisa enviado aos organizadores.  
**Ressalva de uso e reprodutibilidade:** 21.580 sentenças anotadas; acervo maior de 3.807.115 sentenças não é a mesma amostra.  
**Descrição amostral original:** 21.580 sentenças avaliadas quanto a 21 sintomas BDI-II  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Julgamento de relevância por três avaliadores especialistas, incluindo psicólogo; não diagnóstico do autor  
**Abordagem de PLN/IA:** LLMs como avaliadores, recuperação de informação lexical/densa e re-ranking  
**Métricas relatadas:** Recuperação de sintomas com ANCE : NDCG@10 = 0,746 e AP@1000 = 0,340 nas consultas baseadas em respostas do BDI-II (Tabela 6). Métricas de busca, não de diagnóstico.  
**Limitações:** Valioso para detecção de sinais interpretáveis; dependência do benchmark eRisk e anotações de relevância  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 11. Karpontinis & Soufleri (2025) — DP-CARE

**Identificação da fonte:** Dreaddit  
**Origem/plataforma:** Reddit  
**Regime de acesso:** Público documentado  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/agircc/agir-dreaddit-experiments)  
**Publicação:** [abrir publicação](https://doi.org/10.3389/fdgth.2025.1709671)  
**Fonte da verificação:** [abrir evidência](https://pmc.ncbi.nlm.nih.gov/articles/PMC12739647/)  
**Justificativa do status:** Benchmark com 3.553 segmentos rotulados e versões de download publicadas; distinguir os segmentos rotulados do corpus maior coletado.  
**Ressalva de uso e reprodutibilidade:** O repositório referenciado é de experimentos públicos com Dreaddit; não substitui a atribuição ao dataset original.  
**Descrição amostral original:** Benchmark Dreaddit, 3.553 segmentos rotulados no corpus de referência  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Rótulos humanos de estresse expresso; não avaliação diagnóstica  
**Abordagem de PLN/IA:** Encoder MentalBERT congelado e classificador com DP-AdamW (privacidade diferencial)  
**Métricas relatadas:** F1 classe estresse 0,7808 , ε≈3; baseline sem DP F1 0,8058  
**Limitações:** Trade-off utilidade/privacidade; o artigo diverge entre resumo e tabela no recall, por isso recall não é reproduzido aqui  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 12. Chung et al. (2025) — BERT and BERTopic

**Identificação da fonte:** Mensagens abertas de aplicativo de saúde comunitária (Chung et al.)  
**Origem/plataforma:** Aplicativo móvel de mensagens (Coreia do Sul)  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.1186/s12889-025-23337-4)  
**Fonte da verificação:** [abrir evidência](https://pmc.ncbi.nlm.nih.gov/articles/PMC12150497/)  
**Justificativa do status:** A declaração 'Data availability' informa explicitamente que os dados não estão em repositório público para proteger participantes; solicitações devem ser encaminhadas ao autor correspondente.  
**Ressalva de uso e reprodutibilidade:** Dados originais de 1.332 textos e 230 idosos sob proteção de privacidade; artigo integral disponível não implica corpus aberto.  
**Descrição amostral original:** 1.332 mensagens , 230 participantes idosos  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Triagem PHQ-9 ≥ 10 ; não equivale a entrevista clínica estruturada  
**Abordagem de PLN/IA:** KcBERT e KLUE BERT; BERTopic para temas e evolução temporal  
**Métricas relatadas:** KcBERT F1 global reportado 0,87 ; F1 da classe de risco 0,83  
**Limitações:** Protocolo reporta split por mensagens; examinar possível dependência entre mensagens da mesma pessoa  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 13. Viduani et al. (2026) — estudo experimental GPT-4o

**Identificação da fonte:** IDEABot / estudo de fala naturalística para detecção de depressão em adolescentes (2026)  
**Origem/plataforma:** WhatsApp (IDEABot) com mensagens de voz transcritas em português brasileiro  
**Regime de acesso:** Não confirmado — sem prova suficiente de acesso  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://pubmed.ncbi.nlm.nih.gov/42134742/)  
**Fonte da verificação:** [abrir evidência](https://www.sciencedirect.com/science/article/pii/S0165032726008086)  
**Justificativa do status:** Artigo de prova de conceito descreve 30 adolescentes brasileiros de 16–19 anos, sendo 15 com diagnóstico psiquiátrico confirmado de MDD e 15 controles; 14 dias de coleta por chatbot WhatsApp. A declaração de liberação dos textos individuais não foi encontrada nas fontes acessíveis.  
**Ressalva de uso e reprodutibilidade:** Compartilha a infraestrutura de coleta IDEABot com Viduani et al. (2025); sobreposição efetiva de pessoas e transcrições não documentada nesta auditoria.  
**Descrição amostral original:** Transcrições de áudios naturalísticos em português de 30 adolescentes (15 com MDD clinicamente confirmado e 15 controles), coletadas em 14 dias via IDEABot/WhatsApp; quantidade de mensagens e acesso aos textos não confirmados.  
**Unidade de análise:** adolescente; mensagens transcritas ao longo de 14 dias  
**Volume vinculado ao protocolo:** 30 participantes, 15 MDD e 15 não MDD; volume de mensagens não confirmado  
**Família de corpus:** IDEA-IDEABOT  
**Rotulagem:** Diagnóstico MDD estabelecido por psiquiatra infantil e adolescente por procedimento de referência; classificação binária por LLM.  
**Abordagem de PLN/IA:** GPT-4o por prompting; comparação com 12 modelos GPT  
**Métricas relatadas:** Acurácia 86,6% (IC95% 70,3–95,6%); sensibilidade 100% ; especificidade 73,3%  
**Limitações:** n=30 e grupos extremos; não emprega BERTimbau+LIWC ou laudos como texto de entrada  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://www.sciencedirect.com/science/article/pii/S0165032726008086) · [documento](https://pubmed.ncbi.nlm.nih.gov/42134742/)  

### 14. AlSaad, Alshakhs & Thomas (2026)

**Identificação da fonte:** Depression Subtype Twitter Dataset (Zenodo 14233292)  
**Origem/plataforma:** Twitter/X  
**Regime de acesso:** Público documentado  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://doi.org/10.5281/zenodo.14233292)  
**Publicação:** [abrir publicação](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1790533/full)  
**Fonte da verificação:** [abrir evidência](https://www.frontiersin.org/journals/digital-health/articles/10.3389/fdgth.2026.1790533/full)  
**Justificativa do status:** Os autores declaram que a base de 14.983 tweets em seis categorias está disponível no Zenodo e publicam repositório de código.  
**Ressalva de uso e reprodutibilidade:** Nome descritivo; não afirmar que o arquivo no Zenodo possui exatamente esse título sem abrir o registro.  
**Descrição amostral original:** 14.983 tweets  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Curadoria/anotação textual; sem confirmação diagnóstica por pessoa  
**Abordagem de PLN/IA:** LLMs few-shot; encoders fine-tuned (RoBERTa, DeBERTa e outros)  
**Métricas relatadas:** RoBERTa-large : macro-F1 0,957 , acurácia 0,954 no teste (Tabela 2)  
**Limitações:** Taxonomia textual, não avaliação psiquiátrica; um domínio  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 15. Kallstenius et al. (2026)

**Identificação da fonte:** Mental Health Sentiment Analysis (Kaggle; corpus-base), ampliado por publicações de subreddits de TDAH/autismo  
**Origem/plataforma:** Reddit; Twitter/X  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://www.kaggle.com/datasets/suchintikasarkar/sentiment-analysis-for-mental-health/data)  
**Publicação:** [abrir publicação](https://mental.jmir.org/2026/1/e98925/)  
**Fonte da verificação:** [abrir evidência](https://mental.jmir.org/2026/1/e98925/)  
**Justificativa do status:** O artigo utiliza o corpus-base Mental Health Sentiment Analysis do Kaggle, com contribuições de r/ADHD, r/adhdwomen, r/autism e r/aspergers. O Kaggle fornece acesso ao corpus-base; não foi identificado download público que reproduza integralmente a compilação e o pré-processamento das 60.889 instâncias do artigo.  
**Ressalva de uso e reprodutibilidade:** Link confirmado do corpus-base. O dataset agregado/expandido e as saídas do ensemble não devem ser descritos como integralmente públicos apenas com base no Kaggle.  
**Descrição amostral original:** 60.889 textos ; 9 classes ; treino 42.622, validação 6.089, teste 12.178  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Comunidade de origem ou autodeclaração  
**Abordagem de PLN/IA:** TF-IDF + SVM RBF; GPT-4o-mini base/ajustado; 2 ensembles  
**Métricas relatadas:** Acurácia teste: 0,939 (soft), 0,938 (híbrido), 0,919 (SVM), 0,886 (GPT ajustado)  
**Limitações:** Split por post e back-translation pré-split; ausência de avaliação clínica externa  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 16. Viduani et al. (2026) — revisão de escopo

**Identificação da fonte:** Não se aplica — revisão de escopo (180 estudos)  
**Origem/plataforma:** Literatura científica  
**Regime de acesso:** Não se aplica — revisão sem base própria  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://pubmed.ncbi.nlm.nih.gov/41825397/)  
**Fonte da verificação:** [abrir evidência](https://pubmed.ncbi.nlm.nih.gov/41825397/)  
**Justificativa do status:** Revisão secundária, sem corpus textual próprio que deva ser disponibilizado.  
**Ressalva de uso e reprodutibilidade:** Os 180 estudos são referências incluídas, não registros textuais para treinamento.  
**Descrição amostral original:** 180 estudos incluídos de 27.967 registros  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Auditoria da referência diagnóstica nos estudos incluídos  
**Abordagem de PLN/IA:** Revisão de recursos lexicais, LIWC, PLN, transformers e LLMs  
**Métricas relatadas:** 20,5% com instrumento diagnóstico padrão-ouro; 64,2% das amostras em inglês  
**Limitações:** Síntese da evidência, não produz classificador nem F1 próprio  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 17. Alqahtani, Kayi & Diab (2026) — StressRoBERTa

**Identificação da fonte:** Stress-SMHD (pré-treinamento); SMM4H 2022 Task 8; Dreaddit  
**Origem/plataforma:** Reddit e Twitter/X  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://healthlanguageprocessing.org/smm4h-2022/)  
**Publicação:** [abrir publicação](https://aclanthology.org/2026.healing-1.27/)  
**Fonte da verificação:** [abrir evidência](https://aclanthology.org/2026.healing-1.27/)  
**Justificativa do status:** Dreaddit possui cópias públicas; o SMM4H é distribuído via portal da tarefa, com cadastro para participação. Não identifiquei download aberto do Stress-SMHD integral.  
**Ressalva de uso e reprodutibilidade:** Distinguir 108 milhões de palavras de pré-treinamento das instâncias rotuladas de avaliação.  
**Descrição amostral original:** Pré-treino em 108 milhões de palavras do Stress-SMHD; avaliação SMM4H 2022 e Dreaddit  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Histórico de diagnósticos autorreportados para pré-treino; rótulos de estresse dos benchmarks  
**Abordagem de PLN/IA:** RoBERTa com pré-treino contínuo entre condições e fine-tuning na tarefa de estresse  
**Métricas relatadas:** F1 0,82 no SMM4H 2022 e 0,81 no Dreaddit  
**Limitações:** Estudo 2026 diretamente ligado às três condições; resultados por corpus, sem validade clínica externa  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 18. Herculano et al. (2024) — DepreRedditBR

**Identificação da fonte:** DepreRedditBR  
**Origem/plataforma:** Reddit  
**Regime de acesso:** Restrito — corpus não distribuído livremente  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://zenodo.org/records/12744841)  
**Publicação:** [abrir publicação](https://doi.org/10.5753/dsw.2024.243994)  
**Fonte da verificação:** [abrir evidência](https://zenodo.org/records/12744841)  
**Justificativa do status:** Registro público no Zenodo, mas arquivos explicitamente marcados como restritos. É preciso acesso concedido pelo depositante.  
**Ressalva de uso e reprodutibilidade:** Página pública ≠ arquivos públicos. Não prometer download dos textos.  
**Descrição amostral original:** DepreRedditBR: 509.675 postagens textuais em português brasileiro; recurso apresentado no DSW 2024.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Seleção de conteúdo relacionado à depressão; não equivale a confirmação de diagnóstico clínico do autor.  
**Abordagem de PLN/IA:** Tarefa: Construção de dataset e apoio ao pré-treinamento e à classificação de intensidade de sinais depressivos. Modelos e representações: Corpus para pré-treinamento de modelo de linguagem de domínio; aplicação posterior em classificação textual.  
**Métricas relatadas:** Contribuição principal: conjunto de 509.675 instâncias. Não atribuir a esse artigo uma acurácia única de diagnóstico.  
**Limitações:** Conteúdo e amostragem de rede social não constituem padrão-ouro clínico.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 19. Herculano et al. (2025) — Comparação DepreBERTBR

**Identificação da fonte:** Base de avaliação multiclasse DepreBERTBR (nome formal não confirmado)  
**Origem/plataforma:** Português brasileiro; plataforma não confirmada para avaliação 2025  
**Regime de acesso:** Não confirmado — sem prova suficiente de acesso  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.5753/sbbd.2025.247283)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.5753/sbbd.2025.247283)  
**Justificativa do status:** A base e a partição exatas da comparação 2025 não foram verificadas; não tratar os 509.675 posts do DepreRedditBR como sua amostra de teste.  
**Ressalva de uso e reprodutibilidade:** Também faltam valores exatos de F1 por configuração, exigindo tabelas do artigo completo.  
**Descrição amostral original:** Estudo comparativo de classificação em quatro classes (ausente, leve, moderada, grave) no português brasileiro. A base de avaliação e sua volumetria específica não foram confirmadas no resumo público do artigo de 2025. Não confundir com as 509.675 instâncias do corpus DepreRedditBR publicado em 2024 (recurso de pré-treinamento), cuja totalidade não foi comprovada como conjunto de avaliação de 2025.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Quatro classes textuais: ausente, leve, moderada e grave; não são diagnósticos individualizados.  
**Abordagem de PLN/IA:** Tarefa: Classificação supervisionada multiclasse. Modelos e representações: DepreBERTBR especializado versus modelos de linguagem monolíngues e multilíngues de domínio geral.  
**Métricas relatadas:** Resumo original: DepreBERTBR obtém F1-score competitivo, comparável a modelos gerais monolíngues e multilíngues. Valores exatos de F1 por modelo/configuração não confirmados sem acesso às tabelas do artigo completo.  
**Limitações:** A comparação depende das mesmas classes, partições e critérios de rotulagem.  
**Pendências de métricas/volume:** Dataset; Resultados  

### 20. Santos et al. (2025) — Mixture of Experts

**Identificação da fonte:** SetembroBR; SMHD (Self-Reported Mental Health Diagnoses)  
**Origem/plataforma:** Twitter/X e Reddit  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Publicação:** [abrir publicação](https://doi.org/10.1109/ACCESS.2025.3583259)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.1109/ACCESS.2025.3583259)  
**Justificativa do status:** O artigo identifica SetembroBR (Twitter/X em PT-BR) e SMHD (Reddit em inglês). O primeiro tem link público de distribuição; o segundo possui solicitação por canal da coleção Georgetown. O tamanho global documentado de SMHD não corresponde necessariamente aos subconjuntos exatos da Tabela 2 deste artigo.  
**Ressalva de uso e reprodutibilidade:** Usa Até 1.000 mensagens Twitter/X por usuário; aferir quantidades por classe da Tabela 2 antes de apresentar n do experimento. Não reaproveitar totais globais do SMHD como os efetivamente avaliados.  
**Descrição amostral original:** Corpora identificados na publicação: SetembroBR (Twitter/X, português brasileiro) e SMHD (Reddit, inglês). Os modelos no Twitter/X consideram até as 1.000 mensagens mais recentes de cada usuário. A Tabela 2 apresenta quantidades por grupo/domínio, mas os números exatos de cada subconjunto não foram transcritos ou confirmados nesta auditoria.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Dados dos corpora e avaliação humana por especialistas; não generalizar para diagnóstico clínico confirmado.  
**Abordagem de PLN/IA:** Tarefa: Predição de condições por dados textuais e não textuais; avaliação entre plataformas e idiomas. Modelos e representações: Modelos de linguagem em arquitetura mixture-of-experts (MoE), com atributos textuais e sociais.  
**Métricas relatadas:** Melhorias ante trabalhos anteriores segundo autores, com métricas computacionais e avaliação humana; não utilizar métrica agregada não apresentada.  
**Limitações:** Heterogeneidade de domínio, idioma e rotulagem afeta a transferência.  
**Pendências de métricas/volume:** Dataset  
**Fontes adicionais desta rodada:** [documento](https://doi.org/10.1109/ACCESS.2025.3583259) · [documento](https://ivandreparaboni.wixsite.com/research/setembrobr) · [documento](https://pmc.ncbi.nlm.nih.gov/articles/PMC11607554/)  

### 21. Mao & Han (2025) — TextGCN com emoção

**Identificação da fonte:** Cinco benchmarks reutilizados: Twitter Depression (3200); Multilingual Twitter EN (1000); Identifying Depression — fóruns (1323), Reddit (1841), conjunto misto (2821)  
**Origem/plataforma:** Twitter/X, fóruns web e Reddit — fontes individualizadas na Tabela 1  
**Regime de acesso:** Não confirmado — sem prova suficiente de acesso  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.3389/fpsyg.2025.1612769)  
**Fonte da verificação:** [abrir evidência](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1612769/full)  
**Justificativa do status:** A Tabela 1 do artigo fornece cinco nomes, plataformas, totais e classes, e os autores os descrevem como publicamente disponíveis; sua declaração de disponibilidade de dados, porém, não oferece cinco links diretos e remete perguntas ao autor correspondente. Nesta auditoria, não foi confirmado o acesso integral às versões usadas.  
**Ressalva de uso e reprodutibilidade:** As cinco bases somam 10.185 posts em contagens reportadas (3.200+1.000+1.323+1.841+2.821). A soma é de registros declarados e não prova exclusividade entre corpora derivados.  
**Descrição amostral original:** Cinco bases da Tabela 1: Twitter Depression 3.200 (843/2.357), Multilingual Twitter EN 1.000 (500/500), Identifying Depression: fóruns 1.323 (390/933), Reddit 1.841 (1.293/548), combinado Reddit/fóruns 2.821 (1.340/1.481). A soma não é evidência de unicidade.  
**Unidade de análise:** postagem  
**Volume vinculado ao protocolo:** 3.200; 1.000; 1.323; 1.841; 2.821 postagens conforme Tabela 1; sobreposição desconhecida  
**Família de corpus:** FIVE-REUSED-BENCHMARKS  
**Rotulagem:** Classificação binária positiva/negativa por benchmark; detalhes originais de rotulagem não unificados entre conjuntos.  
**Abordagem de PLN/IA:** Tarefa: Classificação de textos com sinais de depressão. Modelos e representações: TextGCN enriquecido com representações emocionais derivadas de modelos de linguagem especializados.  
**Métricas relatadas:** Ganhos relatados frente a configurações de referência; não consolidar resultados de datasets distintos em um F1 único.  
**Limitações:** Dependência de corpus, estratégias de anotação e linguagem.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1612769/full)  

### 22. Shah et al. (2025) — Fine-tuning de LLMs

**Identificação da fonte:** MDDL / Shen et al. (IJCAI 2017) — D1, D2 e D3, corpus de Twitter/X  
**Origem/plataforma:** Twitter/X  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://github.com/sunlightsgy/MDDL)  
**Publicação:** [abrir publicação](https://doi.org/10.1016/j.osnem.2025.100311)  
**Fonte da verificação:** [abrir evidência](https://github.com/sunlightsgy/MDDL)  
**Justificativa do status:** Os criadores originais publicam README oficial do MDDL com descrição das bases D1 (autorrelato de diagnóstico), D2 (controles por filtro lexical) e D3 (candidatos ruidosos sem rótulo) e link de download em SharePoint. Não foi comprovado que os arquivos exatos de 20 mil registros para treino e 20 mil para teste do trabalho de Shah 2025 estejam incluídos sem preparação adicional.  
**Ressalva de uso e reprodutibilidade:** Repositório é da fonte original do corpus, não do estudo de Shah. Acesso público anunciado à base original não comprova download atual do SharePoint ou correspondência exata de partições.  
**Descrição amostral original:** Twitter/X; reutiliza o corpus de Shen et al. (IJCAI 2017), organizado em D1 (usuários com autorrelato de depressão), D2 (controles operacionais) e D3 (candidatos com rótulos mais ruidosos). O pré-print dos autores (arXiv:2409.14794, §3.4.1) informa 20.000 instâncias rotuladas para ajuste do GPT-3.5 Turbo e outras 20.000 instâncias para teste, sem sobreposição declarada. Não são o total do corpus original; diferenças na versão editorial de 2025 não foram verificadas.  
**Unidade de análise:** postagem/usuário conforme corpus original e recorte editorial  
**Volume vinculado ao protocolo:** Pré-print de Shah: 20.000 instâncias para ajuste e 20.000 para teste; total original de D1/D2/D3 distinto.  
**Família de corpus:** MDDL-SHEN2017  
**Rotulagem:** D1 autorrelato de diagnóstico; D2 controles baseados em ausência de menção lexical; D3 candidatos não rotulados com termo 'depress'.  
**Abordagem de PLN/IA:** Tarefa: Classificação binária de postagens. Modelos e representações: GPT-3.5 Turbo 1106 e LLaMA2-7B ajustados; avaliação zero-shot/few-shot.  
**Métricas relatadas:** No protocolo few-shot relatado: 96,4% de acurácia para GPT-3.5 ajustado e 87,1% para LLaMA2-7B; não comparável diretamente a outros datasets.  
**Limitações:** Desempenho no corpus avaliado não valida uso diagnóstico.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://github.com/sunlightsgy/MDDL) · [documento](https://arxiv.org/abs/2409.14794)  

### 23. Hussain et al. (2025) — Gravidade em quatro níveis

**Identificação da fonte:** Reddit depression severity — corpus anotado por Hussain et al. (2025)  
**Origem/plataforma:** Reddit (r/depression; r/SuicideWatch; r/mentalhealth e outros)  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.3390/ai6070157)  
**Fonte da verificação:** [abrir evidência](https://www.mdpi.com/2673-2688/6/7/157)  
**Justificativa do status:** A seção Data Availability Statement da publicação diz 'The data is available on request'. Portanto, 9.841 postagens de 6.200 usuários não são descritas como arquivos de download público; requerem solicitação aos autores.  
**Ressalva de uso e reprodutibilidade:** Volume de 9.841 postagens, de 6.200 usuários, com quatro níveis de gravidade textual; não atribuir diagnóstico clínico nem inferir acesso livre aos arquivos.  
**Descrição amostral original:** 9.841 postagens em inglês de 6.200 usuários únicos do Reddit, coletadas de janeiro de 2019 a dezembro de 2023, após filtragem; quatro níveis anotados de gravidade textual (mínimo, leve, moderado, grave). Os usuários contribuem em média com 1,59 postagem. Trata-se de posts de comunidades de saúde mental, não de amostra representativa da população geral.  
**Unidade de análise:** postagem do Reddit  
**Volume vinculado ao protocolo:** 9.841 postagens / 6.200 usuários (2019–2023)  
**Família de corpus:** HUSSAIN-REDDIT2025  
**Rotulagem:** Quatro níveis (mínimo, leve, moderado, grave), consenso entre anotadores e adjudicação; verificar distribuição por classe antes de reproduzir.  
**Abordagem de PLN/IA:** Tarefa: Classificação multiclasse de gravidade textual. Modelos e representações: Dez classificadores clássicos com GloVe/Word2Vec e dez transformers, incluindo MentalBERT.  
**Métricas relatadas:** F1 relatado: MentalBERT 97,31%; XGBoost + GloVe 94,01%, dentro do protocolo do estudo.  
**Limitações:** Comparações externas exigem mesma tarefa, classes e divisão dos dados.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://www.mdpi.com/2673-2688/6/7/157)  

### 24. Tahir et al. (2025) — Revisão ML/DL

**Identificação da fonte:** Não se aplica — revisão metodológica ML/DL  
**Origem/plataforma:** Literatura científica  
**Regime de acesso:** Não se aplica — revisão sem base própria  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.1109/ACCESS.2025.3530862)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.1109/ACCESS.2025.3530862)  
**Justificativa do status:** Reúne datasets de terceiros; não informa um único corpus experimental novo.  
**Ressalva de uso e reprodutibilidade:** A avaliação deve comparar cobertura da revisão, não métricas de treino de um corpus inexistente.  
**Descrição amostral original:** Múltiplos corpora analisados na literatura; não se trata de um corpus de teste único.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Analisa diferenças de anotação e rotulagem entre estudos; não gera rótulos próprios.  
**Abordagem de PLN/IA:** Tarefa: Revisão de técnicas e datasets para detecção de depressão. Modelos e representações: Mapeamento de ML e DL, representações e arquiteturas; discussão de desafios.  
**Métricas relatadas:** Revisão sem acurácia ou F1 experimental próprio.  
**Limitações:** Evidência secundária; exclui algumas famílias de métodos e se concentra em redes sociais.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 25. Jin & Zhang (2026) — Multitarefa guiada por DSM-5

**Identificação da fonte:** WU3D — Weibo User Depression Detection Dataset  
**Origem/plataforma:** Weibo  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.3390/electronics15030598)  
**Fonte da verificação:** [abrir evidência](https://www.mdpi.com/2079-9292/15/3/598)  
**Justificativa do status:** Apesar de seção metodológica chamar o conjunto de público, a declaração de disponibilidade informa que dados brutos não são públicos, com possível contato aos autores e aprovação ética.  
**Ressalva de uso e reprodutibilidade:** 32.570 usuários, 2.191.910 posts; declaração de acesso prevalece sobre rótulo genérico 'publicamente disponível'.  
**Descrição amostral original:** WU3D: 32.570 usuários e cerca de 2,19 milhões de postagens; 1.390 usuários no grupo de depressão e 31.180 controles, conforme artigo.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** O artigo descreve entrevistas clínicas e PHQ-9 para o grupo de depressão, com anotação especializada.  
**Abordagem de PLN/IA:** Tarefa: Detecção binária, reconhecimento multirrótulo de sintomas e classificação da gravidade. Modelos e representações: BERT chinês + Bi-LSTM + atenção hierárquica + características temporais e tópicos LDA; treinamento multitarefa guiado por DSM-5.  
**Métricas relatadas:** F1 principal de 91,8% no WU3D, contra 85,6% do BERT-base, conforme autores.  
**Limitações:** Uma população e plataforma específicas; não supõe validade clínica externa ou em português.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 26. Tang et al. (2026) — AI in the Wild (metanálise)

**Identificação da fonte:** Não se aplica — metanálise AI in the Wild  
**Origem/plataforma:** Literatura científica  
**Regime de acesso:** Não se aplica — revisão sem base própria  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.1609/aaai.v40i46.41283)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.1609/aaai.v40i46.41283)  
**Justificativa do status:** Dados agregados extraídos de 67 estudos; não constitui nova coleção de postagens.  
**Ressalva de uso e reprodutibilidade:** Metanálise exige método de síntese próprio; não registrar como dataset primário.  
**Descrição amostral original:** Síntese de 67 estudos empíricos, não uma nova base de postagens.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Analisa procedência dos rótulos como moderador metodológico.  
**Abordagem de PLN/IA:** Tarefa: Metanálise de desempenho, fatores de heterogeneidade e avaliação alinhada a critérios psicológicos. Modelos e representações: Comparação de técnicas tradicionais, transformers e modelos multimodais.  
**Métricas relatadas:** Desempenho agregado descrito pelos autores como r≈0,80; não é acurácia, nem F1 de classificador individual.  
**Limitações:** Heterogeneidade de estudos e diferença entre tarefa computacional e validade clínica.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 27. Chim et al. (2024) — CLPsych Shared Task

**Identificação da fonte:** UMD Reddit Suicidality Dataset, Version 2 — recorte CLPsych 2024 (125 usuários)  
**Origem/plataforma:** Reddit (r/SuicideWatch)  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://psresnik.github.io/umd_reddit_suicidality_dataset.html)  
**Publicação:** [abrir publicação](https://aclanthology.org/2024.clpsych-1.15/)  
**Fonte da verificação:** [abrir evidência](https://psresnik.github.io/umd_reddit_suicidality_dataset.html)  
**Justificativa do status:** A página oficial da Universidade de Maryland exige solicitação e comprovante de análise por IRB ou comitê de ética equivalente. Na CLPsych 2024, participantes assinaram acordo de acesso e eliminação dos arquivos ao término da tarefa.  
**Ressalva de uso e reprodutibilidade:** A versão da Shared Task 2024 contém 125 usuários de amostra anotada; acesso para estudos posteriores exige novo pedido e revisão ética, não o formulário temporário do evento.  
**Descrição amostral original:** Amostra anotada de 125 usuários; postagens de Reddit e níveis de risco predefinidos.  
**Unidade de análise:** usuário com sequência de postagens  
**Volume vinculado ao protocolo:** 125 usuários anotados da tarefa  
**Família de corpus:** UMD-SUICIDALITY  
**Rotulagem:** Risco de suicidabilidade por usuário baseado em anotações de especialistas; sub-tarefas de realce de evidências e sumarização, sem diagnóstico clínico.  
**Abordagem de PLN/IA:** Tarefa: Extração de trechos de evidência e sumarização de evidências de risco. Modelos e representações: Benchmark de sistemas com LLMs abertos; comparação por BERTScore e inferência textual.  
**Métricas relatadas:** O artigo introduz protocolo e métricas de avaliação das duas subtarefas; não reportar um único F1 de diagnóstico.  
**Limitações:** Níveis de risco atribuídos no benchmark não equivalem a decisão clínica automatizada.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  
**Fontes adicionais desta rodada:** [documento](https://psresnik.github.io/umd_reddit_suicidality_dataset.html) · [documento](https://clpsych.org/wp-content/uploads/2023/12/Dataset-application-for-CLPsych-2024.pdf)  

### 28. Yu et al. (2026) — MIND e detecção precoce

**Identificação da fonte:** CLEF eRisk 2017 — Early Risk Detection (depressão)  
**Origem/plataforma:** Reddit  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://erisk.irlab.org/2017/task.html)  
**Publicação:** [abrir publicação](https://doi.org/10.2196/87138)  
**Fonte da verificação:** [abrir evidência](https://erisk.irlab.org/2017/task.html)  
**Justificativa do status:** Datasets da competição foram disponibilizados a participantes registrados. Um artigo posterior tornar código público não significa abrir os textos integrais.  
**Ressalva de uso e reprodutibilidade:** Sequências por usuário: unidade de análise e marco temporal devem ser preservados.  
**Descrição amostral original:** Benchmark eRisk 2017; sequências temporais de postagens por usuário.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Grupos deprimido/controle do eRisk baseados em registros e autorrelatos disponíveis no benchmark.  
**Abordagem de PLN/IA:** Tarefa: Predição sequencial no nível de usuário e identificação precoce de risco. Modelos e representações: MIND: padrões temporais de postagem e filtragem/análise por LLM.  
**Métricas relatadas:** A análise de ablação relata F1-ERD 0,671; ERDE5 0,080 e ERDE50 0,069 para MIND.  
**Limitações:** Horários de postagem são proxies de atividade, não medidas diretas de sono ou diagnóstico.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 29. Mandal et al. (2025) — QuestMF

**Identificação da fonte:** E-DAIC — Extended Distress Analysis Interview Corpus (AVEC 2019)  
**Origem/plataforma:** Entrevistas clínico-computacionais (transcrição, áudio e vídeo)  
**Regime de acesso:** Controlado — mediante solicitação/acordo  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://dcapswoz.ict.usc.edu/)  
**Publicação:** [abrir publicação](https://aclanthology.org/2025.clpsych-1.4/)  
**Fonte da verificação:** [abrir evidência](https://dcapswoz.ict.usc.edu/)  
**Justificativa do status:** USC ICT distribui E-DAIC mediante solicitação assinada de pesquisadores acadêmicos ou sem fins lucrativos.  
**Ressalva de uso e reprodutibilidade:** 275 sessões no protocolo descrito; dados não são corpus de Reddit e não são download aberto.  
**Descrição amostral original:** E-DAIC (AVEC 2019): 275 sessões multimodais de entrevistas em inglês, sendo 163 para treino, 56 para validação e 56 para teste; uma sessão da validação e uma de teste excluídas por arquivos incompletos de vídeo. Textos transcritos, áudio, atributos visuais e escores PHQ-8; não é corpus de postagens de redes sociais.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Escores de avaliação de depressão por questionários/entrevistas no benchmark; a predição é de gravidade, não diagnóstico clínico novo.  
**Abordagem de PLN/IA:** Tarefa: Predição ordinal de gravidade e de respostas por pergunta. Modelos e representações: QuestMF (fusão multimodal por questão) e função de perda ImbOLL para desequilíbrio e ordinalidade.  
**Métricas relatadas:** QuestMF com ImbOLL no E-DAIC, Tabela 1 (melhor execução): CCC = 0,685, RMSE = 5,32, MAE = 4,11. Tabela 2 (média ± desvio-padrão, três sementes): CCC = 0,662 ± 0,022, RMSE = 5,25 ± 0,08, MAE = 3,95 ± 0,13. CCC mede concordância, não acurácia ou F1.  
**Limitações:** Avaliação circunscrita ao benchmark de entrevista, distinta de redes sociais.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 30. Wesley Ramos dos Santos (2025) — Predição de transtornos de saúde mental

**Identificação da fonte:** SetembroBR; corpus Reddit usado na tese  
**Origem/plataforma:** Twitter/X e Reddit  
**Regime de acesso:** Acesso parcial — modalidades diferentes  
**Link para corpus, portal ou solicitação:** [consultar fonte de acesso](https://ivandreparaboni.wixsite.com/research/setembrobr)  
**Publicação:** [abrir publicação](https://doi.org/10.11606/T.100.2025.tde-12062025-101544)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.11606/T.100.2025.tde-12062025-101544)  
**Justificativa do status:** SetembroBR possui acesso público indicado pelo grupo. O corpus do domínio Reddit e condições de reprodução exatas na tese não foram confirmados aqui.  
**Ressalva de uso e reprodutibilidade:** Evitar confundir métricas de baseline com resultado agregado da tese.  
**Descrição amostral original:** SetembroBR e corpus de Reddit para transferência entre domínios.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Autorrelatos de diagnóstico/tratamento para seleção dos indivíduos; parcela do corpus em português avaliada por especialistas humanos.  
**Abordagem de PLN/IA:** Tarefa: Predição no nível de usuário a partir de timelines; transferência entre domínio e idioma. Modelos e representações: Filtros de relevância, atributos textuais/não textuais e comitês de classificadores.  
**Métricas relatadas:** Exemplo experimental documentado na tese, Tabela 4, p. 87: classificador LSTM.BERT treinado em dados desbalanceados do SetembroBR obteve macro-F1 = 0,63 em depressão e = 0,61 em ansiedade; versões balanceadas obtiveram 0,43 e 0,31, respectivamente. São resultados desse experimento e não um único desempenho consolidado da tese ou do método final.  
**Limitações:** Tese de doutorado, não artigo de periódico; possível sobreposição temática e de recursos com Santos et al. (2025).  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 31. Figueiredo (2026) — Dados sintéticos em saúde mental

**Identificação da fonte:** Amive — corpus original sensível e pipeline de paráfrases sintéticas  
**Origem/plataforma:** Facebook — páginas universitárias na origem do corpus Amive  
**Regime de acesso:** Restrito — corpus não distribuído livremente  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://repositorio.ufscar.br/items/e2916bfc-974c-4b67-b96e-f0d67065827c)  
**Fonte da verificação:** [abrir evidência](https://repositorio.ufscar.br/items/e2916bfc-974c-4b67-b96e-f0d67065827c)  
**Justificativa do status:** Fontes UFSCar documentam o Amive como postagens de páginas universitárias de Facebook; o corpus de origem possui 780 postagens anotadas, mas não foi confirmado que todas tenham entrado nas partições do experimento de síntese. A autora disponibiliza código, não os textos originais.  
**Ressalva de uso e reprodutibilidade:** Mesmo projeto de origem usado por Mendes & Caseli (2024). Para Figueiredo (2026), conferir n de sentenças/instâncias após seleção do sintoma e split de treino/teste; 780 postagens originais não são o total do experimento binário.  
**Descrição amostral original:** Amive original: 780 postagens de páginas universitárias do Facebook anotadas com sintomas. Dados sensíveis não distribuídos integralmente; Figueiredo (2026) seleciona sentenças para síntese e experimentos binários, cujo volume efetivo permanece não confirmado.  
**Unidade de análise:** postagens originais; sentenças selecionadas e paráfrases sintéticas na avaliação  
**Volume vinculado ao protocolo:** 780 postagens no corpus original Amive; volume efetivo de sentenças no experimento 2026 não confirmado  
**Família de corpus:** AMIVE  
**Rotulagem:** Sinais anotados em trechos de postagens; classificação binária do sintoma Tristeza/Humor deprimido na avaliação extrínseca.  
**Abordagem de PLN/IA:** Tarefa: Paráfrase sintética, similaridade textual e avaliação extrínseca de classificação binária. Modelos e representações: Retrotradução, PEGASUS, BERTScore com BERTimbau; baselines LR, SVM, Naive Bayes e Random Forest.  
**Métricas relatadas:** Utilidade classificatória em geral preservada, mas perda de precisão em transferência sintético→real e alterações de nuances discursivas.  
**Limitações:** Trabalho de conclusão de curso, não artigo revisado por pares; apenas parte dos sintomas foi estudada.  
**Pendências de métricas/volume:** Dataset  
**Fontes adicionais desta rodada:** [documento](https://repositorio.ufscar.br/items/e2916bfc-974c-4b67-b96e-f0d67065827c) · [documento](https://github.com/LALIC-UFSCar/synthetic-data-mental-health) · [documento](https://brasileiraspln.com/livro-pln/3a-edicao/parte-dominios/cap-saude-mental/cap-saude-mental.html)  

### 32. Bhatt et al. (2026) — Revisão entre plataformas

**Identificação da fonte:** Não se aplica — revisão entre plataformas  
**Origem/plataforma:** Literatura científica  
**Regime de acesso:** Não se aplica — revisão sem base própria  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.1007/s44192-026-00368-w)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.1007/s44192-026-00368-w)  
**Justificativa do status:** Revisão de estudos, sem base original independente para baixar.  
**Ressalva de uso e reprodutibilidade:** Usar como evidência secundária e fonte para localizar bases subjacentes.  
**Descrição amostral original:** Revisão de datasets e tarefas de mídias sociais; sem novo conjunto de avaliação próprio.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Discute heterogeneidade da anotação e das populações entre estudos.  
**Abordagem de PLN/IA:** Tarefa: Revisão narrativa de métodos, datasets, transferência e ética. Modelos e representações: Panorama de BERT, RoBERTa e outros métodos de PLN para análise de saúde mental.  
**Métricas relatadas:** Síntese secundária, sem acurácia ou F1 experimental único.  
**Limitações:** A heterogeneidade dos estudos impede comparações quantitativas diretas.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

### 33. Jin et al. (2025) — Scoping Review de LLMs

**Identificação da fonte:** Não se aplica — scoping review sobre LLMs  
**Origem/plataforma:** Literatura científica  
**Regime de acesso:** Não se aplica — revisão sem base própria  
**Link para corpus, portal ou solicitação:** Não identificado nesta auditoria  
**Publicação:** [abrir publicação](https://doi.org/10.2196/69284)  
**Fonte da verificação:** [abrir evidência](https://doi.org/10.2196/69284)  
**Justificativa do status:** Inclui 95 trabalhos, não um dataset de postagens rotuladas para experimentar.  
**Ressalva de uso e reprodutibilidade:** 95 artigos ≠ 95 instâncias ou 95 corpora independentes.  
**Descrição amostral original:** Revisão de escopo: 95 artigos incluídos de 4.859 registros examinados em sete bases.  
**Unidade de análise:** Ainda não sistematizada  
**Volume vinculado ao protocolo:** Consultar descrição original  
**Família de corpus:** Ainda não atribuída  
**Rotulagem:** Consolida tipos de ground truth empregados nos estudos; não produz rótulos originais.  
**Abordagem de PLN/IA:** Tarefa: Mapeamento de triagem, detecção, tratamento e aconselhamento apoiado por LLMs. Modelos e representações: Famílias de LLMs e estratégias de uso; estudos de detecção e intervenções.  
**Métricas relatadas:** 67/95 artigos abordam triagem/detecção; 33/95 tratam especificamente de detecção/classificação de depressão, segundo a revisão.  
**Limitações:** Revisão secundária com grande heterogeneidade de tarefas e desenhos; não implica eficácia clínica comprovada.  
**Pendências de métricas/volume:** Sem pendência numérica pré-registrada; isso não certifica replicação  

## Evidências que permanecem pendentes

**Quatro estudos têm acesso ao corpus ainda não confirmado:** IDs **09, 13, 19 e 21**. O rótulo significa ausência de prova de disponibilidade da versão experimental, não inexistência do material.

**Três estudos mantêm lacunas numéricas específicas:** Herculano et al. (2025, ID 19), Santos et al. (2025, ID 20, estatísticas por subconjunto da Tabela 2) e Figueiredo (2026, ID 31, volume efetivo e partições do experimento de síntese). Não preencher com quantidades de outros trabalhos da mesma família de corpus.

**Próximas verificações prioritárias:** obter a versão integral com tabelas experimentais de Herculano (SBBD 2025), conferir os valores da Tabela 2 de Santos et al. no IEEE Access, localizar a contagem de sentenças na dissertação/TCC de Figueiredo, documentar canais de solicitação dos dados IDEA/IDEABot e mapear URLs originais dos cinco benchmarks de Mao & Han.

## Fontes auxiliares e políticas de disponibilidade

- [Inventário científico de corpora de depressão, com categorias FREE/AUTH/DUA/UNK](https://github.com/bucuram/depression-datasets-nlp)
- [Capítulo brasileiro sobre PLN em saúde mental e construção do Amive](https://brasileiraspln.com/livro-pln/3a-edicao/parte-dominios/cap-saude-mental/cap-saude-mental.html)
- [Repositório original do MDDL](https://github.com/sunlightsgy/MDDL)
- [Solicitação de acesso UMD Suicidality](https://psresnik.github.io/umd_reddit_suicidality_dataset.html)
- [Texto de Hussain et al., seção Data Availability](https://www.mdpi.com/2673-2688/6/7/157)
- [Projeto de síntese Amive, que descreve restrições éticas](https://github.com/LALIC-UFSCar/synthetic-data-mental-health)

## Metodologia e limites

As classificações são **documentais**. Não houve auditoria dos arquivos brutos, assinatura de acordos, reidratação de tweets ou confirmação da persistência de todos os downloads externos. “Público” significa disponibilização declarada e documentada em fonte reconhecível, não garantia de arquivo completo acessível hoje. Em “Parcial”, os componentes ou os recortes têm regimes diversos. Artigos de revisão foram marcados “Não se aplica” para não inferir corpus experimental próprio.

*Revisão de 33 publicações, não censo de 33 corpora inéditos, e não certificação clínica nem metanálise de métricas incompatíveis.*
