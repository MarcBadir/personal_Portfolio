const $ = (s) => document.querySelector(s);
const el = (tag, props = {}, kids = []) => {
  const n = Object.assign(document.createElement(tag), props);
  kids.forEach((k) => n.append(k));
  return n;
};

// Projects + tag filter
const tags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];
let active = "All";

function renderProjects() {
  const box = $("#projects");
  box.replaceChildren();
  PROJECTS.filter((p) => active === "All" || p.tags.includes(active)).forEach((p) => {
    const row = el("div", { className: "row" });
    if (p.demo) row.append(el("a", { href: p.demo, target: "_blank", rel: "noopener", textContent: "Live demo" }));
    if (p.code) row.append(el("a", { href: p.code, target: "_blank", rel: "noopener", textContent: "Source code" }));
    const heading = el("div", { className: "entry-header" }, [el("h3", { textContent: p.title })]);
    if (p.date) heading.append(el("span", { className: "entry-date", textContent: p.date }));
    box.append(el("article", { className: "card" }, [
      heading,
      el("p", { textContent: p.description }),
      el("ul", { className: "tags" }, p.tags.map((t) => el("li", { textContent: t }))),
      row
    ]));
  });
}

function renderFilters() {
  const f = $("#filters");
  f.replaceChildren(...tags.map((t) => {
    const b = el("button", { className: "chip", type: "button", textContent: t });
    b.setAttribute("aria-pressed", t === active);
    b.onclick = () => { active = t; renderFilters(); renderProjects(); };
    return b;
  }));
}

function renderExperience() {
  const list = $("#experienceList");
  list.replaceChildren(...EXPERIENCE.map((item) => el("article", { className: "entry" }, [
    el("div", { className: "entry-header" }, [
      el("h3", { textContent: item.company }),
      el("span", { className: "entry-date", textContent: item.date })
    ]),
    el("p", { className: "entry-role", textContent: item.role }),
    el("ul", {}, item.details.map((detail) => el("li", { textContent: detail })))
  ])));
}

function renderEducation() {
  const list = $("#educationList");
  list.replaceChildren(...EDUCATION.map((item) => el("article", { className: "entry" }, [
    el("div", { className: "entry-header" }, [
      el("h3", { textContent: item.institution }),
      el("span", { className: "entry-date", textContent: item.date })
    ]),
    el("p", { className: "entry-role", textContent: item.program }),
    el("p", { className: "entry-location", textContent: item.location })
  ])));
}

// Skills, contact links, footer
$("#skillList").append(...Object.entries(SKILLS).map(([group, items]) =>
  el("div", {}, [el("h3", { textContent: group }), el("ul", {}, items.map((i) => el("li", { textContent: i })))])));
$("#links").append(...SITE.links.map((l) => el("a", { href: l.url, textContent: l.label, rel: "noopener" })));
$("#summary").textContent = SITE.summary;
$("#aboutText").textContent = SITE.about;
$("#contactNote").textContent = SITE.contactNote;
$(".mark").textContent = SITE.initials;
$("footer p").replaceChildren("© ", el("span", { id: "year", textContent: new Date().getFullYear() }), ` ${SITE.name}`);
$("#languageList").append(...LANGUAGES.map((language) =>
  el("li", {}, [el("strong", { textContent: language.name }), ` - ${language.level}`])));
$("#interestList").append(...INTERESTS.map((interest) => el("li", { textContent: interest })));
renderFilters(); renderProjects(); renderExperience(); renderEducation();

// One-time headline typing effect (skipped if reduced motion is on)
const h1 = $("#typed");
h1.setAttribute("aria-label", SITE.headline);
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const text = SITE.headline; let i = 0;
  const caret = el("span", { className: "caret" });
  caret.setAttribute("aria-hidden", "true");
  h1.textContent = ""; h1.append(caret);
  const t = setInterval(() => {
    caret.before(text[i++]);
    if (i >= text.length) { clearInterval(t); setTimeout(() => caret.remove(), 2500); }
  }, 55);
} else { h1.textContent = SITE.headline; }
