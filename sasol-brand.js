(() => {
  'use strict';

  const BRAND = 'Sasol Energy';
  const COPY = [
    [/\bYami Super App\b/gi, BRAND],
    [/\bYami\b/g, BRAND],
    [/\bYAMI\b/g, 'SASOL ENERGY']
  ];

  const brandStyle = `
    :root { --sasol-blue:#003b71; --sasol-cyan:#00a8e0; --sasol-ink:#142d4b; --sasol-mist:#eef7fb; }
    html, body, ion-app, ion-router-outlet, .ion-page { background:#fff !important; --background:#fff !important; }
    html:has(.sasol-dashboard), body:has(.sasol-dashboard), ion-app:has(.sasol-dashboard), ion-router-outlet:has(.sasol-dashboard), .ion-page:has(.sasol-dashboard) { background:#fff !important; background-image:none !important; }
    html:has(.yami-sync-card) { background:#fff !important; background-image:none !important; }
    #yami-watermarks { display:none !important; }
    ion-content:has(.yami-sync-card), ion-content:has(.sasol-dashboard), ion-content:has(.yami-sync-card)::part(background) { --background:#fff !important; background:#fff !important; background-image:none !important; }
    .sasol-dashboard { position:relative; z-index:11; margin:12px 16px 0; overflow:hidden; border:1px solid #d6e8f1; border-radius:22px; background:#fff; box-shadow:0 10px 26px rgba(0,59,113,.12); }
    .sasol-dashboard__top { display:flex; align-items:center; justify-content:space-between; gap:14px; min-height:86px; padding:16px 17px; background:linear-gradient(116deg,#fff 0%,#f2fbff 100%); }
    .sasol-dashboard__logo { width:158px; max-width:58%; height:auto; object-fit:contain; mix-blend-mode:multiply; }
    .sasol-dashboard__mark { width:70px; height:58px; flex:0 0 70px; border-radius:15px; background:linear-gradient(135deg,rgba(0,59,113,.07),rgba(0,168,224,.16)),url('/assets/brand/sasol-station.jpg') center/cover; }
    .sasol-dashboard__copy { padding:0 17px 16px; color:#456277; font:600 12px/1.45 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; }
    .sasol-dashboard__copy strong { display:block; margin-bottom:3px; color:var(--sasol-blue); font-size:15px; }
    ion-card.yami-sync-card, .card-wrapper.yami-sync-card { --background:#fff !important; background:#fff !important; border:1px solid #d6e8f1 !important; box-shadow:0 8px 22px rgba(0,59,113,.11) !important; }
    .card-wrapper.yami-sync-card { background:linear-gradient(130deg,#003b71,#00549a) !important; border:0 !important; box-shadow:0 10px 26px rgba(0,59,113,.24) !important; }
    .card-wrapper.yami-sync-card .balance-grid { grid-template-columns:64px auto 1fr !important; }
    .sasol-logo-mark { display:grid; place-items:center; width:52px; height:52px; overflow:hidden; border-radius:14px; background:#fff; box-shadow:0 5px 13px rgba(0,0,0,.14); }
    .sasol-logo-mark img { display:block; width:78px; max-width:none; mix-blend-mode:multiply; }
    .card-wrapper.yami-sync-card .grid-col h5 { color:rgba(255,255,255,.72) !important; }
    .card-wrapper.yami-sync-card .grid-col.last { color:#fff !important; }
    .yami-money-action { background-color:var(--sasol-blue) !important; }
    .yami-money-icon, .yami-service-icon { color:var(--sasol-blue) !important; }
    .yami-quick-title, ion-card.yami-sync-card ion-card-subtitle { color:var(--sasol-ink) !important; text-shadow:none !important; }
    ion-card.bills-wrapper.yami-sync-card { background:transparent !important; box-shadow:none !important; border:0 !important; }
    ion-card.bills-wrapper.yami-sync-card ion-col { box-shadow:0 8px 19px rgba(0,59,113,.14) !important; }
    .app { background:#fff !important; box-shadow:none !important; }
    .head { background:linear-gradient(135deg,#003b71,#00579e) !important; }
    .wallet-mark, .primary { background:linear-gradient(135deg,#003b71,#006ab2) !important; box-shadow:0 7px 16px rgba(0,59,113,.22) !important; }
    .wallet-mark { font-size:0 !important; }
    .wallet-mark::after { content:'S'; font-size:20px; font-style:normal; font-weight:900; }
    .brand { font-size:0 !important; min-width:126px; min-height:32px; background:url('/assets/brand/sasol-logo.png') left center/126px auto no-repeat; filter:none; }
    .brand::after { display:none !important; }
    .back, .mini-back, [data-yami-back] { background:var(--sasol-blue) !important; }
    .back:hover, .mini-back:hover, [data-yami-back]:hover { background:#006ab2 !important; }
    .sasol-promo-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:8px 16px 22px; }
    .sasol-promo { min-height:112px; overflow:hidden; border-radius:18px; padding:13px; background-size:cover; background-position:center; box-shadow:0 7px 18px rgba(0,59,113,.15); color:#fff; }
    .sasol-promo::before { position:absolute; content:''; }
    .sasol-promo b { display:block; max-width:100px; font:800 13px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; text-shadow:0 1px 3px rgba(0,0,0,.42); }
    .sasol-promo span { display:block; margin-top:4px; color:#e8f8ff; font-size:10px; }
    .sasol-promo--plant { background-image:linear-gradient(180deg,rgba(0,42,82,.08),rgba(0,42,82,.82)),url('/assets/brand/sasol-plant.jpg'); }
    .sasol-promo--station { background-image:linear-gradient(180deg,rgba(0,42,82,.08),rgba(0,42,82,.82)),url('/assets/brand/sasol-station.jpg'); }
    .sasol-notice { margin:0 16px 22px; padding:12px 14px; border-radius:14px; background:var(--sasol-mist); color:#466276; font:600 11px/1.45 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; }
    .sasol-notice b { color:var(--sasol-blue); }
  `;

  const replaceText = (value) => COPY.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);

  const replaceNode = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const next = replaceText(node.nodeValue || '');
      if (next !== node.nodeValue) node.nodeValue = next;
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.tagName === 'SCRIPT' || node.tagName === 'STYLE') return;
    ['title', 'aria-label', 'placeholder', 'alt'].forEach((attribute) => {
      if (!node.hasAttribute(attribute)) return;
      const current = node.getAttribute(attribute);
      const next = replaceText(current || '');
      if (next !== current) node.setAttribute(attribute, next);
    });
    node.childNodes.forEach(replaceNode);
  };

  const applyText = (root = document.body) => {
    if (!root) return;
    replaceNode(root);
    const nextTitle = replaceText(document.title || '');
    document.title = nextTitle === 'Sasol Energy' ? 'Sasol Energy Hub' : nextTitle;
  };

  const mountDashboard = () => {
    const balanceCard = document.querySelector('ion-card.card-wrapper');
    if (!balanceCard || document.querySelector('.sasol-dashboard')) return;

    const dashboard = document.createElement('section');
    dashboard.className = 'sasol-dashboard';
    dashboard.innerHTML = `
      <div class="sasol-dashboard__top">
        <img class="sasol-dashboard__logo" src="/assets/brand/sasol-logo.png" alt="Sasol">
        <div class="sasol-dashboard__mark" aria-hidden="true"></div>
      </div>
      <div class="sasol-dashboard__copy"><strong>Everyday energy, in one place.</strong>Manage services, purchases and payments in this interactive demonstration.</div>
    `;
    balanceCard.before(dashboard);

    const promos = document.createElement('section');
    promos.className = 'sasol-promo-grid';
    promos.innerHTML = `
      <div class="sasol-promo sasol-promo--station"><b>Fuel &amp; rewards</b><span>Find more ways to move.</span></div>
      <div class="sasol-promo sasol-promo--plant"><b>Energy for progress</b><span>Powering everyday possibility.</span></div>
    `;
    const notice = document.createElement('p');
    notice.className = 'sasol-notice';
    notice.innerHTML = '<b>Demo environment.</b> This frontend uses simulated balances, purchases and bookings. No real money moves.';
    const shell = balanceCard.closest('ion-content') || balanceCard.parentElement;
    shell?.append(promos, notice);
  };

  const replaceBalanceMark = () => {
    document.querySelectorAll('.yami-logo-mark').forEach((mark) => {
      if (mark.classList.contains('sasol-logo-mark')) return;
      mark.className = 'sasol-logo-mark';
      mark.innerHTML = '<img src="/assets/brand/sasol-logo.png" alt="Sasol">';
    });
  };

  const boot = () => {
    if (!document.getElementById('sasol-brand-style')) {
      const style = document.createElement('style');
      style.id = 'sasol-brand-style';
      style.textContent = brandStyle;
      document.head.append(style);
    }
    document.head.append(document.getElementById('sasol-brand-style'));
    applyText();
    mountDashboard();
    replaceBalanceMark();
  };

  const observer = new MutationObserver((entries) => {
    entries.forEach((entry) => entry.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) replaceNode(node);
    }));
    mountDashboard();
    replaceBalanceMark();
  });

  const start = () => {
    boot();
    observer.observe(document.documentElement, { childList:true, subtree:true });
    window.setTimeout(boot, 250);
    window.setTimeout(boot, 1000);
    window.setTimeout(boot, 2200);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once:true });
  else start();
})();
