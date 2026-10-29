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
    box.append(el("article", { className: "card" }, [
      el("h3", { textContent: p.title }),
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

// Skills, contact links, footer
$("#skillList").append(...Object.entries(SKILLS).map(([group, items]) =>
  el("div", {}, [el("h3", { textContent: group }), el("ul", {}, items.map((i) => el("li", { textContent: i })))])));
$("#links").append(...SITE.links.map((l) => el("a", { href: l.url, textContent: l.label, rel: "noopener" })));
$("#year").textContent = new Date().getFullYear();
renderFilters(); renderProjects();

// One-time headline typing effect (skipped if reduced motion is on)
const h1 = $("#typed");
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
