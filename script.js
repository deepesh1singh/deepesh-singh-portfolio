/* ============================================================
   Deepesh Singh — Portfolio
   Rendering + interaction
   ============================================================ */

/* ---------- Icon set (inline SVG, stroke = currentColor) ---------- */

const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L1 2h7.4l5.1 6.7L18.9 2zm-1.3 18h1.9L7.5 4h-2l12.1 16z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/></svg>',
  threads: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3c-4.5 0-7.5 2.9-7.5 8.5S7.3 21 12 21c3.4 0 5.6-1.6 5.9-4.3.3-2.6-1.2-4-4.2-4.5-2.4-.4-3.9.2-3.9 1.6 0 1 1 1.7 2.5 1.5 2.6-.3 3.3-2.3 3.2-4.4-.1-2.8-1.9-4.4-4.8-4.3"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.51-3.5-.7-3.72-1.34-.13-.34-.68-1.34-1.16-1.62-.4-.22-.97-.75-.01-.77.9-.01 1.54.85 1.76 1.2 1.03 1.76 2.68 1.26 3.34.96.1-.76.4-1.26.73-1.55-2.55-.3-5.23-1.32-5.23-5.85 0-1.29.44-2.35 1.16-3.18-.12-.3-.5-1.5.11-3.13 0 0 .95-.31 3.12 1.21a10.4 10.4 0 0 1 5.68 0c2.17-1.52 3.12-1.21 3.12-1.21.61 1.63.23 2.83.11 3.13.72.83 1.16 1.88 1.16 3.18 0 4.54-2.69 5.55-5.25 5.84.42.37.78 1.09.78 2.2 0 1.59-.01 2.87-.01 3.27 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
  codeforces: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="10" width="5" height="11" rx="1.3"/><rect x="9.5" y="5.5" width="5" height="15.5" rx="1.3"/><rect x="17" y="2" width="5" height="19" rx="1.3"/></svg>',
};

const iconOr = (key, fallback = "code") => ICONS[key] || ICONS[fallback];

/* ---------- Small render helpers ---------- */

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function imageBlock(slug, altText, extraClass = "", extraStyle = "") {
  // Image filename convention: kebab-case project/internship name, stored as .png in /image.
  // Falls back to a labeled placeholder if the file has not been supplied yet.
  const styleAttr = extraStyle ? ` style="${extraStyle}"` : "";
  return `
    <div class="${extraClass}"${styleAttr}>
      <img src="image/${slug}.png" alt="${altText}" loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
      <div class="img-placeholder" style="display:flex; align-items:center; justify-content:center;">${altText}</div>
    </div>`;
}

/* ---------- Coursework ---------- */

function renderCoursework() {
  const list = document.getElementById("courseworkList");
  list.innerHTML = COURSEWORK.map((c) => `<li>${c}</li>`).join("");
}

/* ---------- Skills ---------- */

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (s) => `
    <div class="skill-card glass">
      <div class="skill-card-head">
        <span class="skill-icon">${iconOr(s.icon)}</span>
        <h3 class="skill-card-title">${s.group}</h3>
      </div>
      <div class="skill-tags">
        ${s.items.map((i) => `<span class="skill-tag">${i}</span>`).join("")}
      </div>
    </div>`
  ).join("");
}

/* ---------- Internships ---------- */

function renderInternships() {
  const list = document.getElementById("internshipList");
  list.innerHTML = INTERNSHIPS.map(
    (i) => `
    <article class="internship-card glass">
      ${imageBlock(i.image, i.org + " — " + i.role, "internship-image")}
      <div class="internship-body">
        <div class="internship-org-row">
          <h3 class="internship-org">${i.org}</h3>
          <span class="internship-period">${i.period}</span>
        </div>
        <p class="internship-role">${i.role}</p>
        <p class="internship-desc">${i.description}</p>
        <div class="internship-footer">
          <div class="tag-row">
            ${i.tags.map((t) => `<span class="mini-tag">${t}</span>`).join("")}
          </div>
          <a class="link-arrow" href="${i.link}" target="_blank" rel="noopener noreferrer">
            View repository ${ICONS.arrow}
          </a>
        </div>
      </div>
    </article>`
  ).join("");
}

let currentFilter = "All";

function renderProjectCard(p) {
  return `
    <article class="project-card glass" data-category="${p.category}">
      <div class="project-image">
        ${imageBlock(p.image, p.title, "", "position:absolute; inset:0;")}
        <span class="project-category-chip">${p.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-footer">
          <div class="project-tags">
            ${p.tags.slice(0, 2).map((t) => `<span class="mini-tag">${t}</span>`).join("")}
          </div>
          <a class="link-arrow" href="${p.link}" target="_blank" rel="noopener noreferrer" aria-label="View ${p.title} on GitHub">
            ${ICONS.arrow}
          </a>
        </div>
      </div>
    </article>`;
}

function renderProjects() {
  const grid = document.getElementById("projectGrid");
  grid.innerHTML = PROJECTS.map(renderProjectCard).join("");

  // category counts
  const counts = { Data: 0, Development: 0, Quant: 0 };
  PROJECTS.forEach((p) => (counts[p.category] = (counts[p.category] || 0) + 1));
  document.getElementById("countAll").textContent = PROJECTS.length;
  document.getElementById("countData").textContent = counts.Data || 0;
  document.getElementById("countDevelopment").textContent = counts.Development || 0;
  document.getElementById("countQuant").textContent = counts.Quant || 0;
}

function applyFilter(filter) {
  currentFilter = filter;
  const cards = document.querySelectorAll(".project-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    const match = filter === "All" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !match);
    if (match) visibleCount++;
  });

  const grid = document.getElementById("projectGrid");
  let noResults = grid.querySelector(".no-results");
  if (visibleCount === 0) {
    if (!noResults) {
      noResults = el(`<p class="no-results">No projects in this category yet.</p>`);
      grid.appendChild(noResults);
    }
  } else if (noResults) {
    noResults.remove();
  }

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function initFilterBar() {
  document.getElementById("filterBar").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    applyFilter(btn.dataset.filter);
  });
}

/* ---------- Coding profiles ---------- */

function renderCodingProfiles() {
  const grid = document.getElementById("codingProfiles");
  grid.innerHTML = CODING_PROFILES.map(
    (p) => `
    <a class="profile-card glass" href="${p.link}" target="_blank" rel="noopener noreferrer">
      <span class="profile-icon">${iconOr(p.icon)}</span>
      <div class="profile-info">
        <p class="profile-name">${p.name}</p>
        <p class="profile-detail">${p.detail}</p>
        <p class="profile-handle">${p.handle}</p>
      </div>
    </a>`
  ).join("");
}

/* ---------- Achievements ---------- */

function renderAchievements() {
  const list = document.getElementById("achievementList");
  list.innerHTML = ACHIEVEMENTS.map(
    (a) => `
    <li class="achievement-item">
      <span class="achievement-icon">${ICONS.check}</span>
      <p class="achievement-text">${a}</p>
    </li>`
  ).join("");
}

/* ---------- Contact ---------- */

function renderContact() {
  const grid = document.getElementById("contactGrid");
  grid.innerHTML = CONTACT.map(
    (c, idx) => `
    <a class="contact-card glass${idx === 0 ? " contact-wide" : ""}" href="${c.link}" target="_blank" rel="noopener noreferrer">
      <span class="contact-icon">${iconOr(c.icon)}</span>
      <div>
        <p class="contact-label">${c.label}</p>
        <p class="contact-value">${c.value}</p>
      </div>
    </a>`
  ).join("");
}

/* ---------- Nav: mobile toggle + scroll spy ---------- */

function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function initScrollSpy() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const map = new Map();
  navLinks.forEach((a) => {
    const id = a.getAttribute("href").replace("#", "");
    map.set(id, a);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = map.get(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.style.color = "");
          link.style.color = "var(--text-h)";
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((s) => observer.observe(s));
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderCoursework();
  renderSkills();
  renderInternships();
  renderProjects();
  renderCodingProfiles();
  renderAchievements();
  renderContact();

  initFilterBar();
  initNavToggle();
  initScrollSpy();
});
