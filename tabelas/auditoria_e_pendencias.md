# Auditoria e pendências de verificação bibliográfica

**Escopo:** fichas de verificação do levantamento anterior de 15 estudos, complementares à tabela comparativa consolidada de 16 referências. "Confirmado no levantamento anterior" não implica auditoria independente nesta publicação.

| Estudo | Estado de verificação | Dado transcrito | Ponto a auditar |
|---|---|---|---|
| dos Santos et al. (2024) — SetembroBR | Parcial | 46,8 milhões de tweets; 18.819 usuários | Baselines do artigo original ainda a auditar |
| Nagamatu & Paraboni (2024) | Parcial | F1-latency 0,24 / 0,23 (transcrição anterior) | Conferir Tabela 5 e antecipação temporal |
| Mendes & Caseli (2024) | Parcial | AP: 0,900 sono; 0,794 preocupação; 0,745 tristeza | Confirmar modelo por classe, AP e partições |
| Mann, Paes & Matsushima (2020) | Pendente | N/D | Conferir volume, desenho e métricas por participante |
| Coppersmith et al. (2015) — CLPsych | Parcial | 1.711 usuários (dado oficial) | Múltiplas tarefas/sistemas; corpus descontinuado em 2026 |
| Yates et al. (2017) | Pendente | F1 0,51 (transcrição anterior, não auditada) | Conferir tarefa, classe e tabela original |
| Cohan et al. (2018) — SMHD | Parcial | 20.406 casos autorreferidos; 335.952 controles | Não confundir qualidade da extração de rótulos com F1 do classificador |
| Sadeque et al. (2017) — eRisk | Pendente | F1 0,45; ERDE50 10,23% (transcrição anterior) | Rever protocolo e valores por configuração |
| Fatima et al. (2021) — DASentimental | Pendente | Correlações 0,70/0,44/0,52 (transcrição anterior) | Métrica é correlação, não acurácia |
| Wongkoblap et al. (2021) | Pendente | F1 0,92; AUC 0,90 (transcrição anterior) | Rever amostra, divisão e tabelas |
| Yang et al. (2022) — conhecimento mental | Pendente | N/D | Revisar F1 por corpus e tarefa |
| Merhbene et al. (2022) — BurnoutEnsemble | Pendente | Balanced accuracy 0,93; F1 0,43 (transcrição anterior) | Confirmar qual experimento e desbalanceamento |
| Kabir et al. (2023) — DEPTWEET | Parcial | 40.191 tweets | Auditar resultados por modelo/classe |
| AlSaad et al. (2026) | Confirmado no levantamento anterior | Macro-F1 0,957; accuracy 0,954 | Rótulos textuais não são diagnósticos |
| Kallstenius et al. (2026) | Confirmado em fonte primária | Accuracy 0,939 soft; 0,938 híbrido; 0,919 SVM | Split por postagem; sem validação clínica externa |

## Critérios para futura revisão

1. Abrir o artigo primário e registrar página, tabela, modelo e tarefa associados a cada número.
2. Diferenciar acurácia, macro-F1, AP, AUC-ROC, F1-latency, ERDE e correlação.
3. Não comparar níveis diferentes de análise (postagem, usuário, entrevista, trecho).
4. Verificar licença, acesso ao corpus e possibilidade de divulgação.
5. Nunca disponibilizar postagens de pessoas ou transcrições clínicas sensíveis sem base legal, consentimento e autorização apropriados.

**Atualização específica:** o site da CLPsych informa 1.711 usuários no dataset e o encerramento da distribuição em junho de 2026: https://www.cs.jhu.edu/~mdredze/clpsych-2015-shared-task-evaluation/.
