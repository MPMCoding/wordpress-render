// Produtos para a página de detalhes
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        description: "Tênis esportivo com tecnologia Air Max para máximo conforto",
        fullDescription: "O Nike Air Max 270 é a combinação perfeita de estilo e conforto. Com sua unidade Air Max de 270 graus, oferece amortecimento excepcional e um visual moderno. Ideal para uso casual e atividades esportivas leves.",
        price: 599.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20Nike%20Air%20Max%20270%20sneakers%2C%20white%20and%20black%20color%20scheme%2C%20sporty%20design%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Esportivo",
        features: ["Tecnologia Air Max", "Material respirável", "Sola de borracha", "Design moderno"]
    },
    {
        id: 2,
        name: "Adidas Superstar",
        description: "Classic casual sneaker com design icônico e conforto premium",
        fullDescription: "O Adidas Superstar é um ícone do streetwear mundial. Com seu design clássico de shell toe, oferece estilo atemporal e conforto superior para o dia a dia.",
        price: 499.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Adidas%20Superstar%20white%20sneakers%2C%20classic%20shell%20toe%20design%2C%20casual%20style%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Casual",
        features: ["Bico de concha icônico", "Couro premium", "Palmilha confortável", "Design atemporal"]
    },
    {
        id: 3,
        name: "Puma RS-X",
        description: "Tênis moderno com design ousado e tecnologia de amortecimento",
        fullDescription: "O Puma RS-X combina design ousado com tecnologia de amortecimento RS (Running System). Perfeito para quem busca estilo e conforto nas ruas da cidade.",
        price: 449.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Puma%20RS-X%20modern%20sneakers%2C%20bold%20design%2C%20colorful%20accents%2C%20sporty%20style%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Streetwear",
        features: ["Tecnologia RS", "Design ousado", "Amortecimento premium", "Estilo urbano"]
    },
    {
        id: 4,
        name: "Converse Chuck Taylor",
        description: "O clássico americano, versátil e atemporal para qualquer ocasião",
        fullDescription: "O Converse Chuck Taylor All Star é o sneaker mais icônico de todos os tempos. Versátil, confortável e perfeito para qualquer estilo.",
        price: 299.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Converse%20Chuck%20Taylor%20white%20high%20top%20sneakers%2C%20classic%20american%20style%2C%20canvas%20material%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Casual",
        features: ["Tecido canvas", "Solado de borracha", "Design unissex", "Atemporal"]
    },
    {
        id: 5,
        name: "Vans Old Skool",
        description: "Skate shoe clássico com a assinatura da lateral em onda",
        fullDescription: "O Vans Old Skool é o primeiro sneaker a carregar a icônica stripe lateral da Vans. Perfeito para skate e estilo casual urbano.",
        price: 399.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Vans%20Old%20Skool%20black%20and%20white%20sneakers%2C%20classic%20skate%20shoe%20design%2C%20side%20stripe%20detail%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Skate",
        features: ["Stripe lateral icônica", "Palmilha UltraCush", "Sola waffle", "Durável"]
    },
    {
        id: 6,
        name: "New Balance 574",
        description: "Comfort running shoe com tecnologia ENCAP e estilo retrô",
        fullDescription: "O New Balance 574 combina estilo retrô com tecnologia moderna. Com sua entressola ENCAP, oferece suporte e estabilidade excepcionais.",
        price: 529.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=New%20Balance%20574%20gray%20and%20navy%20sneakers%2C%20retro%20running%20shoe%20design%2C%20ENCAP%20technology%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Running",
        features: ["Tecnologia ENCAP", "Estilo retrô", "Suporte excepcional", "Durabilidade"]
    }
];

// Carrinho de compras (mesmo do script.js)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Inicialização da página de detalhes
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetails();
    updateCartCount();
    setupEventListeners();
});

// Carregar detalhes do produto
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'index.html';
        return;
    }
    
    renderProductDetail(product);
    renderRelatedProducts(product.id, product.category);
}

// Renderizar detalhes do produto
function renderProductDetail(product) {
    const productDetail = document.getElementById('productDetail');
    
    productDetail.innerHTML = `
        <div class="product-images">
            <img src="${product.image}" alt="${product.name}" class="main-product-image">
        </div>
        <div class="product-info-detail">
            <h1 class="product-title">${product.name}</h1>
            <p class="product-category">${product.category}</p>
            <div class="product-price-detail">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
            <p class="product-full-description">${product.fullDescription}</p>
            
            <div class="product-features">
                <h3>Características</h3>
                <ul>
                    ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                </button>
                <button class="buy-now-btn" onclick="buyNow(${product.id})">
                    Comprar Agora
                </button>
            </div>
            
            <div class="product-meta">
                <p><i class="fas fa-shipping-fast"></i> Frete grátis para compras acima de R$ 200</p>
                <p><i class="fas fa-exchange-alt"></i> Troca grátis em até 30 dias</p>
                <p><i class="fas fa-shield-alt"></i> Produto original com garantia</p>
            </div>
        </div>
    `;
}

// Renderizar produtos relacionados
function renderRelatedProducts(currentProductId, category) {
    const relatedProducts = products.filter(p => p.id !== currentProductId && p.category === category).slice(0, 3);
    const relatedProductsGrid = document.getElementById('relatedProducts');
    
    if (relatedProducts.length === 0) {
        // Se não houver produtos na mesma categoria, mostrar produtos aleatórios
        const randomProducts = products.filter(p => p.id !== currentProductId).sort(() => 0.5 - Math.random()).slice(0, 3);
        renderRelatedProductsGrid(randomProducts, relatedProductsGrid);
    } else {
        renderRelatedProductsGrid(relatedProducts, relatedProductsGrid);
    }
}

function renderRelatedProductsGrid(products, container) {
    container.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar
                </button>
                <button class="view-details-btn" onclick="viewProduct(${product.id})">
                    Ver Detalhes
                </button>
            </div>
        `;
        container.appendChild(productCard);
    });
}

// Funções do carrinho (reutilizadas do script.js)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
            updateCartCount();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
    
    if (cartSidebar.classList.contains('open')) {
        renderCart();
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Carrinho vazio</div>';
        cartTotal.textContent = '0,00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remover</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'warning');
        return;
    }
    
    showNotification('Redirecionando para pagamento...', 'info');
    
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();
        toggleCart();
        showNotification('Compra realizada com sucesso!', 'success');
    }, 2000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? 'var(--success)' : type === 'warning' ? 'var(--warning)' : 'var(--primary-color)'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function buyNow(productId) {
    addToCart(productId);
    setTimeout(() => {
        checkout();
    }, 1000);
}

function setupEventListeners() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
    
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
}