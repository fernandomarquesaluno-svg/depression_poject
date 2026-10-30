# Registro de verificação bibliográfica

**Data:** 30/10/2026 · **Objeto:** atualização da revisão e da tabela comparativa em Markdown. **A conferência das afirmações mantidas nesta versão e das 12 novas entradas foi executada com fontes primárias acessíveis;** isso não equivale a afirmar acesso irrestrito ao texto completo de toda publicação nem validação independente dos datasets.

## Procedimento adotado

1. Conferir autoria, título e ano em portal oficial de editora, ACL Anthology, periódico ou página oficial do desafio.
2. Identificar a unidade do corpus (post, tweet, usuário, segmento ou revisão) e distinguir dimensões de condição de saúde mental.
3. Confrontar valores experimentais com modelo, tabela, tarefa e partição quando acessíveis.
4. Evitar transcrever métricas de trabalhos sem resultado único ou de fontes não confirmadas: nesses casos, registrar **N/D**.
5. Normalizar por identificador/URL primário e conferir unicidade. **Uma linha por publicação**, sem fichas duplicadas neste arquivo.
6. Não compartilhar textos de pessoas ou informações clínicas nos arquivos do repositório.

## Expansão documentada (30/10/2026)

Foram acrescentadas **12 publicações únicas** às 16 entradas preexistentes: Benton et al. (2017); Yates et al. (2017); Husseini Orabi et al. (2018); Pirina & Çöltekin (2018); Eichstaedt et al. (2018); Merchant et al. (2019); Harrigian et al. (2020); Poświata & Perełkiewicz (2022); Pérez et al. (2025); Karpontinis & Soufleri (2025); Chung et al. (2025); Alqahtani et al. (2026).

**Fontes oficiais:** ACL Anthology, PubMed/PNAS, PubMed/PLoS, Springer Nature e Frontiers, com link direto na tabela. O controle verifica unicidade de referência/identificador, ano, natureza de rótulo, corpus e métricas transcritas. Estudos que reutilizam o mesmo benchmark permanecem separados como publicações, sem serem contabilizados como coortes independentes. Resultados não localizados de forma inequívoca são **N/D**.

**Ressalvas específicas:** no estudo de Chung et al. (2025), o PHQ-9 é triagem e o protocolo divide mensagens, não necessariamente pessoas. No artigo DP-CARE, o recall difere entre resumo e quadro por classe; por essa razão não foi transcrito como métrica confirmada, preservando-se o F1 da classe de estresse (0,7808). Não foi alegada reprodução de experimentos nem verificação de licenças de todos os corpora.

## Correções incorporadas

- **Datas de publicação:** diferenciar versão online/preprint da versão de periódico/conferência. Uma obra permanece uma única entrada.
- **Estudos distintos com mesmos autores:** artigos experimentais, análises psicolinguísticas e revisões de escopo são publicações diferentes, quando têm títulos e registros próprios.
- **Datasets reutilizados:** o uso do mesmo corpus por dois artigos não aumenta o número de coortes independentes.
- **Métricas:** F1, macro-F1, Average Precision, AUC-ROC, ERDE, acurácia, correlações e valores de p não são intercambiáveis.
- **Ground truth:** rótulos comunitários, autorrelato, anotação textual, escala e diagnóstico clínico não são equivalentes.
- **Cautela com desempenhos altos:** resultados em um corpus único não demonstram estabilidade entre regiões, línguas e plataformas.
- **Bases sensíveis:** dataset CLPsych 2015 não é mais distribuído pelos organizadores desde junho de 2026; materiais do SMHD requerem condições específicas de acesso.
- **Revisão sem duplicação:** removida a tabela secundária que reiterava estudos; todos os títulos e links bibliográficos estão em um único arquivo canônico.

## Escopo da auditoria e limitações da conferência

- **Verificado:** registro bibliográfico das 28 entradas, distinção entre preprint e volume definitivo, tipo de rótulo, principais fontes de dados e números que a tabela efetivamente mantém.
- **Não afirmado:** valores experimentais sem identificação inequívoca no artigo integral; quantidades não presentes no registro primário acessível; acesso/licença de cada corpus em ambientes privados.
- **Não executado:** reprodução dos códigos ou dos experimentos, inspeção de datasets com restrição e validação clínica adicional.
- **N/D:** dado removido deliberadamente por não poder ser apresentado como verificado ou inexistência de escore único; não se trata de zero.

### Controle de qualidade do repositório

- **Referências canônicas:** 28 (27 publicações e 1 recurso oficial de benchmark)
- **Identificadores bibliográficos duplicados:** 0
- **Linhas de estudos em tabelas secundárias:** 0
- **Dados pessoais e postagens reproduzidas:** 0

O [catálogo comparativo](tabela_comparativa_tecnica.md) contém os links de origem para auditorias futuras.


## Encerramento editorial (30/10/2026)

- Foi publicada [a versão acadêmica final com referências autor-data/ABNT](../docs/revisao_bibliografica_final_28.md).
- O catálogo canônico preserva 28 entradas sem duplicações de URLs; a revisão final remete à mesma tabela, em vez de replicar todas as linhas.
- Foram documentadas diferenças de métrica, a divergência de recall no DP-CARE e a interpretação não clínica de rótulos sociais.
- A formatação das referências é simplificada e poderá ser alinhada ao regulamento institucional quando houver norma específica.
- Esta auditoria não certifica reprodução de experimentos nem acesso a todos os dados brutos.


## Verificação de entrega acadêmica — 30/10/2026

- Materiais sincronizados localmente em quatro artefatos de entrega: revisão Word A4 (10 páginas PDF correspondente), planilha XLSX de 28 entradas e PDF comparativo A3 de 28 entradas.
- Conferência editorial do conteúdo e de parte das fontes primárias: DOI, autoria e paginação de fontes representativas, métricas atribuídas a modelos e distinção entre rótulos textuais e clínicos.
- A conferência de fontes não significa leitura integral ou reprodução de todos os 28 estudos; onde necessário, preservou-se N/D e as ressalvas metodológicas.
- Revisão e tabelas mantêm o foco em textos em português e inglês; Chung et al. (2025), em coreano, permanece explicitamente como exceção metodológica.
- Verificados 28 identificadores bibliográficos distintos. O conjunto contém 27 publicações e um recurso oficial de benchmark.

## Auditoria complementar de métricas — 30/10/2026

Na tabela comparativa foram revistos **14 registros com métricas anteriormente indicadas como N/D**. Em **12**, foram inseridos números identificados por modelo, tarefa e fonte; em **2**, foi documentado que não existe um escore único representativo (CLPsych e artigo de corpus SetembroBR). O catálogo continua com 28 referências únicas e sem linhas repetidas.

Os resultados atualizados incluem: [Benton 2017](https://aclanthology.org/E17-1015/) (AUC por condição), [Yates 2017](https://aclanthology.org/D17-1322/) (F1 por tarefa), [Cohan 2018](https://aclanthology.org/C18-1126/) (precisão do extrator, não do classificador), [Orabi 2018](https://aclanthology.org/W18-0609/) (F1 e AUC), [Pirina e Çöltekin 2018](https://aclanthology.org/W18-5903/) (F1 com distinção entre treino e teste), [Dreaddit 2019](https://aclanthology.org/D19-6213/) (F1 por modelo), [Merchant 2019](https://doi.org/10.1371/journal.pone.0215476) (AUC por condição), [Harrigian 2020](https://aclanthology.org/2020.findings-emnlp.337/) (variação de F1), [DEPTWEET 2023](https://www.sciencedirect.com/science/article/pii/S0747563222003235) (AUC por classe de DistilBERT), [MentaLLaMA 2024](https://arxiv.org/abs/2309.13567) (F1 em Dreaddit), [Nagamatu e Paraboni 2024](https://doi.org/10.21814/lm.16.2.440) (F1-latency), e [DepreSym 2025](https://doi.org/10.1007/s10579-025-09831-6) (métricas de recuperação).

**Ressalva:** alguns campos de volumetria continuam descritos como não consolidados, e alguns estudos não têm escore global único. Dados não confirmados não foram estimados. Esta auditoria documental não reproduz código ou experimentos.
