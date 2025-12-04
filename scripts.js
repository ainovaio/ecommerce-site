// Product Database
const products = [
    { id: 1, name: 'Wireless Headphones Pro', price: 79.99, category: 'Headphones', brand: 'Sony', image: 'images/product1.webp', description: 'Premium wireless headphones with active noise cancellation and 40-hour battery life.', delivery: '2-3 business days', includes: 'Headphones, USB-C charging cable, carrying case, user manual', features: ['Active Noise Cancellation (ANC)', '40-hour battery life', 'Bluetooth 5.0 connectivity', 'Foldable design with premium materials', 'Built-in microphone for calls'] },
    { id: 2, name: 'Gaming Mouse RGB', price: 49.99, category: 'Gaming Accessories', brand: 'Razer', image: 'images/product2.webp', description: 'High-precision gaming mouse with customizable RGB lighting and 16000 DPI.', delivery: '1-2 business days', includes: 'Mouse, USB cable, extra grips, user manual', features: ['16000 DPI optical sensor', 'Customizable RGB lighting', '8 programmable buttons', 'Ergonomic design', 'Durable mechanical switches'] },
    { id: 3, name: 'Smartphone Pro X', price: 899.99, category: 'Phones', brand: 'Samsung', image: 'images/product3.webp', description: 'Flagship smartphone with 6.7-inch AMOLED display and 108MP camera.', delivery: '2-4 business days', includes: 'Phone, USB-C cable, fast charger, SIM ejector tool, user manual', features: ['6.7-inch AMOLED display', '108MP triple camera system', '5G connectivity', '5000mAh battery', 'IP68 water resistance'] },
    { id: 4, name: 'Mechanical Keyboard', price: 129.99, category: 'Laptop Accessories', brand: 'Logitech', image: 'images/product4.webp', description: 'Premium mechanical keyboard with customizable backlighting.', delivery: '1-2 business days', includes: 'Keyboard, USB cable, keycap puller, user manual', features: ['Mechanical switches', 'RGB backlighting', 'Programmable keys', 'Detachable cable', 'Aluminum frame'] },
    { id: 5, name: 'Smart Watch Ultra', price: 299.99, category: 'Phones', brand: 'Apple', image: 'images/product5.webp', description: 'Advanced smartwatch with fitness tracking and health monitoring.', delivery: '2-3 business days', includes: 'Watch, magnetic charging cable, sport band, user manual', features: ['Always-on display', 'ECG monitoring', 'Sleep tracking', 'Water resistant', '36-hour battery'] },
    { id: 6, name: 'USB-C Hub Pro', price: 39.99, category: 'Laptop Accessories', brand: 'Logitech', image: 'images/product6.webp', description: 'Multi-port USB-C hub with 4K HDMI and fast charging.', delivery: '1-2 business days', includes: 'Hub, user manual', features: ['7-in-1 connectivity', '4K HDMI output', '100W power delivery', 'USB 3.0 ports', 'SD card reader'] },
    { id: 7, name: 'Wireless Earbuds', price: 149.99, category: 'Headphones', brand: 'Bose', image: 'images/product7.webp', description: 'True wireless earbuds with premium sound quality.', delivery: '2-3 business days', includes: 'Earbuds, charging case, 3 ear tip sizes, USB-C cable', features: ['Active noise cancellation', '6-hour battery per charge', 'Sweat and water resistant', 'Touch controls', 'Wireless charging case'] },
    { id: 8, name: 'Portable Speaker', price: 89.99, category: 'Speakers', brand: 'Sony', image: 'images/product8.webp', description: 'Waterproof Bluetooth speaker with 360-degree sound.', delivery: '1-2 business days', includes: 'Speaker, USB-C cable, carrying strap, user manual', features: ['360-degree sound', 'IP67 waterproof', '16-hour battery', 'Party connect feature', 'Built-in microphone'] },
    { id: 9, name: 'Gaming Headset', price: 99.99, category: 'Gaming Accessories', brand: 'Razer', image: 'images/product9.webp', description: '7.1 surround sound gaming headset with RGB lighting.', delivery: '1-2 business days', includes: 'Headset, USB adapter, 3.5mm cable, user manual', features: ['7.1 surround sound', 'Noise-canceling microphone', 'RGB lighting', 'Memory foam ear cushions', 'Cross-platform compatible'] },
    { id: 10, name: 'Laptop Stand', price: 34.99, category: 'Laptop Accessories', brand: 'Logitech', image: 'images/product10.webp', description: 'Adjustable aluminum laptop stand for better ergonomics.', delivery: '1-2 business days', includes: 'Stand, user manual', features: ['Adjustable height', 'Aluminum construction', 'Non-slip silicone pads', 'Foldable design', 'Supports up to 17-inch laptops'] },
    { id: 11, name: 'Wireless Charger', price: 29.99, category: 'Phones', brand: 'Samsung', image: 'images/product11.webp', description: 'Fast wireless charging pad with LED indicator.', delivery: '1-2 business days', includes: 'Charging pad, USB cable, adapter, user manual', features: ['15W fast charging', 'Universal compatibility', 'LED indicator', 'Non-slip surface', 'Overheat protection'] },
    { id: 12, name: 'Gaming Controller', price: 59.99, category: 'Gaming Accessories', brand: 'Razer', image: 'images/product12.webp', description: 'Pro gaming controller with customizable buttons.', delivery: '1-2 business days', includes: 'Controller, USB cable, user manual', features: ['Customizable buttons', 'Textured grips', 'Rechargeable battery', 'Cross-platform support', 'Hair trigger mode'] },
    { id: 13, name: 'Bluetooth Speaker Mini', price: 39.99, category: 'Speakers', brand: 'Bose', image: 'images/product13.webp', description: 'Compact Bluetooth speaker with impressive sound.', delivery: '1-2 business days', includes: 'Speaker, USB-C cable, user manual', features: ['Compact design', '12-hour battery', 'Waterproof', 'Built-in microphone', 'Voice assistant support'] },
    { id: 14, name: 'Phone Case Premium', price: 24.99, category: 'Phones', brand: 'Apple', image: 'images/product14.webp', description: 'Protective phone case with military-grade drop protection.', delivery: '1-2 business days', includes: 'Case', features: ['Military-grade protection', 'Slim profile', 'Wireless charging compatible', 'Raised edges', 'Non-slip grip'] },
    { id: 15, name: 'Webcam HD Pro', price: 79.99, category: 'Laptop Accessories', brand: 'Logitech', image: 'images/product15.webp', description: '1080p HD webcam with autofocus and stereo audio.', delivery: '2-3 business days', includes: 'Webcam, privacy cover, user manual', features: ['1080p Full HD', 'Autofocus', 'Stereo microphones', 'Wide-angle lens', 'Universal clip'] },
 
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('gzmart_cart')) || [];

function updateCartCount() {
    const cartCounts = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounts.forEach(count => count.textContent = totalItems);
}

function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity, selected: true });
    }
    
    saveCart();
    updateCartCount();
    showNotification('Added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        loadCartItems();
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) item.quantity = 1;
        if (item.quantity > 10) item.quantity = 10;
        saveCart();
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            loadCartItems();
        }
    }
}

function toggleItemSelection(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.selected = !item.selected;
        saveCart();
        if (window.location.pathname.includes('cart.html')) {
            updateCartSummary();
        }
    }
}

function saveCart() {
    localStorage.setItem('gzmart_cart', JSON.stringify(cart));
}

function showNotification(message) {
    const notification = document.querySelector('.cart-notification');
    if (notification) {
        notification.querySelector('span').textContent = message;
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    updateCartCount();
    initializePage();
});

// Initialize page-specific functionality
function initializePage() {
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        initHomePage();
    } else if (path.includes('products.html')) {
        initProductsPage();
    } else if (path.includes('product.html')) {
        initProductDetailPage();
    } else if (path.includes('cart.html')) {
        initCartPage();
    } else if (path.includes('checkout.html')) {
        initCheckoutPage();
    } else if (path.includes('contact.html')) {
        initContactPage();
    }
}

// Home Page Initialization
function initHomePage() {
    // Initialize carousels
    initBrandsCarousel();
    initProductsCarousel();
    initCategoriesCarousel();

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Subscribed successfully!');
            newsletterForm.reset();
        });
    }
}

// Carousel Animation
function initBrandsCarousel() {
    const carousel = document.querySelector('.brands-carousel');
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll('.carousel-card'));
    const cardWidth = 280 + 24; // width + gap
    let currentIndex = 0;

    // Clone cards for seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });

    const allCards = carousel.querySelectorAll('.carousel-card');

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        allCards.forEach((card, index) => {
            card.classList.remove('center');
            const centerIndex = currentIndex + 2;
            
            if (index === centerIndex) {
                card.classList.add('center');
            }
        });

        // Reset position when reaching cloned cards
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(0)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    setInterval(nextSlide, 2000);
    updateCarousel();
}

function initProductsCarousel() {
    const carousel = document.querySelector('.products-carousel');
    if (!carousel) return;

    // Load featured products
    const featuredProducts = products.slice(0, 8);
    carousel.innerHTML = featuredProducts.map(product => `
        <div class="product-card-carousel" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">${product.price.toFixed(2)}</div>
            <div class="product-buttons">
                <button class="cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="buy-btn" onclick="buyNow(${product.id})">Buy</button>
            </div>
        </div>
    `).join('');

    const cards = Array.from(carousel.querySelectorAll('.product-card-carousel'));
    const cardWidth = 280 + 24;
    let currentIndex = 0;

    // Clone cards for seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        // Re-attach event listeners to cloned buttons
        const cartBtn = clone.querySelector('.cart-btn');
        const buyBtn = clone.querySelector('.buy-btn');
        const productId = parseInt(clone.dataset.id);
        
        cartBtn.onclick = () => addToCart(productId);
        buyBtn.onclick = () => buyNow(productId);
        
        carousel.appendChild(clone);
    });

    const allCards = carousel.querySelectorAll('.product-card-carousel');

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        allCards.forEach((card, index) => {
            card.classList.remove('center');
            const centerIndex = currentIndex + 2;
            
            if (index === centerIndex) {
                card.classList.add('center');
            }
        });

        // Reset position when reaching cloned cards
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(0)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    setInterval(nextSlide, 2000);
    updateCarousel();
}

function initCategoriesCarousel() {
    const carousel = document.querySelector('.categories-carousel');
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll('.category-card'));
    const cardWidth = 280 + 24;
    let currentIndex = 0;

    // Clone cards for seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });

    const allCards = carousel.querySelectorAll('.category-card');

    function updateCarousel() {
        carousel.style.transition = 'transform 0.5s ease';
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        allCards.forEach((card, index) => {
            card.classList.remove('center');
            const centerIndex = currentIndex + 2;
            
            if (index === centerIndex) {
                card.classList.add('center');
            }
        });

        // Reset position when reaching cloned cards
        if (currentIndex >= cards.length) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(0)`;
                setTimeout(() => {
                    carousel.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }

    function nextSlide() {
        currentIndex++;
        updateCarousel();
    }

    setInterval(nextSlide, 2000);
    updateCarousel();
}

// Products Page
function initProductsPage() {
    loadProducts();
    initBannerCarousel();
    initFilters();
}

function initBannerCarousel() {
    const slides = document.querySelectorAll('.banner-slide');
    const dotsContainer = document.querySelector('.banner-dots');
    const prevBtn = document.querySelector('.banner-prev');
    const nextBtn = document.querySelector('.banner-next');
    
    if (!slides.length) return;

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('banner-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.banner-dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = n;
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto advance
    setInterval(nextSlide, 5000);
}

function initFilters() {
    // Desktop filters
    const filterCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', loadProducts);
    });

    // Mobile filters
    const filterHeaders = document.querySelectorAll('.filter-header');
    filterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('open');
        });
    });
}

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    // Get active filters
    const categoryFilters = Array.from(document.querySelectorAll('.filter-options input[value="Phones"], .filter-options input[value="Headphones"], .filter-options input[value="Speakers"], .filter-options input[value="Laptop Accessories"], .filter-options input[value="Gaming Accessories"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const brandFilters = Array.from(document.querySelectorAll('.filter-options input[value="Sony"], .filter-options input[value="Samsung"], .filter-options input[value="Apple"], .filter-options input[value="Razer"], .filter-options input[value="Logitech"], .filter-options input[value="Bose"]'))
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Filter products
    let filteredProducts = products;

    if (categoryFilters.length > 0) {
        filteredProducts = filteredProducts.filter(p => categoryFilters.includes(p.category));
    }

    if (brandFilters.length > 0) {
        filteredProducts = filteredProducts.filter(p => brandFilters.includes(p.brand));
    }

    // Render products
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="price">$${product.price.toFixed(2)}</div>
            <div class="product-buttons">
                <button class="cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                </button>
                <button class="buy-btn" onclick="event.stopPropagation(); buyNow(${product.id})">Buy</button>
            </div>
        </div>
    `).join('');
}

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function buyNow(productId) {
    addToCart(productId);
    window.location.href = 'checkout.html';
}

// Product Detail Page
function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'products.html';
        return;
    }

    // Populate product details
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productDelivery').textContent = product.delivery;
    document.getElementById('productIncludes').textContent = product.includes;

    const featuresElement = document.getElementById('productFeatures');
    featuresElement.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Image carousel
    const mainImage = document.getElementById('mainProductImage');
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src;
            thumbnails.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // Quantity controls
    const qtyInput = document.getElementById('productQuantity');
    document.querySelector('.qty-btn.minus').addEventListener('click', () => {
        if (qtyInput.value > 1) qtyInput.value--;
    });
    document.querySelector('.qty-btn.plus').addEventListener('click', () => {
        if (qtyInput.value < 10) qtyInput.value++;
    });

    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        addToCart(productId, parseInt(qtyInput.value));
    });

    // Buy now button
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        addToCart(productId, parseInt(qtyInput.value));
        window.location.href = 'checkout.html';
    });

    // Question form
    const questionForm = document.querySelector('.question-form');
    if (questionForm) {
        questionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Question submitted!');
            questionForm.reset();
        });
    }
}

// Cart Page
function initCartPage() {
    loadCartItems();
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        document.querySelector('.cart-summary').style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    emptyCart.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    document.querySelector('.cart-summary').style.display = 'block';

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-checkbox">
                <input type="checkbox" ${item.selected ? 'checked' : ''} 
                    onchange="toggleItemSelection(${item.id})">
            </div>
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <div class="price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    updateCartSummary();

    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }
}

function updateCartSummary() {
    const selectedItems = cart.filter(item => item.selected);
    const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Checkout Page
function initCheckoutPage() {
    let currentStep = 1;

    // Step navigation
    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.dataset.next);
            goToStep(nextStep);
        });
    });

    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.dataset.prev);
            goToStep(prevStep);
        });
    });

    function goToStep(step) {
        // Hide all steps
        document.querySelectorAll('.checkout-step-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show current step
        document.getElementById(`step${step}`).classList.add('active');

        // Update step indicators
        document.querySelectorAll('.step').forEach(stepEl => {
            stepEl.classList.remove('active');
        });
        document.querySelector(`.step[data-step="${step}"]`).classList.add('active');

        currentStep = step;

        // Load order summary in step 3
        if (step === 3) {
            loadCheckoutSummary();
        }
    }

    function loadCheckoutSummary() {
        const selectedItems = cart.filter(item => item.selected);
        const checkoutItems = document.getElementById('checkoutItems');
        
        checkoutItems.innerHTML = selectedItems.map(item => `
            <div class="order-item-checkout">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>Qty: ${item.quantity} × $${item.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');

        const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = 5.99;
        const tax = subtotal * 0.1;
        const total = subtotal + shipping + tax;

        document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('checkoutShipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
    }

    // Complete purchase
    const completePurchaseBtn = document.getElementById('completePurchase');
    if (completePurchaseBtn) {
        completePurchaseBtn.addEventListener('click', () => {
            const orderNumber = 'GZ' + Math.floor(Math.random() * 1000000);
            document.getElementById('orderNumber').textContent = orderNumber;
            
            // Clear cart
            cart = cart.filter(item => !item.selected);
            saveCart();
            updateCartCount();
            
            // Show success modal
            document.getElementById('successModal').classList.add('show');
        });
    }
}

// Contact Page
function initContactPage() {
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('contactSuccess');
            if (successMsg) {
                successMsg.classList.add('show');
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 3000);
            }
            contactForm.reset();
        });
    }
}

// Dark Mode Toggle (Settings)
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }
}