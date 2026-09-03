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
        <p>请从论文列表重新进入。</p>
      </div>
    </section>
  `;

} else {

  document.title = `${paper.title} | Guo Research Group`;

  /* =========================
     Figures
  ========================= */

  const gallery = Array.isArray(paper.gallery) ? paper.gallery : [];

  const hasFigures =
    Boolean(paper.heroImage) ||
    gallery.length > 0;

  const figuresHtml = hasFigures ? `
    <article class="paper-panel">

      <div class="section-tag">FIGURES</div>
      <h2>Method & Experimental Results</h2>

      ${
        paper.heroImage
          ? `
            <figure class="paper-hero-figure">
              <img
                src="${paper.heroImage}"
                alt="${paper.title}"
                loading="lazy"
              >
              ${
                paper.heroCaption
                  ? `<figcaption>${paper.heroCaption}</figcaption>`
                  : ''
              }
            </figure>
          `
          : ''
      }

      ${
        gallery.length > 0
          ? `
            <div class="paper-gallery">

              ${gallery.map(item => `
                <figure class="paper-gallery-item">

                  <img
                    src="${item.src}"
                    alt="${item.caption || paper.title}"
                    loading="lazy"
                  >

                  ${
                    item.caption
                      ? `<figcaption>${item.caption}</figcaption>`
                      : ''
                  }

                </figure>
              `).join('')}

            </div>
          `
          : ''
      }

    </article>
  ` : '';

  /* =========================
     Main page
  ========================= */

  root.innerHTML = `

    <section class="page-hero">

      <div class="container">

        <a class="back-link" href="publications.html">
          ← All publications
        </a>

        <div class="section-tag">${paper.area}</div>

        <h1 class="paper-title">
          ${paper.title}
        </h1>

        <p class="paper-authors">
          ${paper.authors}
        </p>

        <p class="paper-venue">
          ${paper.venue} · ${paper.year}
        </p>

        <div class="paper-tags">

          ${(paper.tags || [])
            .map(t => `<span>${t}</span>`)
            .join('')}

        </div>

      </div>

    </section>


    <section
      class="section"
      style="padding-top:24px"
    >

      <div class="container paper-layout">


        <main class="paper-main">


          <!-- Overview -->

          <article class="paper-panel">

            <div class="section-tag">
              OVERVIEW
            </div>

            <h2>
              What is this paper about?
            </h2>

            <p>
              ${paper.summary}
            </p>

          </article>


          <!-- Motivation -->

          <article class="paper-panel">

            <div class="section-tag">
              MOTIVATION
            </div>

            <h2>
              Why does it matter?
            </h2>

            <p>
              ${paper.motivation}
            </p>

          </article>


          <!-- Method -->

          <article class="paper-panel">

            <div class="section-tag">
              KEY IDEA
            </div>

            <h2>
              How to understand the method
            </h2>

            <ul>

              ${(paper.method || [])
                .map(x => `<li>${x}</li>`)
                .join('')}

            </ul>

          </article>


          <!-- Figures -->

          ${figuresHtml}


          <!-- Results -->

          <article class="paper-panel">

            <div class="section-tag">
              RESULTS & IMPACT
            </div>

            <h2>
              What should readers take away?
            </h2>

            <p>
              ${paper.results}
            </p>

            ${
              paper.sourceNote
                ? `
                  <div class="callout">
                    <b>Source note.</b>
                    ${paper.sourceNote}
                  </div>
                `
                : ''
            }

          </article>


          <!-- Code -->

          <article
            class="paper-panel"
            id="code"
          >

            <div class="section-tag">
              CODE & REPRODUCTION
            </div>

            <h2>
              Code
            </h2>

            ${
              paper.codeAvailable
                ? `
                  <p>
                    代码已经公开，可从下面的入口进入。
                  </p>

                  <a
                    class="btn primary"
                    href="${paper.codeRepo || paper.codePath}"
                    ${
                      paper.codeRepo
                        ? 'target="_blank" rel="noreferrer"'
                        : ''
                    }
                  >
                    Open code →
                  </a>
                `
                : `
                  <p>
                    当前资料中没有提供这篇论文的公开代码，
                    因此网页不会虚构代码仓库。
                    站点已经预留
                    <code>${paper.codePath || ''}</code>
                    目录。
                    上传代码后，将
                    <code>codeAvailable</code>
                    改为
                    <code>true</code>
                    即可自动显示代码入口。
                  </p>

                  <span class="status-pill">
                    Code not uploaded yet
                  </span>
                `
            }

          </article>


          <!-- Citation -->

          <article class="paper-panel">

            <div class="section-tag">
              CITATION
            </div>

            <h2>
              BibTeX
            </h2>

            <div style="position:relative">

              <button
                class="copy-btn"
                id="copyBib"
              >
                Copy
              </button>

              <pre
                class="bibtex"
                id="bibtex"
              ></pre>

            </div>

            <p class="admin-note">
              BibTeX 目前仅使用现有资料中的基础元数据。
              卷期、页码和 DOI 可在核对论文原文后继续补充。
            </p>

          </article>


        </main>


        <!-- Sidebar -->

        <aside class="paper-sidebar">


          <div class="side-card">

            <h3>
              Paper information
            </h3>

            <div class="key-facts">

              <div>
                <span>Year</span>
                <b>${paper.year}</b>
              </div>

              <div>
                <span>Venue</span>
                <b>${paper.venue}</b>
              </div>

              <div>
                <span>Research area</span>
                <b>${paper.area}</b>
              </div>

            </div>

          </div>


          <div class="side-card">

            <h3>
              Resources
            </h3>

            ${
              paper.paperUrl
                ? `
                  <a
                    class="btn ghost"
                    href="${paper.paperUrl}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Paper / Publisher ↗
                  </a>
                `
                : `
                  <span class="status-pill">
                    Paper URL to be added
                  </span>
                `
            }


            ${
              paper.doi
                ? `
                  <a
                    class="btn ghost"
                    href="https://doi.org/${paper.doi}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DOI ↗
                  </a>
                `
                : ''
            }


            ${
              paper.codeAvailable
                ? `
                  <a
                    class="btn primary"
                    href="${paper.codeRepo || paper.codePath}"
                    ${
                      paper.codeRepo
                        ? 'target="_blank" rel="noreferrer"'
                        : ''
                    }
                  >
                    Code →
                  </a>
                `
                : `
                  <a
                    class="btn ghost"
                    href="#code"
                  >
                    Code status
                  </a>
                `
            }

          </div>


        </aside>

      </div>

    </section>
  `;


  /* =========================
     BibTeX
  ========================= */

  const bibtex = document.getElementById('bibtex');

  if (bibtex) {
    bibtex.textContent = paper.bibtex || '';
  }


  const copyBtn =
    document.getElementById('copyBib');

  if (copyBtn) {

    copyBtn.addEventListener(
      'click',
      async () => {

        try {

          await navigator.clipboard.writeText(
            paper.bibtex || ''
          );

          copyBtn.textContent =
            'Copied';

          setTimeout(
            () =>
              copyBtn.textContent =
              'Copy',
            1200
          );

        } catch {

          copyBtn.textContent =
            'Select text';

        }

      }
    );

  }

}
