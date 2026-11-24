const $ = (selector) => document.querySelector(selector);
const make = (tag, properties = {}, children = []) => {
  const node = Object.assign(document.createElement(tag), properties);
  children.forEach((child) => node.append(child));
  return node;
};
const SVG_NS = "http://www.w3.org/2000/svg";
const ICON_SHAPES = {
  code: [
    { tag: "path", d: "m8 6-6 6 6 6" },
    { tag: "path", d: "m16 6 6 6-6 6" },
    { tag: "path", d: "m14 4-4 16" }
  ],
  chip: [
    { tag: "rect", x: "5", y: "5", width: "14", height: "14", rx: "2" },
    { tag: "rect", x: "9", y: "9", width: "6", height: "6", rx: "1" },
    { tag: "path", d: "M9 1v4m6-4v4M9 19v4m6-4v4M1 9h4m-4 6h4m14-6h4m-4 6h4" }
  ],
  tools: [
    { tag: "path", d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2 2 0 0 1-2.8-2.8l6.9-6.9a6 6 0 0 1 7.9-7.9z" }
  ],
  football: [
    { tag: "circle", cx: "12", cy: "12", r: "10" },
    { tag: "path", d: "m12 7 3 2v4l-3 2-3-2V9zM12 7V2m3 7 5-2M15 13l3 5M9 13l-3 5M9 9 4 7m8 8v7" }
  ],
  megaphone: [
    { tag: "path", d: "m3 11 18-5v12L3 13v-2Z" },
    { tag: "path", d: "M11.6 16.8a3 3 0 1 1-5.8 1.6m9.2-9.4v5" }
  ],
  award: [
    { tag: "path", d: "M8 4h8v6a4 4 0 0 1-8 0V4Zm0 2H4v2a4 4 0 0 0 4 4m8-6h4v2a4 4 0 0 1-4 4m-4 0v5m-4 4h8m-6-4h4" }
  ],
  travel: [
    { tag: "path", d: "M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8l-8.2-1.8a1 1 0 0 0-.9 1.7L10 12l-2 2-3-1-2 2 5 2 2 5 2-2-1-3 2-2 6.1 5.8a1 1 0 0 0 1.7-.9Z" }
  ],
  music: [
    { tag: "path", d: "M9 18V5l12-2v13" },
    { tag: "circle", cx: "6", cy: "18", r: "3" },
    { tag: "circle", cx: "18", cy: "16", r: "3" }
  ],
  videography: [
    { tag: "path", d: "M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
    { tag: "path", d: "M3 11h18M7 6l3 5m1-5 3 5m1-5 3 5" }
  ],
  boxing: [
    { tag: "path", d: "M8 11V7a4 4 0 0 1 8 0v2h1a3 3 0 0 1 3 3v2a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-1a2.5 2.5 0 0 1 4-2Z" },
    { tag: "path", d: "M8 12h5m-8 4h15m-12 0v4h9v-4" }
  ]
};

function icon(name) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "cv-icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  ICON_SHAPES[name].forEach((shape) => {
    const element = document.createElementNS(SVG_NS, shape.tag);
    Object.entries(shape).forEach(([attribute, value]) => {
      if (attribute !== "tag") element.setAttribute(attribute, value);
    });
    svg.append(element);
  });
  return svg;
}

let language = "en";
try {
  language = localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
} catch {}

function detailEntry(type, item, index, title, subtitle, date, markName = null) {
  const link = make("a", {
    className: markName ? "cv-entry cv-entry-with-mark" : "cv-entry",
    href: `portfolio.html?type=${type}&index=${index}`,
    "aria-label": `${title}. ${subtitle}. ${language === "fr" ? "Ouvrir les détails" : "Open details"}`
  });
  if (markName) {
    link.append(make("span", { className: "cv-entry-mark", "aria-hidden": "true" }, [icon(markName)]));
  }
  link.append(make("div", { className: "cv-entry-copy" }, [
    make("h3", { textContent: title }),
    make("p", { textContent: subtitle })
  ]));
  link.append(make("span", { className: "cv-entry-date", textContent: date }));
  link.append(make("span", { className: "cv-entry-arrow", "aria-hidden": "true", textContent: "+" }));
  return link;
}

let showcaseIndex = 0;
let showcaseTimer = null;
let showcaseResetTimer = null;
let showcaseSlideCount = 0;
let showcasePaused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let showcaseMouseOver = false;
let showcaseDrag = null;
let suppressShowcaseClick = false;

function stopShowcaseRotation() {
  if (showcaseTimer !== null) {
    clearInterval(showcaseTimer);
    showcaseTimer = null;
  }
}

function canRotateShowcase() {
  const showcase = $("#cvShowcase");
  return !showcasePaused && !document.hidden && !showcaseMouseOver && !showcase.contains(document.activeElement);
}

function startShowcaseRotation() {
  stopShowcaseRotation();
  if (!canRotateShowcase()) return;
  showcaseTimer = window.setInterval(moveShowcase, 2000);
}

function cloneShowcaseSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("cv-showcase-slide-clone");
  clone.setAttribute("aria-hidden", "true");
  clone.removeAttribute("aria-labelledby");
  clone.inert = true;
  clone.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
  return clone;
}

function renderShowcase(content) {
  const recentItems = [
    { type: "experience", index: 0, item: content.experience[0] },
    { type: "experience", index: 1, item: content.experience[1] },
    { type: "projects", index: 0, item: content.projects[0] }
  ];
  const track = $("#cvShowcaseTrack");
  const viewport = $("#cvShowcaseViewport");
  const slides = recentItems.map(({ type, index, item }, slideIndex) => {
    const image = item.resources?.find((resource) => resource.type === "image");
    const title = type === "experience" ? item.company : item.title;
    const focus = item.details?.[0] || item.description;
    const slide = make("a", {
      className: "cv-showcase-slide",
      href: `portfolio.html?type=${type}&index=${index}`,
      draggable: false
    });
    const copy = make("div", { className: "cv-slide-copy" }, [
      make("p", { className: "cv-slide-category", textContent: content.sections[type] }),
      make("h3", { id: `cvSlideTitle${slideIndex}`, textContent: title }),
      make("p", {
        className: "cv-slide-meta",
        textContent: [item.role, item.date, item.location].filter(Boolean).join(" · ")
      }),
      make("span", { className: "cv-slide-link", textContent: content.intro.viewDetails })
    ]);
    const visual = image
      ? make("img", { className: "cv-slide-image", src: image.src, alt: image.alt, loading: "lazy", draggable: false })
      : make("aside", { className: "cv-slide-focus" }, [
        make("p", { className: "cv-slide-focus-label", textContent: content.intro.focusLabel }),
        make("p", { textContent: focus })
      ]);
    slide.setAttribute("aria-labelledby", `cvSlideTitle${slideIndex}`);
    slide.append(copy, visual);
    return slide;
  });
  track.replaceChildren(cloneShowcaseSlide(slides[slides.length - 1]), ...slides, cloneShowcaseSlide(slides[0]));
  showcaseSlideCount = slides.length;
  if (showcaseResetTimer !== null) clearTimeout(showcaseResetTimer);
  viewport.style.scrollBehavior = "auto";
  viewport.scrollLeft = 0;
  viewport.scrollLeft = slides[0].getBoundingClientRect().left - viewport.getBoundingClientRect().left;
  viewport.style.scrollBehavior = "";
  $("#cvShowcaseTitle").textContent = content.intro.carouselTitle;
  viewport.setAttribute("aria-label", content.intro.carouselLabel);
  showcaseIndex = 1;
  startShowcaseRotation();
}

function scrollToShowcaseSlide(slide) {
  const viewport = $("#cvShowcaseViewport");
  const left = slide.getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft;
  viewport.scrollTo({ left, behavior: "smooth" });
}

function setShowcasePosition(slide) {
  const viewport = $("#cvShowcaseViewport");
  const left = slide.getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft;
  viewport.style.scrollBehavior = "auto";
  viewport.scrollLeft = left;
  viewport.style.scrollBehavior = "";
}

function resetShowcaseLoop() {
  const slides = Array.from($("#cvShowcaseTrack").children);
  if (showcaseResetTimer !== null) clearTimeout(showcaseResetTimer);
  showcaseResetTimer = null;
  if (showcaseIndex === 0) {
    setShowcasePosition(slides[showcaseSlideCount]);
    showcaseIndex = showcaseSlideCount;
  } else if (showcaseIndex === showcaseSlideCount + 1) {
    setShowcasePosition(slides[1]);
    showcaseIndex = 1;
  }
}

function moveShowcase() {
  const slides = Array.from($("#cvShowcaseTrack").children);
  if (!slides.length || showcaseIndex >= showcaseSlideCount + 1) return;
  showcaseIndex += 1;
  scrollToShowcaseSlide(slides[showcaseIndex]);
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
  const email = SITE.links.find((item) => item.key === "email");
  $("#cvHeroContact").textContent = content.intro.contact;
  $("#cvHeroContact").href = email.url;
  $("#cvHeroProjects").textContent = content.heroProjects;
  $("#cvPdf").textContent = content.cvLabel;
  renderShowcase(content);
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
  $("#leadershipTitle").classList.add("cv-heading-with-mark");
  $("#leadershipTitle").replaceChildren(
    make("span", { className: "cv-recognition-mark", "aria-hidden": "true" }, [icon("award")]),
    content.sections.leadership
  );
  $("#leadershipList").replaceChildren(...content.leadership.map((item, index) =>
    detailEntry("leadership", item, index, item.role, item.organization, item.date, ["football", "megaphone"][index])));
  $("#skillsTitle").textContent = content.sections.skills;
  const skillIcons = ["code", "chip", "tools"];
  $("#skillGroups").replaceChildren(...content.skills.map((group, index) => make("section", { className: "cv-skill-group" }, [
    make("h3", {}, [
      make("span", { className: "cv-icon-badge" }, [icon(skillIcons[index])]),
      group.title
    ]),
    make("ul", {}, group.items.map((skill) => make("li", { textContent: skill })))
  ])));
  $("#aboutTitle").textContent = content.sections.about;
  $("#aboutText").replaceChildren(...content.about.map((paragraph) => make("p", { textContent: paragraph })));
  $("#languagesTitle").textContent = content.sections.languages;
  $("#languageHeading").textContent = content.languageHeading;
  $("#interestsHeading").textContent = content.interestsHeading;
  $("#languageList").replaceChildren(...content.languages.map((item) => make("li", {}, [
    make("strong", { textContent: item.name }),
    make("span", { textContent: item.level })
  ])));
  const interestIcons = ["football", "travel", "music", "videography", "boxing"];
  $("#interestList").replaceChildren(...content.interests.map((item, index) => make("li", { className: "cv-interest" }, [
    make("span", { className: "cv-icon-badge" }, [icon(interestIcons[index])]),
    make("span", { textContent: item })
  ])));
  $("#cvFooter").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
  $("#cvFooterContacts").setAttribute("aria-label", content.sections.contact);
  $("#cvFooterContacts").replaceChildren(...SITE.links.map((item) => make("a", {
    href: item.url,
    textContent: content.contactLinks[item.key]
  })));
  $(".language-switch").setAttribute("aria-label", content.languageLabel);
  $("[data-language='en']").setAttribute("aria-pressed", language === "en");
  $("[data-language='fr']").setAttribute("aria-pressed", language === "fr");
}

$("#cvShowcase").addEventListener("pointerenter", (event) => {
  if (event.pointerType !== "mouse") return;
  showcaseMouseOver = true;
  stopShowcaseRotation();
});
$("#cvShowcase").addEventListener("pointerleave", (event) => {
  if (event.pointerType !== "mouse") return;
  showcaseMouseOver = false;
  startShowcaseRotation();
});
$("#cvShowcase").addEventListener("focusin", stopShowcaseRotation);
$("#cvShowcase").addEventListener("focusout", () => {
  window.requestAnimationFrame(() => {
    if (!$("#cvShowcase").contains(document.activeElement)) startShowcaseRotation();
  });
});
$("#cvShowcase").addEventListener("pointerdown", stopShowcaseRotation);
const showcaseViewport = $("#cvShowcaseViewport");
showcaseViewport.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "mouse" || event.button !== 0) return;
  showcaseDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startScrollLeft: showcaseViewport.scrollLeft,
    isDragging: false
  };
});
document.addEventListener("pointermove", (event) => {
  if (!showcaseDrag || event.pointerId !== showcaseDrag.pointerId) return;
  const distance = event.clientX - showcaseDrag.startX;
  if (!showcaseDrag.isDragging && Math.abs(distance) < 6) return;
  showcaseDrag.isDragging = true;
  showcaseViewport.classList.add("is-dragging");
  showcaseViewport.setPointerCapture(event.pointerId);
  showcaseViewport.scrollLeft = showcaseDrag.startScrollLeft - distance;
  event.preventDefault();
});
document.addEventListener("pointerup", (event) => {
  if (showcaseDrag && event.pointerId === showcaseDrag.pointerId) {
    if (showcaseDrag.isDragging) {
      suppressShowcaseClick = true;
      window.setTimeout(() => { suppressShowcaseClick = false; }, 0);
    }
    showcaseDrag = null;
    showcaseViewport.classList.remove("is-dragging");
  }
  startShowcaseRotation();
});
document.addEventListener("pointercancel", (event) => {
  if (!showcaseDrag || event.pointerId !== showcaseDrag.pointerId) return;
  showcaseDrag = null;
  showcaseViewport.classList.remove("is-dragging");
  startShowcaseRotation();
});
showcaseViewport.addEventListener("click", (event) => {
  if (!suppressShowcaseClick) return;
  event.preventDefault();
  event.stopPropagation();
  suppressShowcaseClick = false;
}, true);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopShowcaseRotation();
  else startShowcaseRotation();
});
$("#cvShowcaseViewport").addEventListener("scroll", () => {
  const slides = Array.from($("#cvShowcaseTrack").children);
  const viewport = $("#cvShowcaseViewport");
  if (!slides.length) return;
  const viewportLeft = viewport.getBoundingClientRect().left;
  showcaseIndex = slides.reduce((closestIndex, slide, index) =>
    Math.abs(slide.getBoundingClientRect().left - viewportLeft) < Math.abs(slides[closestIndex].getBoundingClientRect().left - viewportLeft)
      ? index
      : closestIndex, 0);
  if (showcaseIndex === 0 || showcaseIndex === showcaseSlideCount + 1) {
    if (showcaseResetTimer !== null) clearTimeout(showcaseResetTimer);
    showcaseResetTimer = window.setTimeout(resetShowcaseLoop, 180);
  } else if (showcaseResetTimer !== null) {
    clearTimeout(showcaseResetTimer);
    showcaseResetTimer = null;
  }
});

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
