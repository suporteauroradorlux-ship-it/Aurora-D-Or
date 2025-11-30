<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Aurora D'Or | Haute Cosmétique</title>
  <meta name="description" content="Aurora D'Or — Onde a ciência encontra o ouro. Cosméticos de alta performance." />
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <script src="https://unpkg.com/@phosphor-icons/web"></script>

  <style>
    /* --- DESIGN SYSTEM LUXO --- */
    :root {
      --black: #050505;
      --white: #ffffff;
      --off-white: #FAFAFA;
      --gold: #D4AF37;
      --gold-light: #F3E5AB;
      --gray-text: #666666;
      --border: #E5E5E5;
      --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; outline: none; }
    
    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--white);
      color: var(--black);
      line-height: 1.6;
      overflow-x: hidden;
    }

    h1, h2, h3, h4 { font-family: 'Playfair Display', serif; color: var(--black); font-weight: 600; }
    .italic { font-style: italic; }
    
    /* Animações de Entrada (Scroll Reveal) */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: all 1s var(--ease-out);
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Header */
    header {
      position: sticky; top: 0; z-index: 100;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(0,0,0,0.05);
      padding: 20px 0;
      transition: all 0.3s;
    }
    .nav-container {
      max-width: 1300px; margin: 0 auto; padding: 0 30px;
      display: flex; justify-content: space-between; align-items: center;
    }
    .brand {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      letter-spacing: -0.5px;
      font-weight: 700;
      color: var(--black);
      text-decoration: none;
    }
    .nav-menu { display: flex; gap: 40px; }
    .nav-link { 
      font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase; 
      color: var(--black); text-decoration: none; position: relative; 
    }
    .nav-link::after {
      content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; 
      background: var(--gold); transition: 0.4s var(--ease-out);
    }
    .nav-link:hover::after { width: 100%; }

    /* Hero */
    .hero {
      position: relative; height: 90vh; min-height: 600px;
      display: flex; align-items: center; justify-content: center;
      background: url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1920&auto=format&fit=crop') no-repeat center center/cover;
    }
    .hero::after {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5));
    }
    .hero-content {
      position: relative; z-index: 2; text-align: center; color: var(--white); max-width: 700px; padding: 0 20px;
    }
    .hero h1 { 
      font-size: 4.5rem; line-height: 1; margin-bottom: 20px; color: var(--white);
      text-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    .hero p { font-size: 1.2rem; margin-bottom: 40px; font-weight: 300; opacity: 0.9; }

    /* Botão Premium */
    .btn {
      padding: 16px 40px;
      background: var(--white); color: var(--black);
      font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;
      border: none; cursor: pointer; transition: 0.4s var(--ease-out);
      display: inline-flex; align-items: center; gap: 10px;
    }
    .btn:hover { background: var(--black); color: var(--white); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

    /* Seções */
    .section { padding: 100px 0; }
    .container { max-width: 1300px; margin: 0 auto; padding: 0 30px; }
    
    /* Grid de Produtos */
    .grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 60px 30px; margin-top: 60px;
    }
    .card {
      background: var(--white); cursor: pointer; group: hover;
    }
    .card-img-wrap {
      position: relative; overflow: hidden; height: 400px; margin-bottom: 20px; background: #f0f0f0;
    }
    .card-img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.8s var(--ease-out);
    }
    .card:hover .card-img { transform: scale(1.1); }
    .card-info { text-align: center; }
    .card-cat { color: var(--gray-text); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
    .card-title { font-size: 1.1rem; margin-bottom: 8px; font-weight: 500; }
    .card-price { font-family: 'Playfair Display', serif; font-style: italic; color: var(--black); font-size: 1.1rem; }
    
    /* Botão Add (Flutuante no Card) */
    .card-btn {
      position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(20px);
      background: var(--white); color: var(--black); padding: 12px 24px;
      opacity: 0; transition: 0.4s var(--ease-out); font-weight: 600; font-size: 0.8rem;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1); width: 80%; text-align: center;
    }
    .card:hover .card-btn { opacity: 1; transform: translateX(-50%) translateY(0); }

    /* Sobre (Storytelling) */
    .story-section {
      background: var(--off-white);
      display: grid; grid-template-columns: 1fr 1fr; align-items: center;
    }
    .story-img {
      width: 100%; height: 100%; min-height: 600px; object-fit: cover;
    }
    .story-content { padding: 80px; }
    .gold-text { color: var(--gold); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; margin-bottom: 20px; display: block; }
    
    /* Drawer Carrinho */
    .drawer-overlay {
      position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 200;
      opacity: 0; visibility: hidden; transition: 0.4s;
    }
    .drawer {
      position: fixed; top: 0; right: 0; width: 450px; height: 100vh;
      background: var(--white); z-index: 201;
      transform: translateX(100%); transition: 0.5s var(--ease-out);
      display: flex; flex-direction: column;
    }
    .drawer-active .drawer-overlay { opacity: 1; visibility: visible; }
    .drawer-active .drawer { transform: translateX(0); }

    /* Footer */
    footer { background: var(--black); color: var(--white); padding: 80px 0 30px; text-align: center; }
    .footer-brand { font-family: 'Playfair Display'; font-size: 2rem; margin-bottom: 20px; }

    @media(max-width: 900px) {
      .story-section { grid-template-columns: 1fr; }
      .hero h1 { font-size: 3rem; }
      .drawer { width: 100%; }
      .nav-menu { display: none; } /* Mobile Menu Simplificado */
    }
  </style>
</head>
<body>

  <header>
    <div class="nav-container">
      <a href="#" class="brand">Aurora D'Or</a>
      <nav class="nav-menu">
        <a href="#colecao" class="nav-link">Coleção</a>
        <a href="#historia" class="nav-link">Nossa História</a>
        <a href="#lancamentos" class="nav-link">Lançamentos</a>
      </nav>
      <div style="display: flex; gap: 20px;">
        <button onclick="openCart()" style="font-size: 1.5rem; background:none; border:none; cursor:pointer;">
          <i class="ph ph-handbag"></i>
          <span id="cart-count" style="font-size: 0.8rem; vertical-align: top; font-weight: bold;">0</span>
        </button>
      </div>
    </div>
  </header>

  <section class="hero">
    <div class="hero-content reveal">
      <h1 class="italic">Onde a pele encontra<br>o sublime.</h1>
      <p>Aurora D'Or redefine o padrão de excelência.</p>
      <button class="btn" onclick="document.getElementById('colecao').scrollIntoView()">Explorar Coleção</button>
    </div>
  </section>

  <section id="historia" class="story-section">
    <div class="story-content reveal">
      <span class="gold-text">A Lenda de Aurora D'Or</span>
      <h2 style="font-size: 2.5rem; margin-bottom: 24px;">Não criamos cosméticos.<br>Criamos joias fluidas.</h2>
      <p style="color: var(--gray-text); margin-bottom: 20px;">
        Nascida nos ateliers secretos de Grasse, na França, a <strong>Aurora D'Or</strong> surgiu de uma obsessão: capturar o brilho do amanhecer e fundi-lo com a ciência regenerativa.
      </p>
      <p style="color: var(--gray-text); margin-bottom: 30px;">
        Nossos alquimistas modernos selecionam ingredientes raros — do ouro coloidal de 24k às orquídeas negras colhidas apenas à meia-noite. Cada frasco é um testemunho de perfeição, desenhado não apenas para embelezar, mas para elevar o espírito. 
        <br><br>
        Ser <strong>Aurora D'Or</strong> não é apenas usar um produto. É pertencer a um círculo seleto que entende que o verdadeiro luxo é a harmonia absoluta entre natureza e tecnologia.
      </p>
      <div class="italic" style="font-family: 'Playfair Display'; font-size: 1.2rem;">"O extraordinário é o nosso padrão."</div>
    </div>
    <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1200&auto=format&fit=crop" class="story-img reveal" alt="Atelier Aurora D'Or">
  </section>

  <section id="colecao" class="section">
    <div class="container">
      <div class="text-center reveal" style="text-align: center; max-width: 600px; margin: 0 auto;">
        <span class="gold-text">Curadoria Exclusiva</span>
        <h2>Favoritos do Mês</h2>
        <p style="color: var(--gray-text); margin-top: 10px;">Uma seleção impecável para sua rotina de beleza.</p>
      </div>

      <div class="grid" id="product-grid">
        </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-brand">Aurora D'Or</div>
      <p style="opacity: 0.6; max-width: 400px; margin: 0 auto 30px;">
        O auge da beleza e sofisticação. Entregamos em todo o Brasil com embalagens de colecionador.
      </p>
      <div style="font-size: 0.8rem; opacity: 0.4;">
        © 2025 Aurora D'Or. Todos os direitos reservados.
      </div>
    </div>
  </footer>

  <div class="drawer-overlay" id="overlay" onclick="closeCart()"></div>
  <div class="drawer" id="drawer">
    <div style="padding: 30px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
      <h3>Sua Sacola</h3>
      <button onclick="closeCart()"><i class="ph ph-x" style="font-size: 1.5rem;"></i></button>
    </div>
    <div id="cart-items" style="flex: 1; padding: 30px; overflow-y: auto;">
      </div>
    <div style="padding: 30px; background: var(--off-white); border-top: 1px solid var(--border);">
      <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.2rem; margin-bottom: 20px;">
        <span>Total</span>
        <span id="cart-total">R$ 0,00</span>
      </div>
      <button class="btn" style="width: 100%; justify-content: center; background: var(--black); color: var(--white);" onclick="goToCheckout()">
        Finalizar Compra
      </button>
    </div>
  </div>

  <script>
    /* --- DADOS DOS PRODUTOS (Imagens Reais) --- */
    const products = [
      { id: 1, name: "Elixir D'Or Facial", cat: "Skincare", price: 249.90, img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Rouge Velvet Matte", cat: "Maquiagem", price: 129.00, img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Parfum Nuit Noire", cat: "Fragrância", price: 489.90, img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Gold Dust Palette", cat: "Maquiagem", price: 210.50, img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop" },
      { id: 5, name: "Óleo Corporal Radiance", cat: "Corpo", price: 159.90, img: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=800&auto=format&fit=crop" },
      { id: 6, name: "Shampoo Repair Silk", cat: "Cabelos", price: 99.90, img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=800&auto=format&fit=crop" }
    ];

    /* --- LÓGICA DO CARRINHO --- */
    let cart = JSON.parse(localStorage.getItem('aurora_cart')) || [];

    function renderProducts() {
      const grid = document.getElementById('product-grid');
      grid.innerHTML = products.map(p => `
        <div class="card reveal" onclick="addToCart(${p.id})">
          <div class="card-img-wrap">
            <img src="${p.img}" alt="${p.name}" class="card-img">
            <button class="card-btn">ADICIONAR À SACOLA</button>
          </div>
          <div class="card-info">
            <div class="card-cat">${p.cat}</div>
            <div class="card-title">${p.name}</div>
            <div class="card-price">${p.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
          </div>
        </div>
      `).join('');
    }

    function addToCart(id) {
      const p = products.find(x => x.id === id);
      const exists = cart.find(x => x.id === id);
      if(exists) exists.qty++; else cart.push({...p, qty: 1});
      updateCart();
      openCart();
    }

    function removeFromCart(id) {
      cart = cart.filter(x => x.id !== id);
      updateCart();
    }

    function updateCart() {
      localStorage.setItem('aurora_cart', JSON.stringify(cart));
      document.getElementById('cart-count').innerText = cart.reduce((a,b)=>a+b.qty,0);
      
      const itemsDiv = document.getElementById('cart-items');
      if(cart.length === 0) {
        itemsDiv.innerHTML = '<div style="text-align:center; color:#999; margin-top:40px;">Sua sacola está vazia.</div>';
      } else {
        itemsDiv.innerHTML = cart.map(i => `
          <div style="display:flex; gap:15px; margin-bottom:20px;">
            <img src="${i.img}" style="width:60px; height:80px; object-fit:cover;">
            <div style="flex:1;">
              <div style="font-weight:600;">${i.name}</div>
              <div style="font-size:0.9rem; color:#666;">${i.qty} x R$ ${i.price.toFixed(2)}</div>
            </div>
            <button onclick="removeFromCart(${i.id})" style="color:#999; text-decoration:underline; font-size:0.8rem; cursor:pointer;">Remover</button>
          </div>
        `).join('');
      }
      
      const total = cart.reduce((a,b)=>a+(b.price*b.qty),0);
      document.getElementById('cart-total').innerText = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    }

    function openCart() { document.body.classList.add('drawer-active'); }
    function closeCart() { document.body.classList.remove('drawer-active'); }

    /* --- CHECKOUT REDIRECIONAMENTO --- */
    function goToCheckout() {
      if(cart.length === 0) return alert("Adicione itens à sacola primeiro.");
      
      // OPCÃO A: Redirecionar para página de sucesso interna
      window.location.href = 'sucesso.html'; 

      // OPÇÃO B: Se quiser ir direto pro Mercado Pago, use esta linha abaixo (remova o //):
      // window.location.href = 'SEU_LINK_DO_MERCADO_PAGO_AQUI';
    }

    /* --- ANIMAÇÕES DE SCROLL --- */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Init
    renderProducts();
    updateCart();
  </script>
</body>
</html>

