<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Aurora D'Or | Beauty Luxury Store</title>
  <meta name="description" content="Cosméticos de alta performance com curadoria de luxo." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  
  <script src="https://unpkg.com/@phosphor-icons/web"></script>

  <style>
    /* --- 1. DESIGN SYSTEM (VIBE SEPHORA) --- */
    :root {
      /* Palette */
      --black: #000000;
      --white: #ffffff;
      --gray-50: #F6F6F8; /* Fundo secundário Sephora */
      --gray-100: #E5E5E5;
      --gray-500: #757575;
      
      /* Branding */
      --gold: #D4AF37; /* Mantendo sua identidade D'Or */
      --accent: #CE001C; /* Vermelho Sephora para ofertas/erro (opcional) */
      
      /* Dimensões */
      --header-height: 80px;
      --container-width: 1320px;
      --radius: 4px; /* Luxo usa bordas menos arredondadas que Tech */
      
      /* Transitions */
      --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    /* Reset & Base */
    * { box-sizing: border-box; margin: 0; padding: 0; outline: none; }
    
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--white);
      color: var(--black);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--black); }
    a { text-decoration: none; color: inherit; transition: 0.3s; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }
    img { max-width: 100%; display: block; }
    ul { list-style: none; }

    /* --- 2. LAYOUT & UTILS --- */
    .container {
      max-width: var(--container-width);
      margin: 0 auto;
      padding: 0 24px;
    }
    .section-pad { padding: 60px 0; }
    .flex-center { display: flex; align-items: center; justify-content: center; }
    .text-center { text-align: center; }
    .muted { color: var(--gray-500); font-size: 0.9rem; }
    .uppercase { text-transform: uppercase; letter-spacing: 1px; font-weight: 600; font-size: 0.8rem; }

    /* Buttons */
    .btn {
      padding: 14px 28px;
      border: 1px solid var(--black);
      background: var(--black);
      color: var(--white);
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.3s var(--ease);
      display: inline-flex;
      align-items: center;
      gap: 8px;
      justify-content: center;
    }
    .btn:hover {
      background: var(--white);
      color: var(--black);
    }
    .btn-outline {
      background: transparent;
      color: var(--black);
    }
    .btn-outline:hover {
      background: var(--black);
      color: var(--white);
    }

    /* --- 3. HEADER (STICKY & CLEAN) --- */
    header {
      height: var(--header-height);
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--gray-100);
      display: flex;
      align-items: center;
    }
    .nav-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .nav-menu { display: flex; gap: 32px; }
    .nav-link { font-size: 0.9rem; font-weight: 500; position: relative; }
    .nav-link::after {
      content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--black); transition: 0.3s;
    }
    .nav-link:hover::after { width: 100%; }

    .nav-icons { display: flex; gap: 20px; align-items: center; }
    .icon-btn { font-size: 1.5rem; position: relative; transition: 0.2s; }
    .icon-btn:hover { color: var(--gold); }
    .cart-count {
      position: absolute; top: -5px; right: -8px;
      background: var(--black); color: var(--white);
      font-size: 10px; font-weight: bold;
      width: 18px; height: 18px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
    }

    /* --- 4. HERO SECTION --- */
    .hero {
      position: relative;
      height: 600px;
      background: var(--gray-50);
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      overflow: hidden;
    }
    .hero-content { padding: 0 80px; z-index: 2; }
    .hero h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 20px; }
    .hero p { font-size: 1.1rem; color: var(--gray-500); margin-bottom: 30px; max-width: 400px; }
    .hero-img { width: 100%; height: 100%; object-fit: cover; }
    
    /* Search Bar in Hero */
    .search-bar {
      display: flex;
      border-bottom: 1px solid var(--black);
      padding-bottom: 8px;
      max-width: 350px;
      margin-bottom: 30px;
    }
    .search-bar input {
      border: none; background: transparent; flex: 1; font-size: 1rem;
    }

    /* --- 5. CATEGORIES STRIP --- */
    .categories-strip {
      padding: 30px 0;
      border-bottom: 1px solid var(--gray-100);
      overflow-x: auto;
      white-space: nowrap;
      scrollbar-width: none; /* Firefox */
    }
    .categories-strip::-webkit-scrollbar { display: none; }
    .cat-pill {
      display: inline-block;
      padding: 10px 24px;
      margin-right: 12px;
      border: 1px solid var(--gray-100);
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
      transition: 0.2s;
    }
    .cat-pill:hover, .cat-pill.active {
      border-color: var(--black);
      background: var(--black);
      color: var(--white);
    }

    /* --- 6. PRODUCT GRID (SEPHORA STYLE) --- */
    .grid-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 40px 24px;
    }
    
    /* Card Design */
    .product-card {
      position: relative;
      background: var(--white);
      transition: transform 0.3s var(--ease);
      group:hover;
    }
    .p-img-wrap {
      position: relative;
      width: 100%;
      padding-top: 120%; /* Aspect Ratio 4:5 vertical */
      background: var(--gray-50);
      margin-bottom: 16px;
      overflow: hidden;
    }
    .p-img {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover; transition: transform 0.5s var(--ease);
    }
    .product-card:hover .p-img { transform: scale(1.05); }
    
    /* Quick Add Overlay */
    .quick-add {
      position: absolute;
      bottom: 0; left: 0; width: 100%;
      background: rgba(255,255,255,0.9);
      padding: 12px;
      transform: translateY(100%);
      transition: transform 0.3s var(--ease);
      text-align: center;
    }
    .product-card:hover .quick-add { transform: translateY(0); }
    
    .p-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
    .p-cat { font-size: 0.8rem; color: var(--gray-500); margin-bottom: 8px; text-transform: uppercase; }
    .p-price { font-weight: 600; font-size: 1rem; }
    .badge {
      position: absolute; top: 10px; left: 10px;
      background: var(--black); color: var(--white);
      padding: 4px 8px; font-size: 0.7rem; font-weight: 700;
      z-index: 10;
    }

    /* --- 7. CART DRAWER (SLIDE OUT) --- */
    .overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.5);
      z-index: 200; opacity: 0; visibility: hidden; transition: 0.3s;
    }
    .overlay.open { opacity: 1; visibility: visible; }
    
    .cart-drawer {
      position: fixed; top: 0; right: 0;
      width: 400px; height: 100vh;
      background: var(--white);
      z-index: 201;
      transform: translateX(100%);
      transition: transform 0.4s var(--ease);
      display: flex; flex-direction: column;
      box-shadow: -10px 0 30px rgba(0,0,0,0.1);
    }
    .cart-drawer.open { transform: translateX(0); }
    
    .cart-header { padding: 24px; border-bottom: 1px solid var(--gray-100); display: flex; justify-content: space-between; align-items: center; }
    .cart-body { flex: 1; overflow-y: auto; padding: 24px; }
    .cart-footer { padding: 24px; border-top: 1px solid var(--gray-100); background: var(--gray-50); }
    
    .cart-item { display: flex; gap: 16px; margin-bottom: 24px; }
    .cart-item img { width: 80px; height: 100px; object-fit: cover; }
    .cart-info { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .cart-remove { color: var(--gray-500); font-size: 0.8rem; text-decoration: underline; cursor: pointer; }

    /* --- 8. TOAST NOTIFICATION --- */
    #toast {
      position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px);
      background: var(--black); color: var(--white);
      padding: 12px 24px; border-radius: 4px;
      display: flex; align-items: center; gap: 10px;
      transition: transform 0.3s var(--ease); z-index: 300;
    }
    #toast.show { transform: translateX(-50%) translateY(0); }

    /* Footer */
    footer { background: var(--black); color: var(--white); padding: 60px 0 20px; margin-top: 80px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 40px; }
    .footer-col h4 { color: var(--white); margin-bottom: 20px; font-size: 1rem; }
    .footer-col a { display: block; color: var(--gray-500); margin-bottom: 10px; font-size: 0.9rem; }
    .footer-col a:hover { color: var(--gold); }

    /* Responsive */
    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; height: auto; padding-bottom: 40px; }
      .hero-img { height: 300px; order: -1; }
      .hero-content { padding: 24px; }
      .cart-drawer { width: 100%; }
      .nav-menu { display: none; } /* Mobile menu implementation needed for full responsive */
    }
  </style>
</head>
<body>

  <header>
    <div class="container nav-container">
      <div class="brand">Aurora D'Or</div>
      <nav class="nav-menu">
        <a href="#lancamentos" class="nav-link">LANÇAMENTOS</a>
        <a href="#mais-vendidos" class="nav-link">MAIS VENDIDOS</a>
        <a href="#maquiagem" class="nav-link">MAQUIAGEM</a>
        <a href="#perfumes" class="nav-link">PERFUMES</a>
        <a href="#skincare" class="nav-link">SKINCARE</a>
      </nav>
      <div class="nav-icons">
        <button class="icon-btn"><i class="ph ph-user"></i></button>
        <button class="icon-btn" onclick="toggleCart()">
          <i class="ph ph-handbag"></i>
          <span class="cart-count" id="cartCount">0</span>
        </button>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content">
      <div class="uppercase" style="margin-bottom: 10px; color: var(--gold)">Nova Coleção</div>
      <h1>Ilumine sua <br>Essência.</h1>
      <p>Descubra a nova linha Golden Hour. Texturas luxuosas e acabamentos radiantes para quem exige perfeição.</p>
      
      <div class="search-bar">
        <i class="ph ph-magnifying-glass" style="font-size: 1.2rem; color: var(--gray-500); margin-right: 10px;"></i>
        <input type="text" id="searchInput" placeholder="Buscar por produto, marca..." onkeyup="filterProducts()">
      </div>
      
      <button class="btn" onclick="document.getElementById('grid-anchor').scrollIntoView({behavior:'smooth'})">
        Comprar Agora <i class="ph ph-arrow-right"></i>
      </button>
    </div>
    <img src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop" class="hero-img" alt="Modelo Aurora">
  </section>

  <div class="container">
    <div class="categories-strip">
      <button class="cat-pill active" onclick="filterCat('all', this)">Todos</button>
      <button class="cat-pill" onclick="filterCat('Maquiagem', this)">Maquiagem</button>
      <button class="cat-pill" onclick="filterCat('Perfume', this)">Perfumes</button>
      <button class="cat-pill" onclick="filterCat('Skincare', this)">Skincare</button>
      <button class="cat-pill" onclick="filterCat('Cabelo', this)">Cabelos</button>
    </div>
  </div>

  <main class="container section-pad" id="grid-anchor">
    <div class="grid-header">
      <div>
        <h2>Escolhidos para você</h2>
        <p class="muted">Os favoritos do mês.</p>
      </div>
    </div>
    <div class="grid" id="productGrid">
      </div>
  </main>

  <section style="background: var(--black); color: var(--white); padding: 80px 0; text-align: center;">
    <div class="container">
      <h2 style="color: var(--white); font-size: 2.5rem; margin-bottom: 16px;">Beauty Club Aurora</h2>
      <p style="color: var(--gray-500); max-width: 600px; margin: 0 auto 30px;">
        Cadastre-se para acumular pontos em todas as compras e troque por produtos full-size.
      </p>
      <button class="btn" style="background: var(--white); color: var(--black);">Inscreva-se Grátis</button>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3 style="color: var(--white); margin-bottom: 20px;">Aurora D'Or</h3>
          <p class="muted" style="max-width: 300px;">
            Redefinindo o luxo com cosméticos de alta performance e consciência ambiental.
          </p>
        </div>
        <div class="footer-col">
          <h4>Atendimento</h4>
          <a href="#">Fale Conosco</a>
          <a href="#">Envio e Entregas</a>
          <a href="#">Trocas e Devoluções</a>
        </div>
        <div class="footer-col">
          <h4>Sobre</h4>
          <a href="#">Nossa História</a>
          <a href="#">Sustentabilidade</a>
          <a href="#">Carreiras</a>
        </div>
        <div class="footer-col">
          <h4>Social</h4>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
      <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px; display: flex; justify-content: space-between; align-items: center;">
        <span class="muted">© 2025 Aurora D'Or. Todos os direitos reservados.</span>
        <div style="display: flex; gap: 10px; color: var(--white); font-size: 1.5rem;">
          <i class="ph ph-credit-card"></i>
          <i class="ph ph-paypal-logo"></i>
        </div>
      </div>
    </div>
  </footer>

  <div class="overlay" id="overlay" onclick="toggleCart()"></div>
  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-header">
      <h3>Sua Sacola (<span id="cartCountHeader">0</span>)</h3>
      <button onclick="toggleCart()"><i class="ph ph-x" style="font-size: 1.5rem;"></i></button>
    </div>
    <div class="cart-body" id="cartBody">
      </div>
    <div class="cart-footer">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-weight: 700; font-size: 1.1rem;">
        <span>Total</span>
        <span id="cartTotal">R$ 0,00</span>
      </div>
      <button class="btn" style="width: 100%; justify-content: space-between;" onclick="checkout()">
        Finalizar Compra <i class="ph ph-arrow-right"></i>
      </button>
    </div>
  </div>

  <div id="toast"><i class="ph ph-check-circle" style="color: var(--gold)"></i> Produto adicionado à sacola</div>

  <script>
    // --- DATA ---
    const products = [
      { id: 1, name: "Sérum Noturno Repair", cat: "Skincare", price: 189.90, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop", badge: "Best Seller" },
      { id: 2, name: "Eau de Parfum Gold", cat: "Perfume", price: 299.90, img: "https://images.unsplash.com/photo-1594035910387-fea477942698?q=80&w=600&auto=format&fit=crop", badge: "Novo" },
      { id: 3, name: "Batom Matte Velvet", cat: "Maquiagem", price: 89.90, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=600&auto=format&fit=crop", badge: null },
      { id: 4, name: "Máscara Capilar Silk", cat: "Cabelo", price: 129.90, img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=600&auto=format&fit=crop", badge: null },
      { id: 5, name: "Paleta Golden Hour", cat: "Maquiagem", price: 210.00, img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop", badge: "Edição Ltda" },
      { id: 6, name: "Óleo Corporal Radiance", cat: "Skincare", price: 145.50, img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=600&auto=format&fit=crop", badge: null },
      { id: 7, name: "Base Líquida SkinFit", cat: "Maquiagem", price: 159.90, img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?q=80&w=600&auto=format&fit=crop", badge: null },
      { id: 8, name: "Kit Pincéis Pro", cat: "Acessórios", price: 199.90, img: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=600&auto=format&fit=crop", badge: null }
    ];

    // --- STATE & STORAGE ---
    let cart = JSON.parse(localStorage.getItem('aurora_cart')) || [];

    // --- RENDER FUNCTIONS ---
    const grid = document.getElementById('productGrid');
    
    function renderProducts(filter = 'all') {
      grid.innerHTML = '';
      const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.cat === filter || p.name.toLowerCase().includes(filter.toLowerCase()));

      if(filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum produto encontrado.</div>';
        return;
      }

      filtered.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-card';
        div.innerHTML = `
          <div class="p-img-wrap">
            ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
            <img src="${p.img}" alt="${p.name}" class="p-img">
            <button class="btn quick-add" onclick="addToCart(${p.id})">Adicionar à Sacola - ${formatMoney(p.price)}</button>
          </div>
          <div class="p-info">
            <div class="p-cat">${p.cat}</div>
            <h3>${p.name}</h3>
            <div class="p-price">${formatMoney(p.price)}</div>
          </div>
        `;
        grid.appendChild(div);
      });
    }

    // --- CART LOGIC ---
    function addToCart(id) {
      const product = products.find(p => p.id === id);
      const existing = cart.find(item => item.id === id);
      
      if (existing) {
        existing.qty++;
      } else {
        cart.push({ ...product, qty: 1 });
      }
      
      saveCart();
      updateCartUI();
      showToast();
      toggleCart(true); // Open cart automatically like premium sites
    }

    function removeFromCart(id) {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      updateCartUI();
    }

    function updateCartUI() {
      const cartBody = document.getElementById('cartBody');
      const countEls = document.querySelectorAll('#cartCount, #cartCountHeader');
      const totalEl = document.getElementById('cartTotal');
      
      // Update Counts
      const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
      countEls.forEach(el => el.textContent = totalQty);

      // Render Items
      cartBody.innerHTML = '';
      let totalPrice = 0;

      if(cart.length === 0) {
        cartBody.innerHTML = '<div class="text-center muted" style="margin-top:40px">Sua sacola está vazia.<br>Vamos às compras?</div>';
      } else {
        cart.forEach(item => {
          totalPrice += item.price * item.qty;
          cartBody.innerHTML += `
            <div class="cart-item">
              <img src="${item.img}" alt="${item.name}">
              <div class="cart-info">
                <div>
                  <div style="font-weight:700; font-size: 0.9rem">${item.name}</div>
                  <div class="muted">Qtd: ${item.qty}</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center">
                  <span style="font-weight:600">${formatMoney(item.price * item.qty)}</span>
                  <span class="cart-remove" onclick="removeFromCart(${item.id})">Remover</span>
                </div>
              </div>
            </div>
          `;
        });
      }
      
      totalEl.textContent = formatMoney(totalPrice);
    }

    function saveCart() {
      localStorage.setItem('aurora_cart', JSON.stringify(cart));
    }

    // --- UX HELPERS ---
    function toggleCart(forceOpen = null) {
      const drawer = document.getElementById('cartDrawer');
      const overlay = document.getElementById('overlay');
      const isOpen = drawer.classList.contains('open');
      
      if (forceOpen === true || (forceOpen === null && !isOpen)) {
        drawer.classList.add('open');
        overlay.classList.add('open');
      } else {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
      }
    }

    function showToast() {
      const t = document.getElementById('toast');
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3000);
    }

    function formatMoney(value) {
      return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function filterCat(cat, btn) {
      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(cat);
    }

    function filterProducts() {
      const val = document.getElementById('searchInput').value;
      renderProducts(val);
    }
    
    function checkout() {
      if(cart.length === 0) return alert('Sacola vazia!');
      alert('Redirecionando para Checkout Seguro...');
    }

    // --- INIT ---
    renderProducts();
    updateCartUI();
  </script>
</body>
</html>

