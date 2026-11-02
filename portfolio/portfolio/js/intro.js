const $ = (selector) => document.querySelector(selector);
const externalLink = (label, url) => Object.assign(document.createElement("a"), {
  href: url,
  target: "_blank",
  rel: "noopener noreferrer",
  textContent: label
});

let language = "en";
try {
  language = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
} catch {}

function renderIntro() {
  const content = CONTENT[language];
  document.documentElement.lang = language;
  document.title = content.title;
  $("meta[name='description']").content = content.description;
  $("#introLogo").setAttribute("aria-label", `${SITE.name}, ${language === "fr" ? "accueil" : "home"}`);
  $("#introEyebrow").textContent = content.intro.eyebrow;
  $("#introName").textContent = SITE.name;
  $("#introHeadline").textContent = content.headline;
  const summary = $("#introSummary");
  const polytechIndex = content.summary.indexOf(SITE.polytechName);
  if (polytechIndex < 0) {
    summary.textContent = content.summary;
  } else {
    summary.replaceChildren(
      content.summary.slice(0, polytechIndex),
      externalLink(SITE.polytechName, SITE.polytechUrl),
      content.summary.slice(polytechIndex + SITE.polytechName.length)
    );
  }
  $("#exploreMore").textContent = content.intro.explore;
  $("#contactIntro").textContent = content.intro.contact;
  $("#contactIntro").href = SITE.links.find((link) => link.key === "email").url;
  $("#overviewTitle").textContent = content.intro.widgetsTitle;
  $("#overviewNote").textContent = content.intro.widgetsNote;
  $("#overviewWidgets").replaceChildren(...content.intro.widgets.map((widget) => {
    const card = document.createElement("a");
    card.className = "overview-widget";
    card.href = `portfolio.html?section=${encodeURIComponent(widget.section)}`;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    const title = document.createElement("h3");
    title.textContent = content.sections[widget.section];
    const description = document.createElement("p");
    description.textContent = widget.description;
    card.append(title, description);
    return card;
  }));
  $("footer p").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  $("[data-language='en']").setAttribute("aria-pressed", language === "en");
  $("[data-language='fr']").setAttribute("aria-pressed", language === "fr");
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
    renderIntro();
  });
});

renderIntro();
