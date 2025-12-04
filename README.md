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
    /* --- (mantive seu CSS original, apenas acrescentei pequenos ajustes para o modal) --- */
    :root {
      --black: #000000;
      --white: #ffffff;
      --gray-50: #F6F6F8;
      --gray-100: #E5E5E5;
      --gray-500: #757575;
      --gold: #D4AF37;
      --accent: #CE001C;
      --header-height: 80px;
      --container-width: 1320px;
      --radius: 4px;
      --ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; outline: none; }
    body { font-family: 'Inter', sans-serif; background-color: var(--white); color: var(--black); line-height: 1.5; -webkit-font-smoothing: antialiased; overflow-x: hidden; }
    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--black); }
    a { text-decoration: none; color: inherit; transition: 0.3s; }
    button { cursor: pointer; border: none; background: none; font-family: inherit; }
    img { max-width: 100%; display: block; }
    ul { list-style: none; }

    .container { max-width: var(--container-width); margin: 0 auto; padding: 0 24px; }
    .section-pad { padding: 80px 0; }
    .flex-center { display: flex; align-items: center; justify-content: center; }
    .text-center { text-align: center; }
    .muted { color: var(--gray-500); font-size: 0.95rem; line-height: 1.7; }
    .uppercase { text-transform: uppercase; letter-spacing: 1px; font-weight: 600; font-size: 0.8rem; }

    .btn { padding: 14px 28px; border: 1px solid var(--black); background: var(--black); color: var(--white); font-weight: 600; font-size: 0.9rem; transition: all 0.3s var(--ease); display: inline-flex; align-items: center; gap: 8px; justify-content: center; }
    .btn:hover { background: var(--white); color: var(--black); }
    .btn-outline { background: transparent; color: var(--black); }
    .btn-outline:hover { background: var(--black); color: var(--white); }

    header { height: var(--header-height); position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid var(--gray-100); display: flex; align-items: center; }
    .nav-container { width: 100%; display: flex; justify-content: space-between; align-items: center; }
    .brand { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; letter-spacing: -0.5px; }
    .nav-menu { display: flex; gap: 32px; }
    .nav-link { font-size: 0.9rem; font-weight: 500; position: relative; }
    .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: var(--black); transition: 0.3s; }
    .nav-link:hover::after { width: 100%; }

    .nav-icons { display: flex; gap: 20px; align-items: center; }
    .icon-btn { font-size: 1.5rem; position: relative; transition: 0.2s; background: transparent; border: none; }
    .icon-btn:hover { color: var(--gold); }
    .cart-count { position: absolute; top: -5px; right: -8px; background: var(--black); color: var(--white); font-size: 10px; font-weight: bold; width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

    .hero { position: relative; height: 600px; background: var(--gray-50); display: grid; grid-template-columns: 1fr 1fr; align-items: center; overflow: hidden; }
    .hero-content { padding: 0 80px; z-index: 2; }
    .hero h1 { font-size: 3.5rem; line-height: 1.1; margin-bottom: 20px; }
    .hero p { font-size: 1.1rem; color: var(--gray-500); margin-bottom: 30px; max-width: 400px; }
    .hero-img { width: 100%; height: 100%; object-fit: cover; }
    .search-bar { display: flex; border-bottom: 1px solid var(--black); padding-bottom: 8px; max-width: 350px; margin-bottom: 30px; }
    .search-bar input { border: none; background: transparent; flex: 1; font-size: 1rem; }

    .categories-strip { padding: 30px 0; border-bottom: 1px solid var(--gray-100); overflow-x: auto; white-space: nowrap; scrollbar-width: none; }
    .categories-strip::-webkit-scrollbar { display: none; }
    .cat-pill { display: inline-block; padding: 10px 24px; margin-right: 12px; border: 1px solid var(--gray-100); border-radius: 50px; font-size: 0.9rem; font-weight: 500; transition: 0.2s; }
    .cat-pill:hover, .cat-pill.active { border-color: var(--black); background: var(--black); color: var(--white); }

    .grid-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 40px 24px; }

    .product-card { position: relative; background: var(--white); transition: transform 0.3s var(--ease); }
    .p-img-wrap { position: relative; width: 100%; padding-top: 120%; background: var(--gray-50); margin-bottom: 16px; overflow: hidden; }
    .p-img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s var(--ease); }
    .product-card:hover .p-img { transform: scale(1.05); }
    .quick-add { position: absolute; bottom: 0; left: 0; width: 100%; background: rgba(255,255,255,0.9); padding: 12px; transform: translateY(100%); transition: transform 0.3s var(--ease); text-align: center; }
    .product-card:hover .quick-add { transform: translateY(0); }
    .p-info h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
    .p-cat { font-size: 0.8rem; color: var(--gray-500); margin-bottom: 8px; text-transform: uppercase; }
    .p-price { font-weight: 600; font-size: 1rem; }
    .badge { position: absolute; top: 10px; left: 10px; background: var(--black); color: var(--white); padding: 4px 8px; font-size: 0.7rem; font-weight: 700; z-index: 10; }

    .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 200; opacity: 0; visibility: hidden; transition: 0.3s; }
    .overlay.open { opacity: 1; visibility: visible; }
    .cart-drawer { position: fixed; top: 0; right: 0; width: 400px; height: 100vh; background: var(--white); z-index: 201; transform: translateX(100%); transition: transform 0.4s var(--ease); display: flex; flex-direction: column; box-shadow: -10px 0 30px rgba(0,0,0,0.1); }
    .cart-drawer.open { transform: translateX(0); }
    .cart-header { padding: 24px; border-bottom: 1px solid var(--gray-100); display: flex; justify-content: space-between; align-items: center; }
    .cart-body { flex: 1; overflow-y: auto; padding: 24px; }
    .cart-footer { padding: 24px; border-top: 1px solid var(--gray-100); background: var(--gray-50); }
    .cart-item { display: flex; gap: 16px; margin-bottom: 24px; }
    .cart-item img { width: 80px; height: 100px; object-fit: cover; }
    .cart-info { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
    .cart-remove { color: var(--gray-500); font-size: 0.8rem; text-decoration: underline; cursor: pointer; }

    #toast { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--black); color: var(--white); padding: 12px 24px; border-radius: 4px; display: flex; align-items: center; gap: 10px; transition: transform 0.3s var(--ease); z-index: 300; }
    #toast.show { transform: translateX(-50%) translateY(0); }

    footer { background: var(--black); color: var(--white); padding: 60px 0 20px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 40px; }
    .footer-col h4 { color: var(--white); margin-bottom: 20px; font-size: 1rem; }
    .footer-col a { display: block; color: var(--gray-500); margin-bottom: 10px; font-size: 0.9rem; }
    .footer-col a:hover { color: var(--gold); }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; height: auto; padding-bottom: 40px; }
      .hero-img { height: 300px; order: -1; }
      .hero-content { padding: 24px; }
      .cart-drawer { width: 100%; }
      .nav-menu { display: none; }
    }

    /* ----- LOGIN MODAL ----- */
    .modal { position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%) scale(.95); width: 420px; background: var(--white); z-index: 400; box-shadow: 0 20px 60px rgba(0,0,0,0.25); border-radius: 8px; padding: 24px; opacity: 0; visibility: hidden; transition: 0.22s; }
    .modal.open { opacity: 1; visibility: visible; transform: translate(-50%,-50%) scale(1); }
    .modal h3 { margin-bottom: 12px; }
    .modal .field { margin-bottom: 12px; }
    .modal input { width: 100%; padding: 10px 12px; border: 1px solid var(--gray-100); border-radius: 6px; }
    .modal .actions { display:flex; gap: 10px; margin-top: 12px; }
    .small-link { font-size: 0.9rem; color: var(--gray-500); cursor: pointer; text-decoration: underline; }
    .user-badge { width: 36px; height: 36px; border-radius: 50%; background: var(--gray-100); display:flex; align-items:center; justify-content:center; font-weight:700; }
  </style>
</head>
<body>

  <header>
    <div class="container nav-container">
      <div class="brand">Aurora D'Or</div>
      <nav class="nav-menu">
        <a href="#lancamentos" class="nav-link">LANÇAMENTOS</a>
        <a href="#productGrid" class="nav-link">COLEÇÃO</a>
        <a href="#sobre" class="nav-link">NOSSA HISTÓRIA</a>
      </nav>
      <div class="nav-icons">
        <!-- Aqui o botão de usuário agora abre modal / mostra usuário -->
        <button id="userBtn" class="icon-btn" onclick="openAuthModal()">
          <i id="userIcon" class="ph ph-user"></i>
        </button>

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
    <div class="grid" id="productGrid"></div>
  </main>

  <section id="sobre" class="section-pad" style="background: var(--gray-50);">
    <div class="container">
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <div class="uppercase" style="color: var(--gold); margin-bottom: 16px;">Nossa Essência</div>
        <h2 style="font-size: 2.5rem; margin-bottom: 30px;">O Legado Aurora D'Or</h2>
        <p class="muted" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 24px;">
          A Aurora D'Or não nasceu apenas como uma marca de beleza, mas como uma resposta à busca incessante pela perfeição. Fundada nos arredores de <strong>Grasse, na França</strong> — o berço mundial da perfumaria e dos botânicos raros —, nossa jornada começou com um único propósito: unir a <strong>alquimia tradicional</strong> à <strong>dermatologia de precisão</strong>.
        </p>
        <p class="muted" style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 40px;">
          Somos curadores do extraordinário. Nossos especialistas viajam o mundo em busca de ativos biocompatíveis, do ouro coloidal 24k às orquídeas negras de cultivo sustentável. Não criamos apenas cosméticos; desenvolvemos <strong>joias fluidas</strong> que transformam rituais diários em experiências de luxo absoluto.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 30px; margin-top: 50px; text-align: left;">
          <div>
            <h4 style="margin-bottom: 10px;">Ciência & Natureza</h4>
            <p class="muted" style="font-size: 0.9rem;">Fórmulas limpas, livres de parabenos, potencializadas por biotecnologia avançada.</p>
          </div>
          <div>
            <h4 style="margin-bottom: 10px;">Origem Controlada</h4>
            <p class="muted" style="font-size: 0.9rem;">Rastreabilidade total dos ingredientes, garantindo pureza e comércio justo.</p>
          </div>
          <div>
            <h4 style="margin-bottom: 10px;">Experiência Sensorial</h4>
            <p class="muted" style="font-size: 0.9rem;">Texturas aveludadas e fragrâncias exclusivas que permanecem na pele.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

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
          <p class="muted" style="max-width: 300px;">Redefinindo o luxo com cosméticos de alta performance e consciência ambiental.</p>
        </div>
        <div class="footer-col">
          <h4>Atendimento</h4>
          <a href="#">Fale Conosco</a>
          <a href="#">Envio e Entregas</a>
          <a href="#">Trocas e Devoluções</a>
        </div>
        <div class="footer-col">
          <h4>Sobre</h4>
          <a href="#sobre">Nossa História</a>
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

  <!-- CART & OVERLAY -->
  <div class="overlay" id="overlay" onclick="closeUIElements()"></div>
  <div class="cart-drawer" id="cartDrawer">
    <div class="cart-header">
      <h3>Sua Sacola (<span id="cartCountHeader">0</span>)</h3>
      <button onclick="toggleCart()"><i class="ph ph-x" style="font-size: 1.5rem;"></i></button>
    </div>
    <div class="cart-body" id="cartBody"></div>
    <div class="cart-footer">
      <div style="display: flex; justify-content: space-between; margin-bottom: 16px; font-weight: 700; font-size: 1.1rem;">
        <span>Total</span>
        <span id="cartTotal">R$ 0,00</span>
      </div>
      <button class="btn" style="width: 100%; justify-content: space-between;" onclick="checkout()">
        Finalizar no WhatsApp <i class="ph ph-whatsapp-logo"></i>
      </button>
    </div>
  </div>

  <div id="toast"><i class="ph ph-check-circle" style="color: var(--gold)"></i> Produto adicionado à sacola</div>

  <!-- ----- AUTH MODAL ----- -->
  <div id="authModal" class="modal" aria-hidden="true">
    <h3 id="authTitle">Entrar</h3>

    <div id="authForms">
      <!-- LOGIN FORM -->
      <div id="loginForm">
        <div class="field"><input id="loginEmail" type="email" placeholder="E-mail"></div>
        <div class="field"><input id="loginPassword" type="password" placeholder="Senha"></div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button class="btn" onclick="submitLogin()">Entrar</button>
          <div style="text-align:right;">
            <div class="small-link" onclick="showRegister()">Criar conta</div>
          </div>
        </div>
        <p id="authMsg" style="color:red; margin-top:8px;"></p>
      </div>

      <!-- REGISTER FORM -->
      <div id="registerForm" style="display:none;">
        <div class="field"><input id="regName" type="text" placeholder="Nome completo"></div>
        <div class="field"><input id="regEmail" type="email" placeholder="E-mail"></div>
        <div class="field"><input id="regPassword" type="password" placeholder="Senha (mín. 6 caracteres)"></div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <button class="btn" onclick="submitRegister()">Criar Conta</button>
          <div style="text-align:right;">
            <div class="small-link" onclick="showLogin()">Já tenho conta</div>
          </div>
        </div>
        <p id="regMsg" style="color:red; margin-top:8px;"></p>
      </div>
    </div>

    <div style="margin-top:14px; text-align:right;">
      <button class="small-link" onclick="closeAuthModal()">Fechar</button>
    </div>
  </div>

  <script>
    /************ BACKEND CONFIG ************/
    // Ajuste a URL se o backend estiver rodando em outro host/porta
    const API_BASE = "http://localhost:3000";

    /************ PRODUCTS (seu array original) ************/
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

    /************ STATE ************/
    let cart = JSON.parse(localStorage.getItem('aurora_cart')) || [];
    let auth = {
      token: localStorage.getItem('aurora_token') || null,
      user: JSON.parse(localStorage.getItem('aurora_user')) || null
    };

    /************ RENDER PRODUCTS ************/
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

    /************ CART LOGIC ************/
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
      toggleCart(true); 
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
      
      const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
      countEls.forEach(el => el.textContent = totalQty);

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

    function saveCart() { localStorage.setItem('aurora_cart', JSON.stringify(cart)); }

    /************ UI HELPERS ************/
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

    function closeUIElements() {
      document.getElementById('cartDrawer').classList.remove('open');
      document.getElementById('overlay').classList.remove('open');
      closeAuthModal();
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

    /************ AUTH UI (MODAL) ************/
    const authModal = document.getElementById('authModal');
    const authTitle = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authMsg = document.getElementById('authMsg');
    const regMsg = document.getElementById('regMsg');

    function openAuthModal() {
      // Se estiver logado, mostrar menu rápido de logout
      if (auth.token && auth.user) {
        // Mostrar um simples confirm para logout (pode trocar por dropdown)
        if (confirm(`Você está logado como ${auth.user.name}. Deseja sair?`)) {
          logout();
        }
        return;
      }
      showLogin();
      authModal.classList.add('open');
      document.getElementById('overlay').classList.add('open');
    }

    function closeAuthModal() {
      authModal.classList.remove('open');
      document.getElementById('overlay').classList.remove('open');
      authMsg.innerText = ''; regMsg.innerText = '';
    }

    function showRegister() {
      authTitle.innerText = 'Criar conta';
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    }

    function showLogin() {
      authTitle.innerText = 'Entrar';
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    }

    /************ AUTH NETWORK ************/
    async function submitRegister() {
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const password = document.getElementById('regPassword').value;

      regMsg.style.color = 'red';
      if (!name || !email || password.length < 6) {
        regMsg.innerText = 'Preencha nome, e-mail e senha (mín. 6 caracteres).';
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        });
        const data = await res.json();
        if (res.ok) {
          regMsg.style.color = 'green';
          regMsg.innerText = 'Conta criada com sucesso. Fazendo login...';
          // efetuar login automático
          await submitLogin(email, password);
        } else {
          regMsg.innerText = data.error || 'Erro ao criar conta.';
        }
      } catch (err) {
        regMsg.innerText = 'Erro de rede.';
      }
    }

    async function submitLogin(prefillEmail = null, prefillPassword = null) {
      const email = prefillEmail || document.getElementById('loginEmail').value.trim();
      const password = prefillPassword || document.getElementById('loginPassword').value;

      authMsg.style.color = 'red';
      if (!email || !password) {
        authMsg.innerText = 'Preencha e-mail e senha.';
        return;
      }

      try {
        const res = await fetch(`${API_BASE}/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok && data.token) {
          auth.token = data.token;
          auth.user = { email: data.user.email, name: data.user.name };
          localStorage.setItem('aurora_token', auth.token);
          localStorage.setItem('aurora_user', JSON.stringify(auth.user));
          authMsg.style.color = 'green';
          authMsg.innerText = 'Login realizado!';
          updateUserUI();
          setTimeout(() => closeAuthModal(), 700);
        } else {
          authMsg.innerText = data.error || 'Credenciais inválidas.';
        }
      } catch (err) {
        authMsg.innerText = 'Erro de rede.';
      }
    }

    function logout() {
      auth.token = null;
      auth.user = null;
      localStorage.removeItem('aurora_token');
      localStorage.removeItem('aurora_user');
      updateUserUI();
      alert('Você saiu da conta.');
    }

    function updateUserUI() {
      const userIcon = document.getElementById('userIcon');
      const userBtn = document.getElementById('userBtn');
      if (auth.user) {
        // mostrar inicial
        const initial = (auth.user.name || auth.user.email[0] || 'U').charAt(0).toUpperCase();
        userBtn.innerHTML = `<div class="user-badge">${initial}</div>`;
      } else {
        userBtn.innerHTML = `<i id="userIcon" class="ph ph-user"></i>`;
      }
    }

    /************ CHECKOUT (requere login) ************/
    function checkout() {
      if (cart.length === 0) return alert('Sacola vazia!');
      if (!auth.token) {
        // exige login antes de checkout
        openAuthModal();
        authMsg.innerText = 'Faça login para finalizar o pedido.';
        return;
      }

      let mensagem = `Olá, Aurora D'Or! Pedido do(a) ${auth.user.name} (${auth.user.email}):\n\n`;
      let total = 0;
      cart.forEach(item => {
        let subtotal = item.price * item.qty;
        total += subtotal;
        mensagem += `▪️ ${item.qty}x ${item.name} - ${formatMoney(subtotal)}\n`;
      });
      mensagem += `\n*Total: ${formatMoney(total)}*\n\nPor favor, aguardo o link de pagamento.`;
      const textoCodificado = encodeURIComponent(mensagem);

      // Substitua pelo número oficial da empresa (FORMATO: código país + DDD + número, sem +)
      const seuNumero = "5511999999999";
      window.open(`https://wa.me/${seuNumero}?text=${textoCodificado}`, '_blank');
    }

    /************ INIT ************/
    renderProducts();
    updateCartUI();
    updateUserUI();

    // fechar modal ao ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAuthModal();
    });

    // atualizar UI do carrinho quando a página carrega
    function updateCartUI() {
      const cartBody = document.getElementById('cartBody');
      const countEls = document.querySelectorAll('#cartCount, #cartCountHeader');
      const totalEl = document.getElementById('cartTotal');
      const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
      countEls.forEach(el => el.textContent = totalQty);
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
  </script>
</body>
</html>
