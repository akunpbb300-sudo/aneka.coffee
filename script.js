/* =========================================================
   ANEKA COFFEE — SCRIPT.JS
   Pure vanilla JavaScript, no dependencies.
========================================================= */
(function () {
  'use strict';

  /* ---------- 1. SPLASH SCREEN ---------- */
  const splash = document.getElementById('splash');
  window.addEventListener('load', () => {
    setTimeout(() => {
      splash.classList.add('hide');
      document.body.style.overflow = '';
    }, 1600);
  });
  document.body.style.overflow = 'hidden';
  setTimeout(() => { document.body.style.overflow = ''; }, 2000); // safety fallback

  /* ---------- 2. NAVBAR: scroll state + mobile toggle ---------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function onScrollNav() {
    if (window.scrollY > 30) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });

  /* ---------- 3. SCROLL REVEAL (fade up / down / zoom) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------- 4. RIPPLE BUTTON EFFECT ---------- */
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = btn.getBoundingClientRect();
      const circle = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      circle.className = 'ripple-circle';
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 650);
    });
  });

  /* ---------- 5. DATA: BEST SELLER, MENU, INSTAGRAM, REVIEW ---------- */
  const bestSellers = [
    { name: 'Kopi Susu Gula Aren', price: 'Rp 22.000', rating: 4.9, art: 1 },
    { name: 'Aneka Latte Signature', price: 'Rp 25.000', rating: 4.8, art: 2 },
    { name: 'Manual Brew V60', price: 'Rp 28.000', rating: 4.9, art: 3 },
    { name: 'Es Kopi Karamel', price: 'Rp 24.000', rating: 4.7, art: 4 },
    { name: 'Cappuccino Klasik', price: 'Rp 23.000', rating: 4.8, art: 1 },
  ];

  const menuItems = [
    { name: 'Espresso Single', cat: 'espresso', price: 'Rp 15.000', desc: 'Shot pekat, aroma kuat', icon: '☕' },
    { name: 'Espresso Double', cat: 'espresso', price: 'Rp 18.000', desc: 'Dua shot untuk yang butuh tenaga ekstra', icon: '☕' },
    { name: 'Americano', cat: 'espresso', price: 'Rp 19.000', desc: 'Espresso dengan air panas, ringan', icon: '☕' },
    { name: 'Kopi Susu Gula Aren', cat: 'latte', price: 'Rp 22.000', desc: 'Manis legit khas nusantara', icon: '🥛' },
    { name: 'Aneka Latte Signature', cat: 'latte', price: 'Rp 25.000', desc: 'Racikan latte andalan kami', icon: '🥛' },
    { name: 'Caramel Latte', cat: 'latte', price: 'Rp 24.000', desc: 'Perpaduan karamel dan susu lembut', icon: '🥛' },
    { name: 'Manual Brew V60', cat: 'manual', price: 'Rp 28.000', desc: 'Biji pilihan, diseduh perlahan', icon: '⏳' },
    { name: 'Manual Brew Vietnam Drip', cat: 'manual', price: 'Rp 27.000', desc: 'Kopi tetes ala Vietnam, kental pekat', icon: '⏳' },
    { name: 'Cokelat Panas', cat: 'noncoffee', price: 'Rp 20.000', desc: 'Cokelat premium untuk yang tak minum kopi', icon: '🍫' },
    { name: 'Matcha Latte', cat: 'noncoffee', price: 'Rp 23.000', desc: 'Matcha Jepang dengan susu segar', icon: '🍵' },
    { name: 'Croissant Butter', cat: 'snack', price: 'Rp 18.000', desc: 'Renyah berlapis, disajikan hangat', icon: '🥐' },
    { name: 'Roti Bakar Aneka', cat: 'snack', price: 'Rp 16.000', desc: 'Roti bakar isi cokelat atau keju', icon: '🍞' },
  ];

  const igPosts = ['☕','🎉','🥐','📷','🎁','⭐'];
  const reviews = [
    { name: 'Dinda A.', text: 'Kopi susu gula arennya juara, tempatnya juga nyaman buat kerja santai.', stars: 5 },
    { name: 'Fajar R.', text: 'Pelayanan ramah dan cepat, digital menunya memudahkan banget.', stars: 5 },
    { name: 'Salsa P.', text: 'Membershipnya worth it, sering dapat voucher ulang tahun.', stars: 4 },
  ];

  /* ---------- 6. RENDER: BEST SELLER SLIDER ---------- */
  const bsSlider = document.getElementById('bsSlider');
  function starIcons(n) { return '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n)); }

  bestSellers.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-photo art-coffee-${item.art}">
        <span class="rank">#${i + 1} Terlaris</span>
        ${cupSvg()}
      </div>
      <div class="product-body">
        <h3>${item.name}</h3>
        <div class="product-meta">
          <span class="price">${item.price}</span>
          <span>${starIcons(item.rating)} ${item.rating}</span>
        </div>
        <button class="product-order" data-name="${item.name}">Order Sekarang</button>
      </div>`;
    bsSlider.appendChild(card);
  });

  function cupSvg() {
    return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
      <circle cx="50" cy="50" r="46" fill="rgba(255,255,255,0.08)"/>
      <path d="M30 40 H70 L65 70 A6 6 0 0 1 59 76 H41 A6 6 0 0 1 35 70 Z" fill="rgba(255,255,255,0.9)"/>
      <path d="M70 46 C 82 46, 82 62, 70 62" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="3"/>
    </svg>`;
  }

  document.getElementById('bsPrev').addEventListener('click', () => bsSlider.scrollBy({ left: -270, behavior: 'smooth' }));
  document.getElementById('bsNext').addEventListener('click', () => bsSlider.scrollBy({ left: 270, behavior: 'smooth' }));

  bsSlider.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-order')) {
      openWhatsApp(`Halo, saya ingin memesan ${e.target.dataset.name}.`);
    }
  });

  /* ---------- 7. RENDER + FILTER: DIGITAL MENU ---------- */
  const menuGrid = document.getElementById('menuGrid');
  const menuEmpty = document.getElementById('menuEmpty');
  const menuSearch = document.getElementById('menuSearch');
  const menuFilters = document.getElementById('menuFilters');
  let activeCat = 'all';

  const catColor = {
    espresso: '#5C3B2E', latte: '#C98A4A', manual: '#8C5A3C',
    noncoffee: '#A8672E', snack: '#7A4A32'
  };

  function renderMenu() {
    const query = menuSearch.value.trim().toLowerCase();
    menuGrid.innerHTML = '';
    const filtered = menuItems.filter(item => {
      const matchCat = activeCat === 'all' || item.cat === activeCat;
      const matchQuery = item.name.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card reveal in';
      card.innerHTML = `
        <div class="menu-thumb" style="background:${catColor[item.cat]}22;">${item.icon}</div>
        <div class="menu-info">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <span class="price">${item.price}</span>
        </div>`;
      menuGrid.appendChild(card);
    });
    menuEmpty.hidden = filtered.length !== 0;
  }

  menuFilters.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    menuFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCat = chip.dataset.cat;
    renderMenu();
  });
  menuSearch.addEventListener('input', renderMenu);
  renderMenu();

  /* ---------- 8. MEMBERSHIP PROGRESS BAR ---------- */
  const pointBar = document.getElementById('pointBar');
  const pointsTarget = 1000;
  const pointsNow = 640;
  document.getElementById('pointNow').textContent = pointsNow;

  const membershipCard = document.querySelector('.membership-card');
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        pointBar.style.width = Math.round((pointsNow / pointsTarget) * 100) + '%';
        barIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  if (membershipCard) barIo.observe(membershipCard);

  /* ---------- 9. INSTAGRAM GRID ---------- */
  const igGrid = document.getElementById('igGrid');
  igPosts.forEach((emoji, i) => {
    const tile = document.createElement('a');
    tile.href = 'https://instagram.com';
    tile.target = '_blank';
    tile.rel = 'noopener';
    tile.className = 'ig-tile reveal in';
    tile.style.background = `linear-gradient(135deg, #5C3B2E ${i * 12}%, #C98A4A)`;
    tile.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:1.8rem;">${emoji}</div><div class="ig-overlay">Lihat Post</div>`;
    igGrid.appendChild(tile);
  });

  /* ---------- 10. GOOGLE REVIEW GRID ---------- */
  const reviewGrid = document.getElementById('reviewGrid');
  reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card reveal in';
    card.innerHTML = `
      <span class="stars">${starIcons(r.stars)}</span>
      <p>"${r.text}"</p>
      <span class="review-author">${r.name}</span>`;
    reviewGrid.appendChild(card);
  });

  /* ---------- 11. WHATSAPP FLOATING PANEL ---------- */
  const waBtn = document.getElementById('waBtn');
  const waPanel = document.getElementById('waPanel');
  const waSend = document.getElementById('waSend');
  const WA_NUMBER = '6281234567890';

  function openWhatsApp(message) {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }

  waBtn.addEventListener('click', () => {
    waPanel.hidden = !waPanel.hidden;
  });

  waSend.addEventListener('click', (e) => {
    e.preventDefault();
    openWhatsApp('Halo Aneka Coffee, saya ingin bertanya.');
  });

  document.querySelectorAll('.wa-quick button').forEach(btn => {
    btn.addEventListener('click', () => openWhatsApp(btn.dataset.msg));
  });

  document.addEventListener('click', (e) => {
    if (!waPanel.hidden && !e.target.closest('.wa-float')) waPanel.hidden = true;
  });

  /* ---------- 12. GOOGLE MAPS BUTTON ---------- */
  const mapsBtn = document.getElementById('mapsBtn');
  mapsBtn.href = 'https://www.google.com/maps/search/?api=1&query=Aneka+Coffee+Bogor';

  /* ---------- 13. TO-TOP BUTTON ---------- */
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) toTop.classList.add('show');
    else toTop.classList.remove('show');
  }, { passive: true });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

})();
