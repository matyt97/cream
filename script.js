/* =========================================================
   MUSGO — Cosmética Natural Chilena
   Carrito de compras funcional + catálogo + interacciones
   Vanilla JS — sin dependencias externas
   ========================================================= */

(function () {
  'use strict';

  /* ---------------------------------------------------------
     1. DATOS DEL CATÁLOGO
     --------------------------------------------------------- */
  var COLORS = {
    'terracotta':      '#c97b52',
    'terracotta-dark': '#a15a36',
    'gold':            '#cf9f4c',
    'sage':            '#7a8f6c',
    'sage-dark':       '#45573a',
    'sage-light':      '#b7c9a8',
    'cream':           '#f8f4ea',
    'cream-dark':      '#ede4d0'
  };

  var CATEGORY_LABELS = {
    rostro: 'Rostro',
    cuerpo: 'Cuerpo',
    cabello: 'Cabello',
    sets: 'Sets & Regalos'
  };

  var PRODUCTS = [
    {
      id: 1, name: 'Aceite Facial Luna', category: 'rostro', price: 18990,
      desc: 'Sérum nocturno con rosa mosqueta y escualano vegetal que regenera la piel mientras duermes.',
      benefits: ['Reduce líneas de expresión', 'Ilumina el tono de la piel', 'Absorción rápida, no graso'],
      ingredients: 'Rosa mosqueta, escualano vegetal, vitamina E, aceite de jojoba.',
      shape: 'bottle-dropper', colors: ['terracotta', 'gold'], badge: 'Más vendido'
    },
    {
      id: 2, name: 'Bruma Facial Agua de Jade', category: 'rostro', price: 12990,
      desc: 'Tónico refrescante en spray que calma e hidrata en segundos, ideal para el calor de Santiago.',
      benefits: ['Calma el enrojecimiento', 'Hidratación instantánea', 'Fija el maquillaje'],
      ingredients: 'Agua de hamamelis, aloe vera, extracto de pepino.',
      shape: 'spray', colors: ['sage', 'sage-light']
    },
    {
      id: 3, name: 'Bálsamo Labial Miel de Ulmo', category: 'rostro', price: 6990,
      desc: 'Bálsamo nutritivo con cera de abejas y miel de ulmo del sur de Chile.',
      benefits: ['Repara labios agrietados', 'Textura sedosa, no pegajosa', 'Aroma suave a miel'],
      ingredients: 'Cera de abejas, miel de ulmo, manteca de karité, aceite de coco.',
      shape: 'balm-tin', colors: ['gold', 'terracotta']
    },
    {
      id: 4, name: 'Exfoliante Facial Café & Avena', category: 'rostro', price: 13990,
      desc: 'Exfoliante suave con café molido y avena que renueva la piel sin resecarla.',
      benefits: ['Elimina células muertas', 'Estimula la circulación', 'Piel suave al instante'],
      ingredients: 'Café molido, avena coloidal, aceite de jojoba, miel.',
      shape: 'jar', colors: ['terracotta-dark', 'cream-dark']
    },
    {
      id: 5, name: 'Manteca Corporal Cacao Andino', category: 'cuerpo', price: 16990,
      desc: 'Manteca corporal densa con cacao y almendras, pensada para el invierno santiaguino.',
      benefits: ['Hidratación profunda 24 hrs', 'Aroma a chocolate natural', 'Ideal piel muy seca'],
      ingredients: 'Manteca de cacao, aceite de coco, almendras dulces.',
      shape: 'jar', colors: ['terracotta-dark', 'gold'], badge: 'Más vendido'
    },
    {
      id: 6, name: 'Jabón Artesanal Lavanda de los Andes', category: 'cuerpo', price: 5990,
      desc: 'Barra artesanal de saponificación en frío con lavanda cultivada en la zona central.',
      benefits: ['Limpieza suave', 'Relaja antes de dormir', '100% biodegradable'],
      ingredients: 'Aceite de oliva, lavanda, arcilla blanca, glicerina vegetal.',
      shape: 'soap-bar', colors: ['sage-light', 'sage']
    },
    {
      id: 7, name: 'Aceite Corporal Naranja & Romero', category: 'cuerpo', price: 15990,
      desc: 'Aceite seco energizante de absorción rápida, perfecto después de la ducha.',
      benefits: ['No deja sensación grasa', 'Aroma cítrico despertador', 'Piel sedosa'],
      ingredients: 'Aceite de almendras, naranja dulce, romero, vitamina E.',
      shape: 'bottle-pump', colors: ['gold', 'terracotta']
    },
    {
      id: 8, name: 'Sales de Baño Relax Cordillera', category: 'cuerpo', price: 9990,
      desc: 'Sales minerales con magnesio y eucalipto para un baño que relaja músculos cansados.',
      benefits: ['Alivia tensión muscular', 'Aroma a eucalipto de montaña', 'Piel más suave'],
      ingredients: 'Sal marina, sales de Epsom, magnesio, aceite esencial de eucalipto.',
      shape: 'sachet', colors: ['sage', 'sage-light']
    },
    {
      id: 9, name: 'Shampoo Sólido Romero & Menta', category: 'cabello', price: 8990,
      desc: 'Barra de shampoo sin sulfatos que rinde hasta 80 lavados, ideal para viajar.',
      benefits: ['Sin plástico, cero residuo', 'Estimula el cuero cabelludo', 'Rinde 2-3 meses'],
      ingredients: 'Aceite de ricino, romero, menta, tensioactivos vegetales.',
      shape: 'soap-bar', colors: ['sage-dark', 'sage-light']
    },
    {
      id: 10, name: 'Mascarilla Capilar Coco Profundo', category: 'cabello', price: 14990,
      desc: 'Tratamiento intensivo semanal que repara puntas dañadas y devuelve el brillo.',
      benefits: ['Repara desde la primera aplicación', 'Reduce el frizz', 'Aroma tropical'],
      ingredients: 'Aceite de coco, manteca de karité, proteína de trigo vegetal.',
      shape: 'jar', colors: ['cream-dark', 'terracotta']
    },
    {
      id: 11, name: 'Sérum Capilar Brillo Natural', category: 'cabello', price: 12990,
      desc: 'Gotas de argán y jojoba que sellan las puntas y controlan el encrespamiento.',
      benefits: ['Brillo instantáneo', 'No apelmaza el cabello', 'Protege del calor'],
      ingredients: 'Aceite de argán, jojoba, vitamina E.',
      shape: 'bottle-dropper', colors: ['gold', 'terracotta-dark']
    },
    {
      id: 12, name: 'Set Ritual Autocuidado Completo', category: 'sets', price: 34990,
      desc: 'El combo perfecto para regalar: aceite facial Luna, jabón de lavanda y bálsamo labial en caja de regalo.',
      benefits: ['Incluye 3 productos + caja de regalo', 'Tarjeta de dedicatoria incluida', 'Ahorras $8.960 vs. compra separada'],
      ingredients: 'Consulta el detalle de cada producto incluido dentro del set.',
      shape: 'box-gift', colors: ['terracotta', 'gold'], badge: 'Ideal regalo'
    }
  ];

  var POLICIES = {
    envios: {
      title: 'Envíos y despachos',
      body: '<p>Despachamos a todo Chile a través de nuestros couriers aliados.</p>' +
            '<h5>Región Metropolitana</h5><p>24–48 horas hábiles. Gratis en compras sobre $30.000, si no, tiene un costo fijo de $3.500.</p>' +
            '<h5>Regiones</h5><p>2–5 días hábiles según comuna. Costo calculado según destino en el siguiente paso.</p>' +
            '<h5>Retiro en tienda</h5><p>Disponible sin costo en Av. Providencia 1234, Local 5, de lunes a sábado.</p>'
    },
    devoluciones: {
      title: 'Cambios y devoluciones',
      body: '<p>Tienes 30 días desde la recepción de tu pedido para solicitar un cambio o devolución.</p>' +
            '<h5>¿Cómo hacerlo?</h5><p>Escríbenos a hola@musgo.cl con tu número de pedido. Si el producto no fue abierto, coordinamos el retiro sin costo.</p>' +
            '<h5>Productos abiertos</h5><p>Por higiene, solo aceptamos cambios de productos abiertos si presentan un defecto de fabricación.</p>'
    },
    privacidad: {
      title: 'Política de privacidad',
      body: '<p>Este es un sitio demo creado como pieza de portafolio para Codeta. No se recolectan datos reales de usuarios.</p>' +
            '<p>En un sitio productivo, aquí detallaríamos qué datos se recolectan, con qué fin, y cómo el usuario puede ejercer sus derechos ARCO conforme a la Ley 19.628 sobre protección de la vida privada.</p>'
    },
    terminos: {
      title: 'Términos y condiciones',
      body: '<p>Este sitio es un proyecto de demostración (portafolio) y no procesa pagos ni pedidos reales.</p>' +
            '<p>MUSGO es una marca ficticia creada únicamente con fines ilustrativos para mostrar el nivel de desarrollo de Codeta.</p>'
    }
  };

  /* ---------------------------------------------------------
     2. ESTADO DEL CARRITO (persistido en localStorage)
     --------------------------------------------------------- */
  var CART_KEY = 'musgo_cart_v1';
  var cart = loadCart();          // [{id, qty}, ...]
  var currentFilter = 'todos';
  var modalQty = 1;
  var activeModalProduct = null;

  function loadCart() {
    try {
      var raw = window.localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch (e) { /* localStorage no disponible: el carrito sigue vivo en memoria */ }
  }

  function findProduct(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  function formatCLP(value) {
    return '$' + value.toLocaleString('es-CL');
  }

  /* ---------------------------------------------------------
     3. GENERADOR DE ILUSTRACIONES SVG (sin imágenes externas)
     --------------------------------------------------------- */
  function svgFor(product, size) {
    var main = COLORS[product.colors[0]] || COLORS.terracotta;
    var accent = COLORS[product.colors[1]] || COLORS.gold;
    var body = '';

    switch (product.shape) {
      case 'bottle-dropper':
        body =
          '<rect x="25" y="35" width="50" height="70" rx="12" fill="' + main + '"/>' +
          '<rect x="35" y="8" width="30" height="30" rx="6" fill="' + accent + '"/>' +
          '<rect x="42" y="0" width="16" height="12" rx="3" fill="' + accent + '"/>' +
          '<rect x="33" y="55" width="34" height="16" rx="3" fill="#f8f4ea" opacity="0.85"/>';
        break;
      case 'spray':
        body =
          '<rect x="28" y="45" width="44" height="65" rx="10" fill="' + main + '"/>' +
          '<rect x="38" y="20" width="24" height="28" rx="5" fill="' + accent + '"/>' +
          '<rect x="44" y="2" width="30" height="11" rx="4" fill="' + accent + '" transform="rotate(-25 44 2)"/>' +
          '<circle cx="78" cy="4" r="4" fill="' + accent + '"/>' +
          '<rect x="35" y="62" width="30" height="14" rx="3" fill="#f8f4ea" opacity="0.85"/>';
        break;
      case 'balm-tin':
        body =
          '<ellipse cx="50" cy="62" rx="38" ry="30" fill="' + main + '"/>' +
          '<ellipse cx="50" cy="45" rx="38" ry="16" fill="' + accent + '"/>' +
          '<ellipse cx="50" cy="45" rx="22" ry="7" fill="#f8f4ea" opacity="0.55"/>';
        break;
      case 'jar':
        body =
          '<rect x="18" y="35" width="64" height="65" rx="16" fill="' + main + '"/>' +
          '<rect x="14" y="16" width="72" height="24" rx="10" fill="' + accent + '"/>' +
          '<rect x="30" y="55" width="40" height="18" rx="4" fill="#f8f4ea" opacity="0.85"/>';
        break;
      case 'soap-bar':
        body =
          '<path d="M15 55 Q10 28 50 26 Q90 28 85 55 Q90 80 50 82 Q10 80 15 55Z" fill="' + main + '"/>' +
          '<path d="M28 50 Q50 38 72 50" stroke="' + accent + '" stroke-width="5" fill="none" stroke-linecap="round"/>';
        break;
      case 'bottle-pump':
        body =
          '<rect x="22" y="40" width="56" height="68" rx="14" fill="' + main + '"/>' +
          '<rect x="34" y="12" width="32" height="32" rx="6" fill="' + accent + '"/>' +
          '<rect x="42" y="0" width="16" height="14" rx="3" fill="' + accent + '"/>' +
          '<rect x="30" y="60" width="40" height="16" rx="3" fill="#f8f4ea" opacity="0.85"/>';
        break;
      case 'sachet':
        body =
          '<path d="M22 30 Q19 18 30 16 L70 16 Q81 18 78 30 L82 95 Q82 106 70 106 L30 106 Q18 106 18 95Z" fill="' + main + '"/>' +
          '<rect x="30" y="6" width="40" height="14" rx="4" fill="' + accent + '"/>' +
          '<circle cx="50" cy="58" r="15" fill="#f8f4ea" opacity="0.65"/>';
        break;
      case 'box-gift':
        body =
          '<rect x="14" y="38" width="72" height="52" rx="6" fill="' + main + '"/>' +
          '<rect x="14" y="38" width="72" height="15" fill="' + accent + '"/>' +
          '<rect x="44" y="10" width="12" height="80" fill="' + accent + '"/>' +
          '<path d="M50 10 Q30 -4 22 16 Q30 24 50 20Z" fill="' + accent + '"/>' +
          '<path d="M50 10 Q70 -4 78 16 Q70 24 50 20Z" fill="' + accent + '"/>';
        break;
      default:
        body = '<circle cx="50" cy="50" r="40" fill="' + main + '"/>';
    }

    return '<svg viewBox="0 0 100 115" width="' + (size || 100) + '" height="' + (size || 100) + '" aria-hidden="true">' + body + '</svg>';
  }

  /* ---------------------------------------------------------
     4. REFERENCIAS DEL DOM
     --------------------------------------------------------- */
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  var header = $('#header');
  var menuToggle = $('#menuToggle');
  var navMobile = $('#navMobile');
  var productGrid = $('#productGrid');
  var filterButtons = $$('.filter-btn');

  var cartToggle = $('#cartToggle');
  var cartClose = $('#cartClose');
  var cartDrawer = $('#cartDrawer');
  var overlay = $('#overlay');
  var cartItemsEl = $('#cartItems');
  var cartCountEl = $('#cartCount');
  var cartSubtotalEl = $('#cartSubtotal');
  var cartEmptyCta = $('#cartEmptyCta');
  var checkoutBtn = $('#checkoutBtn');

  var productModal = $('#productModal');
  var modalClose = $('#modalClose');
  var modalArt = $('#modalArt');
  var modalCategory = $('#modalCategory');
  var modalTitle = $('#modalTitle');
  var modalPrice = $('#modalPrice');
  var modalDesc = $('#modalDesc');
  var modalBenefits = $('#modalBenefits');
  var modalIngredients = $('#modalIngredients');
  var modalQtyEl = $('#modalQty');
  var modalQtyMinus = $('#modalQtyMinus');
  var modalQtyPlus = $('#modalQtyPlus');
  var modalAddBtn = $('#modalAddBtn');

  var policyModal = $('#policyModal');
  var policyClose = $('#policyClose');
  var policyTitle = $('#policyTitle');
  var policyBody = $('#policyBody');

  var toastEl = $('#toast');
  var newsletterForm = $('#newsletterForm');

  var toastTimer = null;

  /* ---------------------------------------------------------
     5. RENDER DEL CATÁLOGO
     --------------------------------------------------------- */
  function renderProducts() {
    var list = currentFilter === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter(function (p) { return p.category === currentFilter; });

    if (!list.length) {
      productGrid.innerHTML = '<div class="empty-state"><p>No hay productos en esta categoría por ahora.</p></div>';
      return;
    }

    var html = list.map(function (p, i) {
      return (
        '<article class="product-card" style="animation-delay:' + Math.min(i * 45, 300) + 'ms" data-id="' + p.id + '">' +
          '<div class="product-art" data-action="open" data-id="' + p.id + '">' +
            (p.badge ? '<span class="product-badge">' + p.badge + '</span>' : '') +
            svgFor(p) +
            '<button class="product-quickadd" data-action="quickadd" data-id="' + p.id + '" aria-label="Agregar ' + p.name + ' al carrito" title="Agregar rápido">' +
              '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>' +
            '</button>' +
          '</div>' +
          '<div class="product-info">' +
            '<span class="product-category">' + CATEGORY_LABELS[p.category] + '</span>' +
            '<h3 class="product-name" data-action="open" data-id="' + p.id + '">' + p.name + '</h3>' +
            '<p class="product-desc">' + p.desc + '</p>' +
            '<div class="product-price-row">' +
              '<span class="product-price">' + formatCLP(p.price) + '</span>' +
              '<button class="add-btn" data-action="quickadd" data-id="' + p.id + '">Agregar</button>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    productGrid.innerHTML = html;
  }

  productGrid.addEventListener('click', function (e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var id = parseInt(target.getAttribute('data-id'), 10);
    var action = target.getAttribute('data-action');

    if (action === 'open') {
      openProductModal(id);
    } else if (action === 'quickadd') {
      addToCart(id, 1);
      bumpCartIcon();
      var p = findProduct(id);
      showToast('"' + p.name + '" se agregó al carrito.');
      flashAddButton(target);
    }
  });

  function flashAddButton(btn) {
    if (!btn.classList.contains('add-btn')) return;
    var original = btn.textContent;
    btn.textContent = 'Agregado ✓';
    btn.classList.add('is-added');
    window.setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('is-added');
    }, 1100);
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  /* ---------------------------------------------------------
     6. LÓGICA DEL CARRITO
     --------------------------------------------------------- */
  function addToCart(id, qty) {
    qty = qty || 1;
    var existing = cart.find(function (item) { return item.id === id; });
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: id, qty: qty });
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) { return item.id !== id; });
    saveCart();
    renderCart();
  }

  function changeQty(id, delta) {
    var item = cart.find(function (i) { return i.id === id; });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
    saveCart();
    renderCart();
  }

  function cartTotalCount() {
    return cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  }

  function cartSubtotal() {
    return cart.reduce(function (sum, item) {
      var p = findProduct(item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  }

  function bumpCartIcon() {
    cartCountEl.classList.remove('bump');
    // forzar reflow para reiniciar la animación
    void cartCountEl.offsetWidth;
    cartCountEl.classList.add('bump');
  }

  function renderCart() {
    var count = cartTotalCount();
    cartCountEl.textContent = count;
    cartDrawer.classList.toggle('is-empty', cart.length === 0);

    cartItemsEl.innerHTML = cart.map(function (item) {
      var p = findProduct(item.id);
      if (!p) return '';
      return (
        '<div class="cart-item" data-id="' + p.id + '">' +
          '<div class="cart-item-art">' + svgFor(p, 60) + '</div>' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-top">' +
              '<span class="cart-item-name">' + p.name + '</span>' +
              '<button class="cart-item-remove" data-action="remove" data-id="' + p.id + '">Quitar</button>' +
            '</div>' +
            '<div class="cart-item-bottom">' +
              '<div class="qty-selector">' +
                '<button data-action="dec" data-id="' + p.id + '" aria-label="Restar">−</button>' +
                '<span>' + item.qty + '</span>' +
                '<button data-action="inc" data-id="' + p.id + '" aria-label="Sumar">+</button>' +
              '</div>' +
              '<span class="cart-item-price">' + formatCLP(p.price * item.qty) + '</span>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    cartSubtotalEl.textContent = formatCLP(cartSubtotal());
  }

  cartItemsEl.addEventListener('click', function (e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var id = parseInt(target.getAttribute('data-id'), 10);
    var action = target.getAttribute('data-action');
    if (action === 'inc') changeQty(id, 1);
    else if (action === 'dec') changeQty(id, -1);
    else if (action === 'remove') {
      removeFromCart(id);
      showToast('Producto eliminado del carrito.');
    }
  });

  function openCart() {
    cartDrawer.classList.add('is-open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-active');
    cartToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('is-open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    overlay.classList.remove('is-active');
    cartToggle.setAttribute('aria-expanded', 'false');
    if (!productModal.classList.contains('is-active') && !policyModal.classList.contains('is-active')) {
      document.body.style.overflow = '';
    }
  }

  cartToggle.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartEmptyCta.addEventListener('click', closeCart);
  overlay.addEventListener('click', function () {
    closeCart();
    closeProductModal();
    closePolicyModal();
  });

  checkoutBtn.addEventListener('click', function () {
    showToast('Este es un sitio demo de portafolio — el pago no está conectado. ¡En un proyecto real, aquí iría el checkout! 🛍️');
  });

  /* ---------------------------------------------------------
     7. MODAL DE PRODUCTO
     --------------------------------------------------------- */
  function openProductModal(id) {
    var p = findProduct(id);
    if (!p) return;
    activeModalProduct = p;
    modalQty = 1;

    modalArt.innerHTML = svgFor(p, 160);
    modalCategory.textContent = CATEGORY_LABELS[p.category];
    modalTitle.textContent = p.name;
    modalPrice.textContent = formatCLP(p.price);
    modalDesc.textContent = p.desc;
    modalBenefits.innerHTML = p.benefits.map(function (b) { return '<li>' + b + '</li>'; }).join('');
    modalIngredients.textContent = p.ingredients;
    modalQtyEl.textContent = modalQty;

    productModal.classList.add('is-active');
    productModal.setAttribute('aria-hidden', 'false');
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    productModal.classList.remove('is-active');
    productModal.setAttribute('aria-hidden', 'true');
    if (!cartDrawer.classList.contains('is-open') && !policyModal.classList.contains('is-active')) {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  modalClose.addEventListener('click', closeProductModal);

  modalQtyMinus.addEventListener('click', function () {
    if (modalQty > 1) modalQty--;
    modalQtyEl.textContent = modalQty;
  });
  modalQtyPlus.addEventListener('click', function () {
    modalQty++;
    modalQtyEl.textContent = modalQty;
  });

  modalAddBtn.addEventListener('click', function () {
    if (!activeModalProduct) return;
    addToCart(activeModalProduct.id, modalQty);
    bumpCartIcon();
    showToast('"' + activeModalProduct.name + '" (x' + modalQty + ') se agregó al carrito.');
    closeProductModal();
    openCart();
  });

  /* ---------------------------------------------------------
     8. MODAL DE POLÍTICAS
     --------------------------------------------------------- */
  $$('[data-policy]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var key = link.getAttribute('data-policy');
      var policy = POLICIES[key];
      if (!policy) return;
      policyTitle.textContent = policy.title;
      policyBody.innerHTML = policy.body;
      policyModal.classList.add('is-active');
      policyModal.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closePolicyModal() {
    policyModal.classList.remove('is-active');
    policyModal.setAttribute('aria-hidden', 'true');
    if (!cartDrawer.classList.contains('is-open') && !productModal.classList.contains('is-active')) {
      overlay.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }
  policyClose.addEventListener('click', closePolicyModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeCart();
      closeProductModal();
      closePolicyModal();
      if (navMobile.classList.contains('is-open')) toggleMobileMenu();
    }
  });

  /* ---------------------------------------------------------
     9. MENÚ MÓVIL + HEADER AL HACER SCROLL
     --------------------------------------------------------- */
  function toggleMobileMenu() {
    var isOpen = navMobile.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  }
  menuToggle.addEventListener('click', toggleMobileMenu);
  $$('.nav-mobile a').forEach(function (a) {
    a.addEventListener('click', function () {
      navMobile.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('scroll', function () {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ---------------------------------------------------------
     10. NEWSLETTER (demo, sin backend)
     --------------------------------------------------------- */
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('¡Gracias por suscribirte! Revisa tu correo para tu código de 10% de descuento.');
      newsletterForm.reset();
    });
  }

  /* ---------------------------------------------------------
     11. TOAST
     --------------------------------------------------------- */
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toastEl.classList.remove('is-visible');
    }, 2600);
  }

  /* ---------------------------------------------------------
     12. INICIALIZACIÓN
     --------------------------------------------------------- */
  renderProducts();
  renderCart();
})();
