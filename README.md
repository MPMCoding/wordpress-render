# E-commerce de Sapatos - Sneaker Store

Um e-commerce completo e responsivo de sapatos, criado com HTML, CSS e JavaScript puro. Perfeito para hospedar gratuitamente no Render como site estático.

## 🚀 Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Carrinho de Compras**: Sistema completo de carrinho com localStorage
- **Páginas de Produtos**: Página inicial e página de detalhes individuais
- **Filtros por Categoria**: Organização por tipos de sneakers
- **Notificações Interativas**: Feedback visual para ações do usuário
- **Animações Suaves**: Transições e efeitos visuais modernos
- **SEO Otimizado**: Estrutura semântica e metatags apropriadas

## 📱 Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e Grid/Flexbox)
- JavaScript ES6+
- Font Awesome (ícones)
- Google Fonts (tipografia)
- Imagens geradas por IA

## 🛍️ Produtos Incluídos

1. **Nike Air Max 270** - R$ 599,90
2. **Adidas Superstar** - R$ 499,90
3. **Puma RS-X** - R$ 449,90
4. **Converse Chuck Taylor** - R$ 299,90
5. **Vans Old Skool** - R$ 399,90
6. **New Balance 574** - R$ 529,90

## 🚀 Deploy no Render

### Opção 1: Static Site (Gratuito)

1. Faça fork deste repositório
2. Acesse [render.com](https://render.com)
3. Clique em "New" → "Static Site"
4. Conecte seu repositório do GitHub
5. Configure:
   - **Name**: sneaker-store
   - **Branch**: main
   - **Build Command**: (deixe vazio)
   - **Publish Directory**: .
6. Clique em "Create Static Site"

### Opção 2: Upload Direto

1. Faça download de todos os arquivos
2. Acesse [render.com](https://render.com)
3. Clique em "New" → "Static Site"
4. Faça upload do arquivo ZIP com todos os arquivos
5. Configure o nome e deploy

## 📁 Estrutura de Arquivos

```
├── index.html          # Página principal
├── product.html        # Página de detalhes do produto
├── styles.css          # Estilos principais
├── script.js           # Funcionalidades principais
├── product-detail.js   # Funcionalidades da página de detalhes
├── render.yaml         # Configuração do Render
├── README.md           # Este arquivo
└── images/             # Imagens dos produtos (via API)
```

## 🎨 Personalização

### Cores Principais
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... */
}
```

### Produtos
Edite o array `products` em `script.js` e `product-detail.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Seu Produto",
        price: 99.90,
        // ...
    }
];
```

### Imagens
As imagens são geradas automaticamente via API. Para alterar, edite as URLs nas propriedades `image`.

## 📞 Suporte

Para dúvidas e suporte, acesse a página de contato no site.

---

**Desenvolvido com ❤️ para a comunidade de desenvolvimento web**