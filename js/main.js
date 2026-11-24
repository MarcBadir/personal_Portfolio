const $ = (s) => document.querySelector(s);
const el = (tag, props = {}, kids = []) => {
  const n = Object.assign(document.createElement(tag), props);
  kids.forEach((k) => n.append(k));
  return n;
};

const TAGS = ["All", ...new Set(PROJECT_TAGS.flat())];
const TAG_LABELS_FR = {
  All: CONTENT.fr.allProjects,
  Electronics: "Électronique",
  "Functional programming": "Programmation fonctionnelle",
  Algorithms: "Algorithmes"
};
const SECTION_IDS = {
  experience: "experience",
  projects: "work",
  skills: "skills",
  education: "education",
  leadership: "leadership",
  about: "about",
  languages: "languages",
  contact: "contact"
};
const requestedSection = new URLSearchParams(location.search).get("section");
const sectionPage = Object.hasOwn(SECTION_IDS, requestedSection);
let language = "en";
let activeTag = "All";

try {
  language = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
} catch {}

function renderFilters(content) {
  const filters = $("#filters");
  filters.setAttribute("aria-label", content.projectFilterLabel);
  filters.replaceChildren(...TAGS.map((tag) => {
    const label = language === "fr" ? TAG_LABELS_FR[tag] || tag : tag;
    const button = el("button", { className: "chip", type: "button", textContent: label });
    button.setAttribute("aria-pressed", tag === activeTag);
    button.onclick = () => {
      activeTag = tag;
      renderFilters(CONTENT[language]);
      renderProjects(CONTENT[language]);
    };
    return button;
  }));
}

function renderProjects(content) {
  const box = $("#projects");
  box.replaceChildren();
  content.projects.forEach((project, index) => {
    const tags = PROJECT_TAGS[index];
    if (activeTag !== "All" && !tags.includes(activeTag)) return;
    const heading = el("div", { className: "entry-header" }, [el("h3", { textContent: project.title })]);
    heading.append(el("span", { className: "entry-date", textContent: project.date }));
    box.append(el("article", { className: "card" }, [
      heading,
      el("p", { textContent: project.description }),
      el("ul", { className: "tags" }, tags.map((tag) => el("li", {
        textContent: language === "fr" ? TAG_LABELS_FR[tag] || tag : tag
      }))),
      ...(project.resources ? [renderResources(project.resources, "project-resources")] : [])
    ]));
  });
}

function renderResources(resources, className) {
  return el("div", { className }, resources.map((resource) => {
    if (resource.type === "image") {
      return el("figure", { className: "entry-figure" }, [
        el("a", { href: resource.src, target: "_blank", rel: "noopener noreferrer" }, [
          el("img", { src: resource.src, alt: resource.alt, loading: "lazy" })
        ]),
        el("figcaption", { textContent: resource.label })
      ]);
    }
    return el("a", {
      className: "entry-resource-link",
      href: resource.href,
      target: "_blank",
      rel: "noopener noreferrer",
      textContent: resource.label
    });
  }));
}

function renderExperience(content) {
  $("#experienceList").replaceChildren(...content.experience.map((item) => {
    const company = item.companyUrl ? externalLink(item.company, item.companyUrl) : item.company;
    const entry = el("article", { className: "entry" }, [
      el("div", { className: "entry-header" }, [
        el("h3", {}, [company]),
        el("span", { className: "entry-date", textContent: item.date })
      ]),
      el("p", { className: "entry-role", textContent: item.role })
    ]);
    if (item.location) entry.append(el("p", { className: "entry-location", textContent: item.location }));
    entry.append(el("ul", {}, item.details.map((detail) => el("li", { textContent: detail }))));
    if (item.resources) entry.append(renderResources(item.resources, "entry-resources"));
    return entry;
  }));
}

function renderLeadership(content) {
  $("#leadershipList").replaceChildren(...content.leadership.map((item) => {
    const entry = el("article", { className: "entry" }, [
      el("div", { className: "entry-header" }, [
        el("h3", { textContent: item.organization }),
        el("span", { className: "entry-date", textContent: item.date })
      ]),
      el("p", { className: "entry-role", textContent: item.role }),
      el("ul", {}, item.details.map((detail) => el("li", { textContent: detail })))
    ]);
    if (item.resources) entry.append(renderResources(item.resources, "entry-resources"));
    return entry;
  }));
}

function externalLink(label, url) {
  return el("a", { href: url, target: "_blank", rel: "noopener noreferrer", textContent: label });
}

function renderEducation(content) {
  $("#educationList").replaceChildren(...content.education.map((item) => {
    const institution = item.institutionUrl
      ? externalLink(item.institution, item.institutionUrl)
      : item.institution;
    const program = item.programUrl
      ? externalLink(item.program, item.programUrl)
      : item.program;
    const entry = el("article", { className: "entry" }, [
      el("div", { className: "entry-header" }, [
        el("h3", {}, [institution]),
        el("span", { className: "entry-date", textContent: item.date })
      ]),
      el("p", { className: "entry-role" }, [program]),
      el("p", { className: "entry-location", textContent: item.location })
    ]);
    if (item.highlights) {
      entry.append(el("ul", { className: "entry-highlights" }, item.highlights.map((highlight) =>
        el("li", { textContent: highlight }))));
    }
    return entry;
  }));
  const image = content.communityImage;
  $("#communityGallery").replaceChildren(el("figure", { className: "entry-figure community-figure" }, [
    el("a", { href: image.src, target: "_blank", rel: "noopener noreferrer" }, [
      el("img", { src: image.src, alt: image.alt, loading: "lazy" })
    ]),
    el("figcaption", { textContent: image.label })
  ]));
}

function renderPage() {
  const content = CONTENT[language];
  document.documentElement.lang = language;
  document.title = sectionPage ? `${content.sections[requestedSection]} - ${SITE.name}` : content.title;
  document.body.classList.toggle("section-page", sectionPage);
  $(".detail-hero").hidden = sectionPage;
  $(".skip").hidden = sectionPage;
  document.querySelectorAll("main > .block").forEach((section) => {
    section.hidden = sectionPage && section.id !== SECTION_IDS[requestedSection];
  });
  document.querySelectorAll("nav a").forEach((link) => {
    link.hidden = sectionPage && link.id !== "backNav";
  });
  $("meta[name='description']").content = content.description;
  $(".language-switch").setAttribute("aria-label", content.languageLabel);
  $("nav").setAttribute("aria-label", content.navLabel);
  $(".mark").setAttribute("aria-label", `${SITE.name}, ${language === "fr" ? "accueil" : "home"}`);
  $("#typed").textContent = content.headline;
  $("#typed").setAttribute("aria-label", content.headline);
  const summary = $("#summary");
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
  $("#heroProjects").textContent = content.heroProjects;
  $("#heroContact").textContent = content.heroContact;
  $(".skip").textContent = content.skipLink;
  $("#experienceNav").textContent = content.nav.experience;
  $("#projectsNav").textContent = content.nav.projects;
  $("#skillsNav").textContent = content.nav.skills;
  $("#educationNav").textContent = content.nav.education;
  $("#leadershipNav").textContent = content.nav.leadership;
  $("#aboutNav").textContent = content.nav.about;
  $("#contactNav").textContent = content.nav.contact;
  $("#backNav").textContent = content.backToIntro;
  $("#detailEyebrow").textContent = content.detailEyebrow;
  $("#cvLink").textContent = content.cvLabel;
  $("#cvLink").href = "assets/French & English CV.pdf";
  $("#experienceTitle").textContent = content.sections.experience;
  $("#projectsTitle").textContent = content.sections.projects;
  $("#skillsTitle").textContent = content.sections.skills;
  $("#aboutTitle").textContent = content.sections.about;
  $("#aboutText").replaceChildren(...content.about.map((paragraph) => el("p", { textContent: paragraph })));
  $("#educationTitle").textContent = content.sections.education;
  $("#leadershipTitle").textContent = content.sections.leadership;
  $("#languagesTitle").textContent = content.sections.languages;
  $("#languageHeading").textContent = content.languageHeading;
  $("#interestsHeading").textContent = content.interestsHeading;
  $("#contactTitle").textContent = content.sections.contact;
  $("#contactNote").textContent = content.contactNote;
  $("#skillList").replaceChildren(...content.skills.map((group) => el("div", {}, [
    el("h3", { textContent: group.title }),
    el("ul", {}, group.items.map((item) => el("li", { textContent: item })))
  ])));
  $("#links").replaceChildren(...SITE.links.map((link) =>
    el("a", { href: link.url, textContent: content.contactLinks[link.key] })));
  $("#languageList").replaceChildren(...content.languages.map((item) =>
    el("li", {}, [el("strong", { textContent: item.name }), ` - ${item.level}`])));
  $("#interestList").replaceChildren(...content.interests.map((item) => el("li", { textContent: item })));
  $("footer p").replaceChildren("© ", el("span", { textContent: new Date().getFullYear() }), ` ${SITE.name}`);
  $("[data-language='en']").setAttribute("aria-pressed", language === "en");
  $("[data-language='fr']").setAttribute("aria-pressed", language === "fr");
  renderFilters(content);
  renderProjects(content);
  renderExperience(content);
  renderLeadership(content);
  renderEducation(content);
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
    renderPage();
  });
});

renderPage();
