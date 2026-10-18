# ARNGREN — Curiosidade em modo infinito

Redesign acadêmico e não oficial do [Arngren.net](https://www.arngren.net/), com 18 produtos selecionados no catálogo original. Projeto estático em HTML, CSS e JavaScript, sem instalação de dependências.

## Abrir

Extraia o ZIP e abra **index.html** no navegador. As 18 fotografias, a identidade visual e o catálogo estão incluídos no projeto; a navegação local não depende de internet. Os links para as fontes abrem sites externos.

Opcionalmente, execute `python3 -m http.server 3000` nesta pasta e abra `http://localhost:3000`.

## O que mudou

- Ilustrações e produtos fictícios foram substituídos por uma seleção real do Arngren.
- Capa com MiP e braço robótico, categorias ilustradas e fotos coloridas sem corte por CSS.
- A linguagem visual original foi mantida: preto, branco, vermelho, tipografia forte e grade editorial.
- Foram preservados busca, filtros, ordenação, menu móvel e detalhes de produtos.
- Preços publicados no catálogo são exibidos em coroas norueguesas (NOK). Quando o valor não pôde ser associado com segurança ao item, aparece “Sob consulta”.
- Cada detalhe inclui o link do Arngren e o crédito da fotografia.

## Origem dos dados e das imagens

As páginas do Arngren foram consultadas em 18/10/2026 UTC (17/10 no início da sessão no Brasil). É uma seleção de 18 itens, não uma cópia integral do catálogo.

O servidor do Arngren recusou o download dos arquivos de imagem durante a montagem. Para manter o projeto completo, as fotografias foram obtidas de fabricantes, lojas e acervos que mostram os mesmos modelos ou linhas. Algumas fotos apresentam outras cores, versões ou conjuntos de acessórios. As fontes reais estão em **FONTES.md** e em **catalogo.json**; nenhuma dessas imagens foi gerada por IA.

As descrições em português são resumos curtos. Os valores não constituem oferta de venda e não tiveram vigência, estoque ou disponibilidade confirmados. Há divergências entre a página inicial e algumas páginas de detalhe do Arngren; foi priorizado o detalhe quando identificável. O preço do Cross Rider representa o valor inicial da linha, e os valores de Roboraptor, scooter XM-5000Li e Hornby foram extraídos da página inicial.

## Acessibilidade e apresentação

HTML semântico, link para pular ao conteúdo, texto alternativo, labels nos campos, foco visível, estados de filtro com `aria-pressed`, contador de resultados anunciado e diálogo nativo com fechamento por Escape. O layout se adapta a celular e desktop e respeita a preferência por movimento reduzido.

Estas são medidas implementadas, não uma certificação de conformidade. A execução neste ambiente permitiu verificar arquivos, integridade das 18 imagens, referências locais, sintaxe JavaScript e os resultados de busca/filtro/ordenação. Não foi possível realizar inspeção do layout em navegador neste ambiente.

## Estrutura

- `index.html`: página principal.
- `style.css`: visual, responsividade e acessibilidade.
- `script.js`: produtos e interações; funciona também via abertura direta do HTML.
- `catalogo.json`: dados e rastreabilidade das fontes, para reutilização.
- `assets/products/`: 18 fotos locais.
- `assets/brand-logo.svg`: identidade do projeto.
- `FONTES.md`: origem dos dados e das fotografias.

Ao editar produtos, atualize tanto a lista no início de `script.js` quanto `catalogo.json`. O JSON não é carregado por `fetch`, para permitir abertura direta do HTML sem servidor.

## Escopo

Protótipo visual para trabalho universitário. Não possui compras, carrinho, pagamentos, cadastro, estoque sincronizado ou envio de mensagens. A seção final leva ao catálogo original e não a um endereço fictício de contato. Marcas e fotografias pertencem aos respectivos titulares; os créditos foram mantidos para identificação das fontes.
