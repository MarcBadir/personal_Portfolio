const $ = (selector) => document.querySelector(selector);
const make = (tag, properties = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), properties);
  children.forEach((child) => node.append(child));
  return node;
};

const params = new URLSearchParams(location.search);
const type = params.get("type");
const index = Number(params.get("index"));
const allowedTypes = ["experience", "projects", "education", "leadership"];
let language = "en";

try {
  language = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
} catch {}

function externalLink(label, href) {
  return make("a", { href, target: "_blank", rel: "noopener noreferrer", textContent: label });
}

function renderDetail() {
  const content = CONTENT[language];
  const entries = allowedTypes.includes(type) ? content[type] : [];
  const item = Number.isInteger(index) && index >= 0 ? entries[index] : null;
  document.documentElement.lang = language;
  document.title = item
    ? `${type === "experience" ? item.company : type === "projects" ? item.title : type === "education" ? item.program : item.role} - ${SITE.name}`
    : `${content.notFoundTitle} - ${SITE.name}`;
  $("meta[name='description']").content = content.description;
  $("#detailBack").textContent = content.detailBack;
  $("#detailBack").setAttribute("aria-label", content.detailBack);
  $("#detailDetailsTitle").textContent = content.detailDetailsTitle;
  $("#detailHighlightsTitle").textContent = content.detailHighlightsTitle;
  $("#detailResourcesTitle").textContent = content.detailResourcesTitle;
  $(".language-switch").setAttribute("aria-label", content.languageLabel);
  $("[data-language='en']").setAttribute("aria-pressed", language === "en");
  $("[data-language='fr']").setAttribute("aria-pressed", language === "fr");
  $("#detailYear").textContent = new Date().getFullYear();
  const heading = $("#detailTitle");
  const subtitle = $("#detailSubtitle");
  const date = $("#detailDate");
  const locationText = $("#detailLocation");
  const description = $("#detailDescription");
  const details = $("#detailBullets");
  const resources = $("#detailResources");
  const educationLinks = $("#detailEducationLinks");
  const notFound = $("#detailNotFound");
  const contentView = $("#detailContent");

  if (!item) {
    contentView.hidden = true;
    notFound.hidden = false;
    notFound.textContent = content.notFoundTitle;
    return;
  }
  contentView.hidden = false;
  notFound.hidden = true;
  $("#detailCategory").textContent = content.sections[type];
  if (type === "experience") {
    heading.replaceChildren(item.companyUrl ? externalLink(item.company, item.companyUrl) : item.company);
    subtitle.textContent = item.role;
    subtitle.hidden = false;
    description.hidden = true;
  } else if (type === "projects") {
    heading.textContent = item.title;
    subtitle.textContent = "";
    subtitle.hidden = true;
    description.textContent = item.description;
    description.hidden = false;
  } else if (type === "education") {
    heading.textContent = item.program;
    subtitle.replaceChildren(item.institutionUrl ? externalLink(item.institution, item.institutionUrl) : item.institution);
    subtitle.hidden = false;
    description.hidden = true;
    educationLinks.replaceChildren(...[
      item.programUrl ? externalLink(content.programLinkLabel, item.programUrl) : null
    ].filter(Boolean));
  } else {
    heading.textContent = item.role;
    subtitle.textContent = item.organization;
    subtitle.hidden = false;
    description.hidden = true;
  }
  if (type !== "education") educationLinks.replaceChildren();
  date.textContent = item.date || "";
  locationText.textContent = item.location || "";
  locationText.hidden = !item.location;
  details.replaceChildren(...(item.details || []).map((text) => make("li", { textContent: text })));
  details.hidden = !item.details?.length;
  $("#detailDetailsSection").hidden = !item.details?.length;
  const highlights = item.highlights || [];
  $("#detailHighlightsTitle").hidden = !highlights.length;
  $("#detailHighlights").replaceChildren(...highlights.map((text) => make("li", { textContent: text })));
  $("#detailHighlights").hidden = !highlights.length;
  $("#detailHighlightsSection").hidden = !highlights.length;
  resources.replaceChildren(...(item.resources || []).map((resource) => {
    if (resource.type === "image") {
      return make("figure", { className: "detail-figure" }, [
        make("a", { href: resource.src, target: "_blank", rel: "noopener noreferrer" }, [
          make("img", { src: resource.src, alt: resource.alt, loading: "lazy" })
        ]),
        make("figcaption", { textContent: resource.label })
      ]);
    }
    return externalLink(resource.label, resource.href);
  }));
  $("#detailResourcesSection").hidden = !item.resources?.length;
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
    renderDetail();
  });
});

renderDetail();
