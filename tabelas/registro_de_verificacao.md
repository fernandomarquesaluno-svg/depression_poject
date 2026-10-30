# Registro de verificação bibliográfica

**Data:** 30/10/2026 · **Objeto:** atualização da revisão e da tabela comparativa em Markdown. **A auditoria das afirmações publicadas nesta versão está encerrada;** isso não equivale a afirmar acesso irrestrito ao texto completo de toda publicação nem validação independente dos datasets.

## Procedimento adotado

1. Conferir autoria, título e ano em portal oficial de editora, ACL Anthology, periódico ou página oficial do desafio.
2. Identificar a unidade do corpus (post, tweet, usuário, segmento ou revisão) e distinguir dimensões de condição de saúde mental.
3. Confrontar valores experimentais com modelo, tabela, tarefa e partição quando acessíveis.
4. Evitar transcrever métricas de trabalhos sem resultado único ou de fontes não confirmadas: nesses casos, registrar **N/D**.
5. Normalizar por identificador/URL primário e conferir unicidade. **Uma linha por publicação**, sem fichas duplicadas neste arquivo.
6. Não compartilhar textos de pessoas ou informações clínicas nos arquivos do repositório.

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

- **Verificado:** registro bibliográfico das 16 entradas, distinção entre preprint e volume definitivo, tipo de rótulo, principais fontes de dados e números que a tabela efetivamente mantém.
- **Não afirmado:** valores experimentais sem identificação inequívoca no artigo integral; quantidades não presentes no registro primário acessível; acesso/licença de cada corpus em ambientes privados.
- **Não executado:** reprodução dos códigos ou dos experimentos, inspeção de datasets com restrição e validação clínica adicional.
- **N/D:** dado removido deliberadamente por não poder ser apresentado como verificado ou inexistência de escore único; não se trata de zero.

### Controle de qualidade do repositório

- **Referências canônicas:** 16
- **Identificadores bibliográficos duplicados:** 0
- **Linhas de estudos em tabelas secundárias:** 0
- **Dados pessoais e postagens reproduzidas:** 0

O [catálogo comparativo](tabela_comparativa_tecnica.md) contém os links de origem para auditorias futuras.
