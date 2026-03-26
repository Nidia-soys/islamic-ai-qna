// ===============================
// Dynamic Q&A Data
// ===============================

// ## TRICK: extend or customize this data structure
// You can safely add, remove, or edit entries below.
// Keep answers rooted in Qur'an, authentic Sunnah, and mainstream Sunni scholarship.

/* const QA_DATA = [
  {
    id: "prayer-obligation",
    category: "prayer",
    tags: ["prayer", "salah", "obligatory", "five daily prayers", "pillar"],
    question: "Why are the five daily prayers obligatory in Islam?",
    answer: `
      <p>
        The five daily prayers are a <strong>pillar of Islam</strong> and an
        obligation on every adult Muslim who is sane. Allah ﷻ says:
        “Indeed, prayer has been decreed upon the believers a decree of
        specified times” (Qur'an 4:103).
      </p>
      <p>
        The Prophet Muhammad ﷺ said: “Islam is built upon five: testifying that
        there is no god but Allah and that Muhammad is the Messenger of Allah,
        establishing prayer, giving zakah, fasting Ramadan, and performing
        Hajj…” (Ṣaḥīḥ al-Bukhārī &amp; Ṣaḥīḥ Muslim).
      </p>
      <p>
        The four Sunni schools agree that the five daily prayers are
        <strong>individual obligations</strong>. Deliberately abandoning them
        without excuse is a major sin and cuts a person off from a core act of
        worship that connects them to their Lord every day.
      </p>
    `,
    source: [
      "Qur'an 4:103",
      "Hadith: Ṣaḥīḥ al-Bukhārī, Ṣaḥīḥ Muslim (on the pillars of Islam)",
    ],
  },
  {
    id: "prayer-fajr-time",
    category: "prayer",
    tags: ["prayer", "fajr", "time", "timing", "dawn"],
    question: "When does the time for Fajr prayer start and end?",
    answer: `
      <p>
        The time for <strong>Fajr</strong> starts at the appearance of the
        true dawn (when the horizontal light spreads across the horizon) and
        lasts until just <strong>before sunrise</strong>. Praying Fajr within
        this window fulfills the obligation.
      </p>
      <p>
        Allah ﷻ says: “Establish prayer at the decline of the sun until the
        darkness of the night, and [also] the Qur'an of dawn. Indeed, the
        recitation of dawn is ever witnessed” (Qur'an 17:78). The Prophet ﷺ was
        consistent in praying Fajr in this period, sometimes reciting long
        portions of Qur'an.
      </p>
      <p>
        The Hanafi, Maliki, Shafi'i, and Hanbali schools agree on this basic
        timing, though they differ slightly on what is more
        <strong>preferable</strong> (earlier or a bit later) based on local
        conditions and safety. Consult a reliable timetable for your city and
        follow the congregational mosque where possible.
      </p>
    `,
    source: ["Qur'an 17:78", "Classical fiqh works of the four Sunni schools"],
  },
  {
    id: "wudu-breaks",
    category: "prayer",
    tags: ["wudu", "ablution", "purification", "breaks wudu"],
    question: "What commonly breaks my wudu (ablution)?",
    answer: `
      <p>
        The scholars agree that certain acts <strong>invalidate wudu</strong>,
        such as anything that exits from the front or back passage (urine,
        stool, wind), deep sleep that causes loss of awareness, and loss of
        consciousness (fainting).
      </p>
      <p>
        The Prophet ﷺ said: “Allah does not accept the prayer of any of you
        when he breaks wudu until he performs wudu again” (Ṣaḥīḥ al-Bukhārī).
        The narrations mention wind specifically, and by analogy the jurists
        extended this to other similar things that exit from these passages.
      </p>
      <p>
        The four Sunni schools have <strong>minor differences</strong> about
        additional matters (for example, touching the private parts, or
        touching the opposite sex skin-to-skin), so you should follow the view
        taught by your local scholars and your madhhab, while respecting
        legitimate differences of opinion.
      </p>
    `,
    source: [
      "Hadith: Ṣaḥīḥ al-Bukhārī (on invalidators of wudu)",
      "Fiqh of the four Sunni madhhabs",
    ],
  },
  {
    id: "fasting-obligation",
    category: "fasting",
    tags: ["fasting", "ramadan", "obligation"],
    question: "Why is fasting the month of Ramadan obligatory?",
    answer: `
      <p>
        Fasting Ramadan is a <strong>pillar of Islam</strong> and an
        obligation on every adult Muslim who is able. Allah ﷻ says:
        “O you who believe, fasting is prescribed for you as it was
        prescribed for those before you, that you may attain taqwā
        (God-consciousness)” (Qur'an 2:183).
      </p>
      <p>
        The Prophet ﷺ said: “Islam is built upon five…” and he mentioned
        “fasting Ramadan” among them (Ṣaḥīḥ al-Bukhārī &amp; Muslim). The four
        Sunni Imams agreed that fasting the month of Ramadan is an
        <strong>individual obligation</strong> except for those with a valid
        exemption such as illness, travel, or other excuses recognized in
        Shariah.
      </p>
      <p>
        Fasting is not only leaving food and drink; it is a training of the
        heart and character, guarding the tongue, the eyes, and all limbs from
        sin, in order to draw closer to Allah and cultivate taqwā.
      </p>
    `,
    source: ["Qur'an 2:183", "Hadith: Ṣaḥīḥ al-Bukhārī &amp; Muslim"],
  },
  {
    id: "fasting-forgot-ate",
    category: "fasting",
    tags: ["fasting", "ramadan", "forget", "ate", "broke fast"],
    question: "Is my fast broken if I forget and eat or drink?",
    answer: `
      <p>
        If a fasting person <strong>eats or drinks out of forgetfulness</strong>,
        their fast is still valid and does not need to be made up. This is from
        the mercy of Allah ﷻ.
      </p>
      <p>
        The Prophet ﷺ said: “Whoever forgets while he is fasting and eats or
        drinks, let him complete his fast, for it is Allah who has fed him and
        given him drink” (Ṣaḥīḥ al-Bukhārī &amp; Muslim).
      </p>
      <p>
        The four Sunni schools take this hadith as proof that such a person’s
        fast remains <strong>valid</strong>. As soon as you remember, stop
        eating or drinking immediately and continue the fast until sunset.
      </p>
    `,
    source: [
      "Hadith: Ṣaḥīḥ al-Bukhārī &amp; Muslim (on forgetful eating while fasting)",
    ],
  },
  {
    id: "fasting-intention",
    category: "fasting",
    tags: ["intention", "niyyah", "fasting", "ramadan"],
    question: "Do I have to make a specific intention every night for fasting Ramadan?",
    answer: `
      <p>
        Fasting is an act of worship that requires <strong>intention</strong>
        (niyyah). Intention is an action of the heart: knowing that you are
        fasting tomorrow for the sake of Allah and in obedience to His command.
      </p>
      <p>
        The Shafi'i and Hanbali schools emphasize renewing the intention each
        night before Fajr for each day of Ramadan. The Hanafi and Maliki
        schools allow a broader timeframe and accept a general intention for
        Ramadan, as long as the person knows they are fasting the month when
        they begin it.
      </p>
      <p>
        In practice, if you sleep and wake up for Suhoor (pre-dawn meal) with
        the intention of fasting for Ramadan, this suffices according to all
        four schools, in shā’ Allah. The intention does not need to be spoken
        aloud in a particular formula.
      </p>
    `,
    source: ["Hadith: “Actions are only by intentions” (Ṣaḥīḥ al-Bukhārī)"],
  },
  {
    id: "character-best",
    category: "morals",
    tags: ["character", "akhlaq", "morals", "best muslim"],
    question: "What makes a Muslim's character beloved to Allah?",
    answer: `
      <p>
        Good character (<strong>ḥusn al-khuluq</strong>) is central in Islam.
        The Prophet ﷺ said: “The most complete of the believers in faith are
        those best in character” (Sunan al-Tirmidhi).
      </p>
      <p>
        Good character includes truthfulness, modesty, patience, gentleness,
        generosity, forgiving others, keeping ties of kinship, and avoiding
        arrogance and harshness. Allah ﷻ described the Prophet ﷺ as being “of
        tremendous character” (Qur'an 68:4), and he ﷺ was sent to perfect
        noble traits.
      </p>
      <p>
        The four Sunni Imams all emphasized that sound creed and worship must
        be accompanied by <strong>beautiful dealings with people</strong>.
        A believer constantly works on their heart, asking Allah for sincerity
        and for a character that reflects the light of the Qur'an and Sunnah.
      </p>
    `,
    source: [
      "Qur'an 68:4",
      "Hadith: Sunan al-Tirmidhi (best in character)",
    ],
  },
  {
    id: "parents-respect",
    category: "morals",
    tags: ["parents", "obedience", "kindness", "family"],
    question: "How important is it to respect and obey my parents?",
    answer: `
      <p>
        Respecting and honoring parents is a <strong>major obligation</strong>
        in Islam. Allah ﷻ repeatedly joins worship of Him with kindness to
        parents: “And your Lord has decreed that you worship none but Him, and
        that you show excellence to parents…” (Qur'an 17:23).
      </p>
      <p>
        The Prophet ﷺ said when asked which deed is most beloved to Allah:
        “Prayer at its proper time.” He was asked, “Then what?” He said,
        “Being good to one's parents” (Ṣaḥīḥ al-Bukhārī &amp; Muslim).
      </p>
      <p>
        Obedience to parents is required in matters that are <strong>permissible</strong>
        and do not involve disobedience to Allah. If parents command what is
        sinful, one must not obey in that specific matter but must still speak
        with gentleness and maintain respect, as all four Sunni schools agree.
      </p>
    `,
    source: [
      "Qur'an 17:23–24",
      "Hadith: Ṣaḥīḥ al-Bukhārī &amp; Muslim",
    ],
  },
  {
    id: "everyday-halal-haram",
    category: "other",
    tags: ["halal", "haram", "everyday", "doubtful matters"],
    question: "How do I deal with doubtful matters in my everyday life?",
    answer: `
      <p>
        The Prophet ﷺ taught: “The lawful is clear and the unlawful is clear,
        and between them are doubtful matters which many people do not know.
        Whoever avoids doubtful matters clears himself in regard to his
        religion and his honor…” (Ṣaḥīḥ al-Bukhārī &amp; Muslim).
      </p>
      <p>
        When something is unclear, a believer asks <strong>reliable scholars</strong>,
        examines whether it clearly falls into halal or haram, and if it remains
        truly doubtful, they are cautious and leave what troubles their heart
        for what does not. This protects one’s faith and reputation.
      </p>
      <p>
        The four Sunni Imams often advised their students to stay away from
        doubtful earnings, foods, and practices even when there was a technical
        allowance, as a way of <strong>seeking Allah’s pleasure</strong> and
        safeguarding the heart.
      </p>
    `,
    source: [
      "Hadith: Ṣaḥīḥ al-Bukhārī &amp; Muslim (on doubtful matters)",
      "Statements of the four Imams regarding waraʿ (scrupulousness)",
    ],
  },
  {
    id: "love-prophet",
    category: "morals",
    tags: ["love", "prophet", "muhammad", "following sunnah"],
    question: "What does it mean to truly love the Prophet Muhammad ﷺ?",
    answer: `
      <p>
        Loving the Messenger of Allah ﷺ is part of faith. He said: “None of you
        truly believes until I am more beloved to him than his father, his
        child, and all people” (Ṣaḥīḥ al-Bukhārī &amp; Muslim).
      </p>
      <p>
        True love is shown by <strong>following his Sunnah</strong>, honoring
        his teachings, sending blessings upon him often, defending his honor in
        a wise and lawful manner, and striving to embody his mercy, patience,
        humility, and justice in our dealings.
      </p>
      <p>
        The four Imams would frequently mention his hadith with deep reverence
        and would change their manner and language when his name was mentioned.
        For a believer, this love brings them closer to Allah and increases
        their hope of being with the Prophet ﷺ in Paradise.
      </p>
    `,
    source: [
      "Hadith: Ṣaḥīḥ al-Bukhārī &amp; Muslim (on loving the Prophet ﷺ)",
    ],
  },
]; */

let qaData = []; 

function toSafeString(value, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "string") return value.trim();
  return String(value).trim();
}

function toStringArray(value) {
  const raw = Array.isArray(value) ? value : (value ? [value] : []);
  return raw
    .map((item) => toSafeString(item))
    .filter(Boolean);
}

function normalizeQaEntry(entry, index = 0) {
  const safeEntry = entry && typeof entry === "object" ? entry : {};
  const question = toSafeString(safeEntry.question, "Untitled question");
  const category = toSafeString(safeEntry.category, "general").toLowerCase();

  return {
    ...safeEntry,
    id: toSafeString(safeEntry.id, `qa-${index + 1}`),
    category,
    question,
    answer: toSafeString(safeEntry.answer),
    tags: toStringArray(safeEntry.tags),
    source: toStringArray(safeEntry.source),
  };
}

fetch('assets/qa-data.json')
  .then(response => response.json())
  .then(data => {
    qaData = (Array.isArray(data) ? data : []).map((entry, index) => normalizeQaEntry(entry, index));
    console.log("QA Data loaded:", 
      qaData); // debug
    renderSearchResults(''); // ilk yükleme
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });

// ===============================
// Utility Functions
// ===============================

function clampNumber(value, min, max) {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return min;
  return Math.min(max, Math.max(min, num));
}

function cssUrl(url) {
  const safe = String(url || "").replace(/\\/g, "/").replace(/"/g, "%22");
  return `url("${safe}")`;
}

function resolveFirstLoadableImageSrc(srcCandidates = []) {
  const candidates = (Array.isArray(srcCandidates) ? srcCandidates : [srcCandidates])
    .map((s) => String(s || "").trim())
    .filter(Boolean);

  if (!candidates.length) return Promise.resolve("");

  return new Promise((resolve) => {
    let idx = 0;

    const tryNext = () => {
      if (idx >= candidates.length) {
        resolve(candidates[0]);
        return;
      }

      const candidate = candidates[idx++];
      const img = new Image();

      img.onload = () => resolve(candidate);
      img.onerror = () => tryNext();

      // cache-bust very lightly (avoids stale 0-byte cached assets during dev)
      const sep = candidate.includes("?") ? "&" : "?";
      img.src = `${candidate}${sep}t=${Date.now()}`;
    };

    tryNext();
  });
}
function renderAnswers(query) {
  const results = document.getElementById('results');
  results.innerHTML = '';

  const filtered = qaData.filter(entry => {
    const safeEntry = normalizeQaEntry(entry);
    if (!query) return true;
    return safeEntry.question.toLowerCase().includes(String(query).toLowerCase());
  });

  filtered.forEach(entry => {
    const safeEntry = normalizeQaEntry(entry);
    const card = document.createElement('div');

    const answer = document.createElement("div");
    answer.innerHTML = safeEntry.answer;

    const source = document.createElement("div");
    const sourceText = safeEntry.source.join(" | ");
    source.textContent = `📖 ${sourceText}`;

    card.appendChild(answer);
    card.appendChild(source);

    results.appendChild(card);
  });
}

/**
 * Full-screen blurred background "component"
 *
 * Usage:
 *   mountFullScreenBlurredBackground({ src: "assets/kaaba.jpg.jfif.jfif", blur: 6, overlayOpacity: 0.45 });
 */
function mountFullScreenBlurredBackground(options = {}) {
  const defaults = {
    // Default requested: assets/kaaba.jpg.jfif
    // (Your repo currently also contains: assets/kaaba.jpg.jfif.jfif)
    src: "assets/kaaba.jpg.jfif",
    fallbackSrc: "assets/kaaba.jpg.jfif.jfif",
    blur: 10, // px
    overlayColor: "#000",
    overlayOpacity: 0.45, // 0..1
    enabled: true,
  };

  const config = { ...defaults, ...(options || {}) };
  if (!config.enabled) return null;

  const blurPx = clampNumber(config.blur, 0, 60);
  const overlayOpacity = clampNumber(config.overlayOpacity, 0, 1);

  // Prevent white edges when blurring by scaling the image up a bit.
  // Rule of thumb: more blur -> slightly more scale.
  const scale = 1 + blurPx / 80; // 10px => 1.125

  let root = document.querySelector(".fs-blur-bg");
  if (!root) {
    root = document.createElement("div");
    root.className = "fs-blur-bg";
    root.setAttribute("aria-hidden", "true");
    document.body.prepend(root);
  }

  resolveFirstLoadableImageSrc([config.src, config.fallbackSrc]).then((resolvedSrc) => {
    root.style.setProperty("--fs-bg-image", cssUrl(resolvedSrc || config.src));
  });
  root.style.setProperty("--fs-bg-blur", `${blurPx}px`);
  root.style.setProperty("--fs-bg-scale", String(scale));
  root.style.setProperty("--fs-bg-overlay-color", String(config.overlayColor || "#000"));
  root.style.setProperty("--fs-bg-overlay-opacity", String(overlayOpacity));

  return root;
}

if (typeof window !== "undefined") {
  window.mountFullScreenBlurredBackground = mountFullScreenBlurredBackground;
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesQuery(entry, query) {
  if (!query) return true;
  const safeEntry = normalizeQaEntry(entry);
  const q = normalizeText(query);
  const haystackParts = [
    safeEntry.question,
    safeEntry.answer.replace(/<[^>]+>/g, ""),
    safeEntry.tags.join(" "),
    safeEntry.source.join(" "),
  ];
  const haystack = normalizeText(haystackParts.join(" "));
  return q
    .split(" ")
    .filter(Boolean)
    .every((token) => haystack.includes(token));
}

function highlightText(text, query) {
  const content = String(text || "");
  const q = String(query || "").trim();
  if (!q) return content;

  const regex = new RegExp(`(${q})`, "gi");
  return content.replace(regex, "<mark>$1</mark>");
}

function createQACard(entry, searchQuery = "") {
  const safeEntry = normalizeQaEntry(entry);
  const card = document.createElement("article");
  card.className = "qa-card";
  card.setAttribute("data-category", safeEntry.category);

  const header = document.createElement("header");
  header.className = "qa-card-header";

  const pill = document.createElement("div");
  pill.className = "qa-pill";
  const dot = document.createElement("span");
  dot.className = "qa-pill-dot";
  const pillText = document.createElement("span");
  pillText.textContent = safeEntry.category;
  pill.appendChild(dot);
  pill.appendChild(pillText);

  const headerTextWrapper = document.createElement("div");
  const tag = document.createElement("div");
  tag.className = "qa-tag";
  tag.textContent = "Q & A";
  const question = document.createElement("h3");
  question.className = "qa-question";
  question.textContent = safeEntry.question;

  headerTextWrapper.appendChild(tag);
  headerTextWrapper.appendChild(question);

  header.appendChild(pill);
  header.appendChild(headerTextWrapper);

  const answer = document.createElement("div");
  answer.className = "qa-answer";
  answer.innerHTML = highlightText(safeEntry.answer, searchQuery);

  const source = document.createElement("div");
  source.className = "qa-source";
  const sourceText = safeEntry.source.join(" | ");
  source.textContent = `📖 ${sourceText}`;

  card.appendChild(answer);
  if (safeEntry.source.length) {
    card.appendChild(source);
  }

  return card;
}

function populateCategoryLists() {
  const listContainers = document.querySelectorAll("[data-category-list]");
  listContainers.forEach((container) => {
    const category = container.getAttribute("data-category-list");
    const items = qaData.filter((item) => item.category === category);
    container.innerHTML = "";
    items.forEach((entry) => {
      const card = createQACard(entry, "");
      container.appendChild(card);
    });
  });
}
 function renderSearchResults(query) {
  const container = document.getElementById("search-results");
  if (!container) return;

  const trimmed = (query || "").trim();
  const matches = qaData.filter((entry) => matchesQuery(entry, trimmed));

  container.innerHTML = "";

  if (!trimmed) {
    const helper = document.createElement("p");
    helper.style.color = "#9ca3af";
    helper.style.fontSize = "0.9rem";
    helper.textContent =
      "Start typing your question above, or use keywords like “prayer”, “fasting”, or “parents”.";
    container.appendChild(helper);
    return;
  }

  if (matches.length === 0) {
    const noResult = document.createElement("p");
    noResult.style.color = "#9ca3af";
    noResult.style.fontSize = "0.9rem";
    noResult.textContent =
      "No exact match was found in this basic collection. Please refine your question, browse the categories, or consult a qualified scholar for detailed personal guidance.";
    container.appendChild(noResult);
    return;
  }

  matches.forEach((entry) => {
    const card = createQACard(entry, trimmed);
    container.appendChild(card);
  });
}

function setupSearchForm() {
  const form = document.querySelector(".search-form");
  const input = document.getElementById("question-input");
  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    renderSearchResults(input.value);
  });

  input.addEventListener("input", () => {
    renderSearchResults(input.value);
  });
}

function setupCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab");
  const panels = document.querySelectorAll(".category-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetCategory = tab.getAttribute("data-category");
      const targetPanelId = `panel-${targetCategory}`;

      tabs.forEach((t) => t.setAttribute("aria-selected", "false"));
      panels.forEach((panel) => panel.classList.remove("is-active"));

      tab.setAttribute("aria-selected", "true");
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add("is-active");
      }
    });
  });
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggle || !navLinks) return;

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setupHeroBackground() {
  const heroBackground = document.querySelector(".hero-background-images");
  if (!heroBackground) return;

  const images = heroBackground.querySelectorAll(".hero-bg-image");
  const urls = Array.from(images)
    .map((div) => div.getAttribute("data-img"))
    .filter(Boolean);

  if (!urls.length) return;

  // ## TRICK: Customize how the background blends Kaaba, Madinah, and calligraphy images
  const backgroundImages = urls
    .map((url) => `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url("${url}")`)
    .join(", ");

  heroBackground.style.backgroundImage = backgroundImages;
}

function setCurrentYear() {
  const span = document.getElementById("current-year");
  if (!span) return;
  span.textContent = String(new Date().getFullYear());
}

// ===============================
// Initialization
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // Example usage (override any of these values in index.html via window.FS_BLUR_BG_CONFIG)
  const userBgConfig =
    typeof window !== "undefined" && window.FS_BLUR_BG_CONFIG
      ? window.FS_BLUR_BG_CONFIG
      : null;

  mountFullScreenBlurredBackground(
    userBgConfig || {
      // You can override dynamically:
      // src: "assets/kaaba.jpg.jfif.jfif",
      // blur: 12,
      // overlayColor: "#0b1020",
      // overlayOpacity: 0.55,
    }
  );

  populateCategoryLists();
  setupSearchForm();
  setupCategoryTabs();
  setupNavToggle();
  setupHeroBackground();
  setCurrentYear();

  // Render default helper message
  renderSearchResults("");
});

