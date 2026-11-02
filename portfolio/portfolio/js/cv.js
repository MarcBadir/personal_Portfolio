const $ = (selector) => document.querySelector(selector);
const make = (tag, properties = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), properties);
  children.forEach((child) => node.append(child));
  return node;
};

let language = "en";
try {
  language = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
} catch {}

function detailEntry(type, item, index, title, subtitle, date) {
  const link = make("a", {
    className: "cv-entry",
    href: `portfolio.html?type=${type}&index=${index}`,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": `${title}. ${subtitle}. ${language === "fr" ? "Ouvrir les détails" : "Open details"}`
  });
  link.append(make("div", { className: "cv-entry-copy" }, [
    make("h3", { textContent: title }),
    make("p", { textContent: subtitle })
  ]));
  link.append(make("span", { className: "cv-entry-date", textContent: date }));
  link.append(make("span", { className: "cv-entry-arrow", "aria-hidden": "true", textContent: "+" }));
  return link;
}

function renderCv() {
  const content = CONTENT[language];
  document.documentElement.lang = language;
  document.title = content.title;
  $("meta[name='description']").content = content.description;
  $("#cvLogo").setAttribute("aria-label", `${SITE.name}, ${language === "fr" ? "accueil" : "home"}`);
  $("#cvName").textContent = SITE.name;
  $("#cvHeadline").textContent = content.headline;
  $("#cvPdf").textContent = content.cvLabel;
  $("#cvPdf").href = "assets/French%20%26%20English%20CV.pdf";
  const summary = $("#cvSummary");
  const schoolIndex = content.summary.indexOf(SITE.polytechName);
  if (schoolIndex >= 0) {
    const schoolLink = make("a", {
      href: SITE.polytechUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      textContent: SITE.polytechName
    });
    summary.replaceChildren(
      content.summary.slice(0, schoolIndex),
      schoolLink,
      content.summary.slice(schoolIndex + SITE.polytechName.length)
    );
  } else {
    summary.textContent = content.summary;
  }
  $("#cvContactTitle").textContent = content.sections.contact;
  $("#cvContacts").replaceChildren(...SITE.links.map((item) => make("a", {
    href: item.url,
    textContent: content.contactLinks[item.key]
  })));
  $("#experienceTitle").textContent = content.sections.experience;
  $("#experienceList").replaceChildren(...content.experience.map((item, index) =>
    detailEntry("experience", item, index, item.company, item.role, item.date)));
  $("#projectsTitle").textContent = content.sections.projects;
  $("#projectsList").replaceChildren(...content.projects.map((item, index) =>
    detailEntry("projects", item, index, item.title, item.description, item.date)));
  $("#educationTitle").textContent = content.sections.education;
  $("#educationList").replaceChildren(...content.education.map((item, index) =>
    detailEntry("education", item, index, item.program, item.institution, item.date)));
  $("#leadershipTitle").textContent = content.sections.leadership;
  $("#leadershipList").replaceChildren(...content.leadership.map((item, index) =>
    detailEntry("leadership", item, index, item.role, item.organization, item.date)));
  $("#skillsTitle").textContent = content.sections.skills;
  $("#skillGroups").replaceChildren(...content.skills.map((group) => make("section", { className: "cv-skill-group" }, [
    make("h3", { textContent: group.title }),
    make("ul", {}, group.items.map((skill) => make("li", { textContent: skill })))
  ])));
  $("#aboutTitle").textContent = content.sections.about;
  $("#aboutText").replaceChildren(...content.about.map((paragraph) => make("p", { textContent: paragraph })));
  $("#languagesTitle").textContent = content.sections.languages;
  $("#languageHeading").textContent = content.languageHeading;
  $("#interestsHeading").textContent = content.interestsHeading;
  $("#languageList").replaceChildren(...content.languages.map((item) => make("li", {}, [
    make("strong", { textContent: item.name }),
    ` ${item.level}`
  ])));
  $("#interestList").replaceChildren(...content.interests.map((item) => make("li", { textContent: item })));
  $("#cvFooter").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  $(".language-switch").setAttribute("aria-label", content.languageLabel);
  $("[data-language='en']").setAttribute("aria-pressed", language === "en");
  $("[data-language='fr']").setAttribute("aria-pressed", language === "fr");
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {}
    renderCv();
  });
});

renderCv();
