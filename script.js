// Dados dos produtos
const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        description: "Tênis esportivo com tecnologia Air Max para máximo conforto",
        price: 599.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20Nike%20Air%20Max%20270%20sneakers%2C%20white%20and%20black%20color%20scheme%2C%20sporty%20design%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Esportivo"
    },
    {
        id: 2,
        name: "Adidas Superstar",
        description: "Classic casual sneaker com design icônico e conforto premium",
        price: 499.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Adidas%20Superstar%20white%20sneakers%2C%20classic%20shell%20toe%20design%2C%20casual%20style%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Casual"
    },
    {
        id: 3,
        name: "Puma RS-X",
        description: "Tênis moderno com design ousado e tecnologia de amortecimento",
        price: 449.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Puma%20RS-X%20modern%20sneakers%2C%20bold%20design%2C%20colorful%20accents%2C%20sporty%20style%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Streetwear"
    },
    {
        id: 4,
        name: "Converse Chuck Taylor",
        description: "O clássico americano, versátil e atemporal para qualquer ocasião",
        price: 299.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Converse%20Chuck%20Taylor%20white%20high%20top%20sneakers%2C%20classic%20american%20style%2C%20canvas%20material%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Casual"
    },
    {
        id: 5,
        name: "Vans Old Skool",
        description: "Skate shoe clássico com a assinatura da lateral em onda",
        price: 399.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Vans%20Old%20Skool%20black%20and%20white%20sneakers%2C%20classic%20skate%20shoe%20design%2C%20side%20stripe%20detail%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Skate"
    },
    {
        id: 6,
        name: "New Balance 574",
        description: "Comfort running shoe com tecnologia ENCAP e estilo retrô",
        price: 529.90,
        image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=New%20Balance%20574%20gray%20and%20navy%20sneakers%2C%20retro%20running%20shoe%20design%2C%20ENCAP%20technology%2C%20clean%20background%2C%20professional%20product%20photography&image_size=square",
        category: "Running"
    }
];

// Carrinho de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartCount();
    setupEventListeners();
});

// Renderizar produtos
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onclick="viewProduct(${product.id})" style="cursor: pointer;">
            <div class="product-info">
                <h3 class="product-name" onclick="viewProduct(${product.id})" style="cursor: pointer;">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Adicionar ao Carrinho
                </button>
                <button class="view-details-btn" onclick="viewProduct(${product.id})">
                    Ver Detalhes
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Adicionar ao carrinho
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

// Remover do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

// Atualizar quantidade
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

// Salvar carrinho no localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Atualizar contador do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
}

// Alternar carrinho
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
    
    if (cartSidebar.classList.contains('open')) {
        renderCart();
    }
}

// Renderizar carrinho
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

// Finalizar compra
function checkout() {
    if (cart.length === 0) {
        showNotification('Carrinho vazio!', 'warning');
        return;
    }
    
    // Simular processo de checkout
    showNotification('Redirecionando para pagamento...', 'info');
    
    // Limpar carrinho após 2 segundos (simulação)
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartCount();
        renderCart();
        toggleCart();
        showNotification('Compra realizada com sucesso!', 'success');
    }, 2000);
}

// Notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos para notificação
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
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Configurar event listeners
function setupEventListeners() {
    // Fechar carrinho com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar.classList.contains('open')) {
                toggleCart();
            }
        }
    });
    
    // Botão voltar ao topo
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

// Funções auxiliares
function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}

function viewProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Navegação suave para links do menu
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar classe de animação ao scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.product-card');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Inicializar animações
animateOnScroll();