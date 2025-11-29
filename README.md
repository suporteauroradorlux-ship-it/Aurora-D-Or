<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Aurora D'Or — Cosméticos Premium</title>
  <meta name="description" content="Aurora D'Or — Cosméticos premium: esmaltes, cuidados capilares, cremes corporais e cuidados faciais." />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{
      --gold:#D4AF37;
      --gold-2:#C7992F;
      --black:#000000;
      --dark:#0a0a0a;
      --muted:#b8a86a;
      --glass: rgba(255,255,255,0.06);
      --radius:16px;
      color-scheme: dark;
    }
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial; background:linear-gradient(180deg, #000000 0%, #0a0a0a 100%);color:var(--black);-webkit-font-smoothing:antialiased;line-height:1.45;
    }
    a{color:inherit;text-decoration:none}
    /* header */
    header{display:flex;align-items:center;justify-content:space-between;padding:22px 34px;border-bottom:1px solid rgba(13,13,13,0.05);background:linear-gradient(180deg, rgba(255,255,255,0.6), transparent);position:sticky;top:0;backdrop-filter: blur(6px);z-index:60}
    .brand{display:flex;gap:16px;align-items:center}
    .logo-wrap{display:flex;align-items:center;gap:12px}
    .logo-badge{width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,var(--gold),var(--gold-2));display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(212,175,55,0.18)}
    .logo-badge svg{width:34px;height:34px}
    .brand h1{font-family:'Playfair Display',serif;margin:0;font-weight:700;font-size:20px;letter-spacing:0.6px}
    .brand p{margin:0;font-size:12px;color:var(--muted)}
    nav{display:flex;gap:18px;align-items:center}
    nav a{font-weight:600;color:var(--muted);font-size:14px}
    .cta{background:var(--gold);padding:10px 16px;border-radius:12px;font-weight:700;color:#0b0b0b}

    /* container */
    .container{max-width:1200px;margin:34px auto;padding:0 22px}

    /* hero */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center}
    .hero-card{background:linear-gradient(180deg, rgba(247,244,242,0.9), rgba(247,244,242,0.6));padding:40px;border-radius:20px;box-shadow:0 20px 50px rgba(13,13,13,0.04)}
    .hero h2{font-family:'Playfair Display',serif;font-size:40px;margin:0;color:var(--black)}
    .hero p{color:var(--muted);margin-top:8px}
    .search{display:flex;gap:12px;margin-top:18px}
    .search input{flex:1;padding:14px 16px;border-radius:12px;border:1px solid rgba(13,13,13,0.06);background:transparent;color:inherit}
    .search button{padding:14px 16px;border-radius:12px;border:none;background:var(--gold);font-weight:700;cursor:pointer}
    .hero-meta{display:flex;gap:12px;margin-top:18px}
    .pill{background:linear-gradient(90deg, rgba(212,175,55,0.12), rgba(199,153,47,0.08));padding:12px;border-radius:12px;font-weight:700;color:var(--muted)}

    .hero-aside{padding:26px;border-radius:16px;background:linear-gradient(180deg, #fff, var(--pearl));border:1px solid rgba(13,13,13,0.04)}
    .promo-img{width:100%;height:220px;object-fit:cover;border-radius:12px}

    /* categories */
    .cats{display:flex;gap:12px;margin-top:18px;flex-wrap:wrap}
    .cat{background:#fff;border-radius:12px;padding:12px 14px;border:1px solid rgba(13,13,13,0.04);min-width:120px;text-align:center}
    .cat strong{display:block}
    .cat small{display:block;color:var(--muted)}

    /* products grid */
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:26px}
    .product{background:linear-gradient(180deg,#fff,#fbfbfb);padding:18px;border-radius:14px;border:1px solid rgba(13,13,13,0.04);transition:transform .18s ease, box-shadow .18s ease}
    .product:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(13,13,13,0.06)}
    .product img{width:100%;height:260px;object-fit:cover;border-radius:10px}
    .product h3{margin:12px 0 6px;font-size:16px;font-weight:700}
    .muted{color:var(--muted)}
    .price-row{display:flex;justify-content:space-between;align-items:center;margin-top:10px}
    .price{font-weight:800;color:var(--gold)}
    .add{padding:10px 12px;border-radius:10px;border:none;background:var(--gold);color:#0b0b0b;font-weight:700;cursor:pointer}

    /* promo banner */
    .promo-banner{margin-top:28px;border-radius:14px;padding:22px;background:linear-gradient(90deg, rgba(212,175,55,0.08), rgba(242,217,208,0.04));display:flex;align-items:center;gap:18px}
    .promo-banner img{width:120px;height:120px;object-fit:cover;border-radius:12px}

    /* responsive */
    @media(max-width:1000px){.grid{grid-template-columns:repeat(2,1fr)} .hero{grid-template-columns:1fr} .product img{height:220px}}
    @media(max-width:640px){.grid{grid-template-columns:1fr} header{padding:14px} .hero h2{font-size:28px} .logo-badge{width:46px;height:46px}}

    /* footer */
    footer{margin-top:48px;padding:28px;border-top:1px solid rgba(13,13,13,0.04);background:linear-gradient(180deg,transparent,rgba(0,0,0,0.02))}

    /* cart panel */
    .cart-panel{position:fixed;right:18px;top:90px;width:340px;background:#fff;padding:18px;border-radius:14px;box-shadow:0 30px 70px rgba(13,13,13,0.12);display:none;z-index:90}
    .cart-panel.show{display:block}
    .cart-item{display:flex;gap:12px;align-items:center;padding:8px 0;border-bottom:1px dashed rgba(13,13,13,0.04)}

    /* modal */
    .modal{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(13,13,13,0.45);z-index:120}
    .modal.show{display:flex}
    .modal .box{background:#fff;padding:22px;border-radius:12px;max-width:940px;width:94%}

    /* tiny helpers */
    .text-gold{color:var(--gold);font-weight:800}
    .uppercase{letter-spacing:1px;text-transform:uppercase}
  </style>
</head>
<body>
  <header>
    <div class="brand">
      <div class="logo-wrap">
        <div class="logo-badge" aria-hidden>
          <!-- elegant monogram ADO -->
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="img" alt="Aurora D'Or logo">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stop-color="#D4AF37" />
                <stop offset="1" stop-color="#C7992F" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#g)" />
            <text x="50%" y="56%" text-anchor="middle" font-family="Playfair Display, serif" font-size="44" font-weight="700" fill="#0b0b0b">AD</text>
          </svg>
        </div>
        <div>
          <h1>Aurora D'Or</h1>
          <p>Cosméticos Premium</p>
        </div>
      </div>
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#categorias">Categorias</a>
      <a href="#produtos">Produtos</a>
      <a href="#sobre">Sobre</a>
      <a class="cta" id="cartBtn">Carrinho (0)</a>
    </nav>
  </header>

  <main class="container" id="home">
    <section class="hero">
      <div class="hero-card">
        <h2>Beleza em dourado — luxo, cuidado e performance</h2>
        <p class="muted">Esmaltes sofisticados, linhas completas para cabelos lisos e cacheados, cremes corporais e cuidados faciais — curadoria premium pensada para mulheres que buscam o melhor.</p>
        <div class="search">
          <input id="searchInput" placeholder="Buscar: esmalte, shampoo, creme..." />
          <button onclick="doSearch()">Buscar</button>
        </div>

        <div class="hero-meta">
          <div class="pill">Frete grátis acima de R$249</div>
          <div class="pill">Pagamento em até 6x sem juros</div>
          <div class="pill">Clube Aurora — até 15% OFF</div>
        </div>

        <div class="cats" id="categorias">
          <div class="cat"><strong>Esmaltes</strong><small>Unhas impecáveis</small></div>
          <div class="cat"><strong>Cabelos</strong><small>Liso & Cacheado</small></div>
          <div class="cat"><strong>Corpo</strong><small>Cremes & Óleos</small></div>
          <div class="cat"><strong>Rosto</strong><small>Rotina facial</small></div>
          <div class="cat"><strong>Acessórios</strong><small>Ferramentas e kits</small></div>
        </div>
      </div>

      <aside class="hero-aside">
        <div style="display:flex;flex-direction:column;gap:12px">
          <img class="promo-img" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Linha Aurora">
          <div style="font-weight:800">Lançamento: Linha D'Or — Hidratação Suprema</div>
          <div class="muted">Sérum de noite, loção corporal e máscara capilar — embalagem premium e fragrância exclusiva.</div>
          <div style="margin-top:8px;display:flex;gap:8px">
            <button class="add" onclick="openPromo()">Ver Coleção</button>
            <button style="padding:10px;border-radius:10px;border:1px solid rgba(13,13,13,0.06);background:transparent;color:inherit;">Assine e ganhe 10%</button>
          </div>
        </div>
      </aside>
    </section>

    <section style="margin-top:22px">
      <h2 style="margin:0 0 6px">Produtos em destaque</h2>
      <p class="muted" style="margin:0 0 12px">Seleção especial Aurora D'Or — qualidade e embalagem premium.</p>
      <div class="grid" id="productsGrid"></div>
    </section>

    <section class="promo-banner">
      <img src="https://images.unsplash.com/photo-1516617442634-75371039cb3d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="Promo">
      <div>
        <div class="text-gold uppercase">Oferta de lançamento</div>
        <h3 style="margin:6px 0">Kit Aurora D'Or — Hidratação Lux</h3>
        <p class="muted">Compre o kit completo e ganhe um estojo exclusivo + frete grátis.</p>
        <div style="margin-top:12px"><button class="add">Comprar Kit</button></div>
      </div>
    </section>

    <section id="sobre" style="margin-top:30px">
      <h2>Sobre a Aurora D'Or</h2>
      <p class="muted">Aurora D'Or é uma curadoria de cosméticos premium criada para mulheres que buscam resultados visíveis sem abrir mão do luxo. Nossas fórmulas são testadas, com embalagens sustentáveis e fragrâncias pensadas para tornar cada momento de cuidado especial.</p>

      <div style="display:flex;gap:18px;margin-top:14px;flex-wrap:wrap">
        <div style="background:#fff;padding:18px;border-radius:12px;min-width:240px;border:1px solid rgba(13,13,13,0.04)">
          <h4 style="margin:0">Sustentabilidade</h4>
          <p class="muted">Embalagens recicláveis e fornecedores com práticas responsáveis.</p>
        </div>
        <div style="background:#fff;padding:18px;border-radius:12px;min-width:240px;border:1px solid rgba(13,13,13,0.04)">
          <h4 style="margin:0">Entrega Premium</h4>
          <p class="muted">Rastreamento completo e embalagens seguras.</p>
        </div>
        <div style="background:#fff;padding:18px;border-radius:12px;min-width:240px;border:1px solid rgba(13,13,13,0.04)">
          <h4 style="margin:0">Clube Aurora</h4>
          <p class="muted">Assinaturas com descontos e brindes exclusivos.</p>
        </div>
      </div>
    </section>

    <section style="margin-top:28px">
      <h2>Assine nossa newsletter</h2>
      <p class="muted">Receba novidades, tutoriais e cupons exclusivos.</p>
      <div style="margin-top:8px;display:flex;gap:8px;max-width:560px">
        <input id="email" class="subscribe" placeholder="seu@email.com" style="padding:12px;border-radius:10px;border:1px solid rgba(13,13,13,0.06);flex:1" />
        <button class="cta" onclick="subscribe()">Quero receber</button>
      </div>
    </section>

    <section id="contato" style="margin-top:28px">
      <h2>Contato</h2>
      <p class="muted">Dúvidas? Fale conosco pelo formulário ou pelo e-mail contato@aurorador.com (exemplo).</p>
      <form onsubmit="event.preventDefault();alert('Mensagem enviada (demo)')" style="margin-top:12px;display:flex;flex-direction:column;gap:8px;max-width:560px">
        <input placeholder="Nome" style="padding:12px;border-radius:10px;border:1px solid rgba(13,13,13,0.06)" required />
        <input placeholder="Email" style="padding:12px;border-radius:10px;border:1px solid rgba(13,13,13,0.06)" required />
        <textarea placeholder="Mensagem" style="padding:12px;border-radius:10px;border:1px solid rgba(13,13,13,0.06)" rows="4" required></textarea>
        <button class="cta">Enviar mensagem</button>
      </form>
    </section>

    <footer>
      <div style="display:flex;gap:18px;justify-content:space-between;flex-wrap:wrap;align-items:center">
        <div>
          <h3 style="margin:0">Aurora D'Or</h3>
          <p class="muted">Cosméticos premium — luxo e cuidado.</p>
        </div>
        <div style="display:flex;gap:18px;align-items:center">
          <div>
            <h4 style="margin:0">Atendimento</h4>
            <div class="muted">contato@aurorador.com</div>
          </div>
          <div>
            <h4 style="margin:0">Legal</h4>
            <div class="muted">Política de privacidade</div>
          </div>
        </div>
      </div>
    </footer>
  </main>

  <!-- Cart panel -->
  <div class="cart-panel" id="cartPanel">
    <h4>Carrinho</h4>
    <div id="cartItems"></div>
    <div style="margin-top:12px;display:flex;justify-content:space-between;align-items:center">
      <div class="muted">Total:</div>
      <div id="cartTotal" style="font-weight:800">R$0,00</div>
    </div>
    <div style="margin-top:12px;display:flex;gap:8px">
      <button class="add" onclick="checkout()">Finalizar</button>
      <button style="padding:8px 10px;border-radius:10px;border:1px solid rgba(13,13,13,0.06);background:transparent;color:inherit" onclick="clearCart()">Limpar</button>
    </div>
  </div>

  <!-- modal -->
  <div class="modal" id="modal">
    <div class="box">
      <div style="display:flex;gap:18px;align-items:flex-start">
        <img id="mvImg" src="" alt="" style="width:300px;height:300px;object-fit:cover;border-radius:12px">
        <div style="flex:1">
          <h3 id="mvTitle"></h3>
          <div id="mvDesc" class="muted" style="margin:8px 0"></div>
          <div style="font-weight:800;color:var(--gold);font-size:20px" id="mvPrice"></div>
          <div style="margin-top:12px;display:flex;gap:8px">
            <button class="add" onclick="addToCartFromModal()">Adicionar ao carrinho</button>
            <button style="padding:10px;border-radius:10px;border:1px solid rgba(13,13,13,0.06);background:transparent;color:inherit" onclick="closeModal()">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    /* Slogan & Palette (exposed for easy copy) */
    const BRAND = {
      name: "Aurora D'Or",
      slogan: "Luxo que ilumina sua feminilidade.",
      palette: {
        gold: '#D4AF37',
        rose: '#F2D9D0',
        ivory: '#FBFBF9',
        black: '#0d0d0d'
      }
    };

    // Demo product data (cosméticos femininos)
    const products = [
      {id:1,title:'Esmalte Aurora D\'Or - Rosa Champagne',price:39.90,cat:'Esmalte',img:'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Cobertura gel, brilho intenso e longa duração.'},
      {id:2,title:'Shampoo Liso D\'Or 300ml',price:79.90,cat:'Cabelo',img:'https://images.unsplash.com/photo-1580910051071-9de39a4df6c0?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Controle de frizz e brilho luxo para cabelos lisos.'},
      {id:3,title:'Creme Definição Cacheada D\'Or 250g',price:99.90,cat:'Cabelo',img:'https://images.unsplash.com/photo-1588345921523-7c6b0b4b6f9f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Definição e hidratação sem pesar.'},
      {id:4,title:'Loção Corporal Velvet D\'Or 400ml',price:129.90,cat:'Corpo',img:'https://images.unsplash.com/photo-1542326237-f8fd74997d53?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Toque aveludado e fragrância sofisticada.'},
      {id:5,title:'Sabonete Líquido Facial Gentle D\'Or',price:59.90,cat:'Rosto',img:'https://images.unsplash.com/photo-1544052629-2f0a1b1a6f6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Limpeza delicada e ação equilibrante para todos os tipos de pele.'},
      {id:6,title:'Kit Mini Esmaltes Aurora (6 cores)',price:119.90,cat:'Esmalte',img:'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder',desc:'Seleção exclusiva com cores da estação.'},
      {id:7,title:'Perfume Aurora Essence',price:289.90,cat:'Perfume',img:'https://via.placeholder.com/800x1000?text=Perfume+Aurora+Essence',desc:'Fragrância marcante com toques de jasmim, âmbar e baunilha.'},
      {id:8,title:'Golden Velvet Perfume',price:349.90,cat:'Perfume',img:'https://via.placeholder.com/800x1000?text=Golden+Velvet',desc:'Notas florais envolventes com final amadeirado.'},
      {id:9,title:"D'Or Signature",price:399.90,cat:'Perfume',img:'https://via.placeholder.com/800x1000?text=D%27Or+Signature',desc:'Essência de rosa negra e almíscar branco.'},
      {id:10,title:'Aurora Glow – Hidratante Iluminador',price:129.90,cat:'Corpo',img:'https://via.placeholder.com/800x1000?text=Aurora+Glow',desc:'Textura leve com partículas douradas que iluminam a pele.'},
      {id:11,title:'Royal Touch – Nutrição Profunda',price:159.90,cat:'Corpo',img:'https://via.placeholder.com/800x1000?text=Royal+Touch',desc:'Hidratação intensa com manteiga de karité e óleo de macadâmia.'},
      {id:12,title:'Serum Corporal Lux',price:199.90,cat:'Corpo',img:'https://via.placeholder.com/800x1000?text=Serum+Corporral+Lux',desc:'Fórmula premium para restaurar brilho e maciez.'},
      {id:13,title:'Batom Aurora Luxe',price:89.90,cat:'Maquiagem',img:'https://via.placeholder.com/800x1000?text=Batom+Aurora+Luxe',desc:'Acabamento matte aveludado com alta durabilidade.'},
      {id:14,title:'Golden Dreams – Paleta de Sombras',price:199.90,cat:'Maquiagem',img:'https://via.placeholder.com/800x1000?text=Golden+Dreams',desc:'12 tons luxuosos com pigmentação extrema.'},
      {id:15,title:'Divine Light – Iluminador',price:119.90,cat:'Maquiagem',img:'https://via.placeholder.com/800x1000?text=Divine+Light',desc:'Glow dourado intenso com micropartículas refletivas.'},
      {id:16,title:'Aurora Silk – Sabonete Líquido',price:59.90,cat:'Banho',img:'https://via.placeholder.com/800x1000?text=Aurora+Silk',desc:'Limpeza suave com fragrância floral sofisticada.'},
      {id:17,title:'Golden Foam – Sabonete',price:74.90,cat:'Banho',img:'https://via.placeholder.com/800x1000?text=Golden+Foam',desc:'Sabonete nutritivo com extratos naturais.'},
      {id:18,title:'Velvet Bath',price:69.90,cat:'Banho',img:'https://via.placeholder.com/800x1000?text=Velvet+Bath',desc:'Espuma cremosa enriquecida com vitamina E.'}
    ];

    // render products
    const grid = document.getElementById('productsGrid');
    function render(){
      grid.innerHTML = '';
      products.forEach(p => {
        const el = document.createElement('div'); el.className='product';
        el.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <h3>${p.title}</h3>
          <div class="muted">${p.cat}</div>
          <div class="price-row">
            <div class="price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
            <div>
              <button class="add" onclick="openModal(${p.id})">Ver</button>
            </div>
          </div>
        `;
        grid.appendChild(el);
      });
    }
    render();

    // Search
    function doSearch(){
      const q = document.getElementById('searchInput').value.toLowerCase();
      if(!q) return render();
      const filtered = products.filter(p => (p.title + ' ' + p.desc + ' ' + p.cat).toLowerCase().includes(q));
      grid.innerHTML='';
      filtered.forEach(p=>{
        const el = document.createElement('div'); el.className='product';
        el.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <h3>${p.title}</h3>
          <div class="muted">${p.cat}</div>
          <div class="price-row">
            <div class="price">R$ ${p.price.toFixed(2).replace('.',',')}</div>
            <div>
              <button class="add" onclick="openModal(${p.id})">Ver</button>
            </div>
          </div>
        `;
        grid.appendChild(el);
      })
    }

    // Modal
    let currentModalId = null;
    function openModal(id){
      const p = products.find(x=>x.id===id); if(!p) return;
      currentModalId = id;
      document.getElementById('mvImg').src = p.img;
      document.getElementById('mvTitle').textContent = p.title;
      document.getElementById('mvDesc').textContent = p.desc;
      document.getElementById('mvPrice').textContent = 'R$ ' + p.price.toFixed(2).replace('.',',');
      document.getElementById('modal').classList.add('show');
    }
    function closeModal(){document.getElementById('modal').classList.remove('show');currentModalId=null}

    // Simple cart
    let cart = [];
    const cartBtn = document.getElementById('cartBtn');
    const cartPanel = document.getElementById('cartPanel');
    cartBtn.addEventListener('click', ()=>{cartPanel.classList.toggle('show')});

    function addToCartFromModal(){
      if(!currentModalId) return;
      const p = products.find(x=>x.id===currentModalId);
      addToCart(p);
      closeModal();
    }
    function addToCart(p){
      const found = cart.find(c=>c.id===p.id);
      if(found) found.q++;
      else cart.push({id:p.id,title:p.title,price:p.price,q:1});
      updateCartUI();
    }
    function updateCartUI(){
      document.getElementById('cartBtn').textContent = `Carrinho (${cart.reduce((s,i)=>s+i.q,0)})`;
      const items = document.getElementById('cartItems'); items.innerHTML='';
      let total = 0;
      cart.forEach(i=>{
        total += i.price * i.q;
        const node = document.createElement('div'); node.className='cart-item';
        node.innerHTML = `<div style="width:64px;height:64px;border-radius:8px;background:rgba(13,13,13,0.04);display:flex;align-items:center;justify-content:center">Img</div><div style='flex:1'><div style='font-weight:700'>${i.title}</div><div class='muted'>Qtd: ${i.q}</div></div><div style='font-weight:800'>R$ ${ (i.price*i.q).toFixed(2).replace('.',',')}</div>`;
        items.appendChild(node);
      })
      document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(2).replace('.',',')}`;
    }
    function clearCart(){cart = []; updateCartUI();}
    function checkout(){if(cart.length===0){alert('Carrinho vazio');return} alert('Demo: direcionar para checkout — total: ' + document.getElementById('cartTotal').textContent)}

    // Newsletter subscribe (demo)
    function subscribe(){const e=document.getElementById('email').value; if(!e) return alert('Informe um e-mail'); alert('Obrigado! E-mail cadastrado: '+e)}

    function openPromo(){alert('Abrir página da coleção — demo')}

    // small UX
    document.addEventListener('keydown',(e)=>{if(e.key==='Escape'){closeModal();cartPanel.classList.remove('show')}})

    // initial cart update
    updateCartUI();

    // expose brand info in console for easy copy
    console.log('BRAND PALETTE & SLOGAN:', BRAND);
  </script>

</body>
</html>
