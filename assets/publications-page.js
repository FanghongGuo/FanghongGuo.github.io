const papers = window.PUBLICATIONS || [];
const grid = document.getElementById('papersGrid');
const search = document.getElementById('paperSearch');
const chips = document.getElementById('filterChips');
const resultCount = document.getElementById('resultCount');
let active = 'All';

const areas = ['All', ...new Set(papers.map(p => p.area))];
chips.innerHTML = areas.map(a => `<button class="chip ${a === 'All' ? 'active' : ''}" data-area="${a}">${a}</button>`).join('');

function render() {
  const q = (search.value || '').trim().toLowerCase();
  const filtered = papers
    .filter(p => (active === 'All' || p.area === active) && [p.title, p.authors, p.venue, p.area, ...(p.tags || [])].join(' ').toLowerCase().includes(q))
    .sort((a, b) => b.year - a.year);

  resultCount.textContent = `${filtered.length} publication${filtered.length === 1 ? '' : 's'}`;

  grid.innerHTML = filtered.map(p => `
    <article class="paper-card">
      <div class="meta">
        <span>${p.year} · ${p.venue}</span>
        <span class="status-pill ${p.codeAvailable ? 'code' : ''}">${p.codeAvailable ? 'Code available' : 'Code not available'}</span>
      </div>

      <a href="paper.html?id=${encodeURIComponent(p.id)}">
        <h2>${p.title}</h2>
      </a>

      <p class="authors">${p.authors}</p>
      <p class="summary">${p.summary}</p>

      <div class="paper-tags">
        ${(p.tags || []).map(t => `<span>${t}</span>`).join('')}
      </div>

      <div class="paper-actions">
        <a class="btn small primary" href="paper.html?id=${encodeURIComponent(p.id)}">View paper details →</a>
        ${p.paperUrl ? `<a class="btn small ghost" href="${p.paperUrl}" target="_blank" rel="noreferrer">Paper ↗</a>` : ''}
        ${p.codeAvailable ? `<a class="btn small ghost" href="${p.codeRepo || p.codePath}" ${p.codeRepo ? 'target="_blank" rel="noreferrer"' : ''}>Code ↗</a>` : ''}
      </div>
    </article>
  `).join('') || '<div class="empty-state">No publications match the current filter.</div>';
}

chips.addEventListener('click', e => {
  if (!e.target.matches('.chip')) return;
  active = e.target.dataset.area;
  chips.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c === e.target));
  render();
});

search.addEventListener('input', render);
render();
