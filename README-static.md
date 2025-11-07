# WordPress como site estático no Render (gratuito)

Este fluxo publica o WordPress como arquivos estáticos (sem PHP e sem banco),
permitindo usar o plano gratuito de **Static Site** no Render.

Limitações: sem login/admin online, sem comentários nativos, sem busca nativa.
Para formulários/comentários, use serviços externos (Netlify Forms, Formspree,
Staticman, Disqus, etc.).

## Passo a passo

1. Suba o WordPress localmente com Docker:
   - Instale Docker Desktop.
   - No diretório do projeto: `docker-compose up -d`
   - Acesse `http://localhost:80` e finalize a instalação.

2. Construa o site (páginas, posts, temas e plugins).

3. Instale um plugin de exportação estática no WordPress:
   - Recomendações: "Simply Static" ou "WP2Static".
   - Configure para exportar URLs absolutas do seu domínio (ou relativas).

4. Exporte o site para a pasta `static/` na raiz do projeto.

5. Faça commit da pasta `static/` no repositório Git.

6. No Render, crie um **Static Site**:
   - Se usar este blueprint, renomeie `render.static.yaml` para `render.yaml`.
   - Ou crie manualmente pela UI:
     - Build Command: vazio
     - Publish Directory: `static`

7. Após publicar, valide links, imagens e assets.

## Dicas

- Para busca/comentários, adicione serviços externos via JavaScript.
- Para formulários, use endpoints externos (Formspree, Getform, Netlify Forms).
- Reexporte sempre que mudar conteúdo; o site é uma fotografia do WordPress.

