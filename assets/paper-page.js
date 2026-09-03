const params = new URLSearchParams(location.search);
const id = params.get('id');
const paper = (window.PUBLICATIONS || []).find(p => p.id === id);
const root = document.getElementById('paperRoot');

if (!paper) {
  root.innerHTML = `
    <section class="section">
      <div class="container">
        <a class="back-link" href="publications.html">← Publications</a>
        <h1>Paper not found</h1>
        <p>Please return to the publication list and select a paper.</p>
      </div>
    </section>
  `;
} else {
  document.title = `${paper.title} | Guo Research Group`;

  const gallery = Array.isArray(paper.gallery) ? paper.gallery : [];
  const hasFigures = Boolean(paper.heroImage) || gallery.length > 0;

  const figuresHtml = hasFigures ? `
    <article class="paper-panel" id="figures">
      <div class="section-tag">FIGURES</div>
      <h2>Method & Experimental Results</h2>

      ${paper.heroImage ? `
        <figure class="paper-hero-figure">
          <img src="${paper.heroImage}" alt="${paper.heroCaption || paper.title}" loading="lazy">
          ${paper.heroCaption ? `<figcaption>${paper.heroCaption}</figcaption>` : ''}
        </figure>
      ` : ''}

      ${gallery.length ? `
        <div class="paper-gallery">
          ${gallery.map(item => `
            <figure class="paper-gallery-item">
              <img src="${item.src}" alt="${item.caption || paper.title}" loading="lazy">
              ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ''}
            </figure>
          `).join('')}
        </div>
      ` : ''}
    </article>
  ` : '';

  root.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <a class="back-link" href="publications.html">← All publications</a>
        <div class="section-tag">${paper.area}</div>
        <h1 class="paper-title">${paper.title}</h1>
        <p class="paper-authors">${paper.authors}</p>
        <p class="paper-venue">${paper.venue} · ${paper.year}</p>
        <div class="paper-tags">${(paper.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
      </div>
    </section>

    <section class="section" style="padding-top:24px">
      <div class="container paper-layout">
        <main class="paper-main">
          <article class="paper-panel">
            <div class="section-tag">OVERVIEW</div>
            <h2>What is this paper about?</h2>
            <p>${paper.summary}</p>
          </article>

          <article class="paper-panel">
            <div class="section-tag">MOTIVATION</div>
            <h2>Why does it matter?</h2>
            <p>${paper.motivation}</p>
          </article>

          <article class="paper-panel">
            <div class="section-tag">KEY IDEA</div>
            <h2>How to understand the method</h2>
            <ul>${(paper.method || []).map(x => `<li>${x}</li>`).join('')}</ul>
          </article>

          ${figuresHtml}

          <article class="paper-panel">
            <div class="section-tag">RESULTS & IMPACT</div>
            <h2>What should readers take away?</h2>
            <p>${paper.results}</p>
            ${paper.sourceNote ? `<div class="callout"><b>Source note.</b> ${paper.sourceNote}</div>` : ''}
          </article>

          <article class="paper-panel" id="code">
            <div class="section-tag">CODE & REPRODUCTION</div>
            <h2>Code</h2>
            ${paper.codeAvailable ? `
              <p>The source code is publicly available from the repository below.</p>
              <a class="btn primary" href="${paper.codeRepo || paper.codePath}" ${paper.codeRepo ? 'target="_blank" rel="noreferrer"' : ''}>Open code repository →</a>
            ` : `
              <p>The source code for this paper has not been uploaded yet. A repository or local code directory can be added later.</p>
              <span class="status-pill">Code not uploaded yet</span>
            `}
          </article>

          <article class="paper-panel">
            <div class="section-tag">CITATION</div>
            <h2>BibTeX</h2>
            <div style="position:relative">
              <button class="copy-btn" id="copyBib">Copy</button>
              <pre class="bibtex" id="bibtex"></pre>
            </div>
            <p class="admin-note">The BibTeX entry is based on the publication metadata currently stored on this website.</p>
          </article>
        </main>

        <aside class="paper-sidebar">
          <div class="side-card">
            <h3>Paper information</h3>
            <div class="key-facts">
              <div><span>Year</span><b>${paper.year}</b></div>
              <div><span>Venue</span><b>${paper.venue}</b></div>
              <div><span>Research area</span><b>${paper.area}</b></div>
            </div>
          </div>

          <div class="side-card">
            <h3>Resources</h3>
            ${paper.paperUrl ? `<a class="btn ghost" href="${paper.paperUrl}" target="_blank" rel="noreferrer">Paper / Publisher ↗</a>` : '<span class="status-pill">Paper URL to be added</span>'}
            ${paper.doi ? `<a class="btn ghost" href="https://doi.org/${paper.doi}" target="_blank" rel="noreferrer">DOI ↗</a>` : ''}
            ${paper.codeAvailable ? `<a class="btn primary" href="${paper.codeRepo || paper.codePath}" ${paper.codeRepo ? 'target="_blank" rel="noreferrer"' : ''}>Code →</a>` : '<a class="btn ghost" href="#code">Code status</a>'}
          </div>
        </aside>
      </div>
    </section>
  `;

  const figuresPanel = document.getElementById('figures');
  if (figuresPanel) {
    const figureImages = [...figuresPanel.querySelectorAll('img')];
    figureImages.forEach(img => {
      img.addEventListener('error', () => {
        const figure = img.closest('figure');
        if (figure) figure.style.display = 'none';
        const remaining = figureImages.some(other => other.complete && other.naturalWidth > 0);
        if (!remaining && figureImages.every(other => other.complete)) {
          figuresPanel.style.display = 'none';
        }
      });
    });
  }

  const bibtex = document.getElementById('bibtex');
  if (bibtex) bibtex.textContent = paper.bibtex || '';

  const copyBtn = document.getElementById('copyBib');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(paper.bibtex || '');
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1200);
      } catch {
        copyBtn.textContent = 'Select text';
      }
    });
  }
}
