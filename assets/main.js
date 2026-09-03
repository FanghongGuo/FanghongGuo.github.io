document.documentElement.classList.add('js');

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: .08 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const people = [
  {
    name: 'Fanghong Guo',
    role: 'Principal Investigator',
    topics: 'Distributed optimization · Microgrid control · Cyber-physical energy systems',
    initials: 'FG'
  }
];

const peopleGrid = document.getElementById('peopleGrid');
if (peopleGrid) {
  peopleGrid.innerHTML = people.map(p => `
    <article class="person reveal visible">
      <div class="avatar">${p.initials}</div>
      <h3>${p.name}</h3>
      <p>${p.role}</p>
      <p>${p.topics}</p>
    </article>
  `).join('');
}

/* Homepage publications are rendered from the same data source as publications.html. */
const homePublications = document.getElementById('homePublications');
if (homePublications) {
  const papers = [...(window.PUBLICATIONS || [])].filter(p => p.featured).sort((a, b) => b.year - a.year);

  homePublications.innerHTML = papers.map(p => `
    <article class="pub-item reveal visible">
      <span class="pub-year">${p.year}</span>
      <div>
        <h3>
          <a href="paper.html?id=${encodeURIComponent(p.id)}">${p.title}</a>
        </h3>
        <p>${p.authors} · <i>${p.venue}</i></p>
        <div class="pub-pill">${p.area}</div>
      </div>
      <a class="pub-arrow" href="paper.html?id=${encodeURIComponent(p.id)}" aria-label="Open ${p.title}">→</a>
    </article>
  `).join('') || '<div class="empty-state">No publications have been added yet.</div>';
}

const canvas = document.getElementById('network-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, pts;
  const resize = () => {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = window.innerHeight * devicePixelRatio;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    pts = Array.from({ length: Math.min(48, Math.floor(innerWidth / 25)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .18 * devicePixelRatio,
      vy: (Math.random() - .5) * .18 * devicePixelRatio
    }));
  };
  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(84,214,200,.7)';
    ctx.strokeStyle = 'rgba(117,167,255,.12)';
    pts.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5 * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const d = Math.hypot(dx, dy);
        if (d < 160 * devicePixelRatio) {
          ctx.globalAlpha = 1 - d / (160 * devicePixelRatio);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    });
    requestAnimationFrame(draw);
  };
  resize();
  draw();
  window.addEventListener('resize', resize);
}
