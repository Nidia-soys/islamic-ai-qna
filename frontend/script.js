// ================================
// STATE 
// ================================
let qaData = [];
let currentCategory = "all";
let searchQuery = "";

async function askBackend(message) {

  try {
    const response =
    await fetch ( 
      "httpÇ//localhost:5000/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify ({
          message
        })
      }
    );

    return await response.json();

  } catch (error) {
    console.error(error);

    return {
      reply: "Backend connection failed!"
    };
  }
}

const form = 
  document.querySelector(".search-form");

const input =
  document.getElementById("question-input");
  
const result =
  document.getElementById("search-results");
  
form.addEventListener(
  "submit",
  async (e) => {
    e.preventDefault();
    const question =
      input.value.trim();

    if (!question) return;
    
    results.innerHTML = 
      "<p>Thinking...</p>";

    const data =
      await askBackend(question);
      
    results.innerHTML = 
      <div class="qa-card">
        <h3 class="qa-question">
          ${question}
        </h3>

        <p class="qa-answer">
          ${data.reply}
        </p>

        <div class="qa-source">
          Source: ${data.source}
        </div>
      </div>  
      ;
  }
);  

// HELPERS
// ================================
const toSafeString = (value, fallback = "") =>
  value == null ? fallback : String(value).trim();

const toStringArray = (value) =>
 (Array.isArray(value) ? value : [value])
 .map((v) => toSafeString(v))
 .filter(Boolean);

function normalizeQaEntry(entry, index = 0) {
  return {
    id: toSafeString(entry?.id, `qa-${index + 1}`),
    category: toSafeString(entry?.category, "general").toLowerCase(),
    question: toSafeString(entry?.question, "Untitled question"),
    answer: toSafeString(entry?.answer),
    tags: toStringArray(entry?.tags),
    source: toStringArray(entry?.source),
  };
}

// ================================
// DATA LOAD
// ================================
async function loadQaData() {
  try {
    const res = await fetch("./assets/qa-data.json");
    const data = await res.json();

    qaData = (Array.isArray(data) ? data : []).map(normalizeQaEntry);

    console.log("QA Loaded: ", qaData);

    renderSearchResults("");
    populateCategoryLists();
  } catch (err) {
    console.error("JSON load error:", err);
  }
}

// ==================================
// SEARCH LOGIC
// ==================================
function normalizeText(text) {
  return String(text || "")
  .toLowerCase()
  .replace(/[^\p{L}\p{N}\s]/gu, " ")
  .replace(/\s+/g, " ")
  .trim();
}

function matchesQuery(entry, query) {
  if(!query) return true;

  const q = normalizeText(query);
  const haystack = normalizeText(
    [
      entry.question,
      entry.answer.replace(/<[^>]*>/g, ""),
      entry.tags.join(" "),
      entry.source.join(" "),
    ].join(" ")
  );
  return q.split(" ").every((word) => haystack.includes(word));
}

// =====================================
// UI Components 
// =====================================
function createQACard(entry) {
  const card = document.createElement("article");
  card.className = "qa-card";

  const question = document.createElement("h3");
  question.textContent = entry.question;

  const answer = document.createElement("div");
  answer.innerHTML = entry.answer;

  const source = document.createElement("div");
  source.className = "qa-source";
  source.textContent = `📖 ${entry.source.join(" | ")}`;

  card.append(question, answer);
  if(entry.source.length) card.appendChild(source);
  return card;
}

// ======================================
// RENDER
// ======================================
function renderSearchResults(query) {
  const container = document.getElementById("search-results");
  if (!container) return;

  container.innerHTML = "";

  if (!query.trim()) {
    container.innerHTML =
      '<p style="color:#9ca3af">Start typing a question...</p>';
    return;
  }

  const results = qaData.filter((q) => matchesQuery(q, query));

  if (!results.length) {
    container.innerHTML =
      '<p style="color:#9ca3af">No results found.</p>';
    return;
  }

  results.forEach((entry) => {
    container.appendChild(createQACard(entry));
  });
}

// ===============================
// Categories
// ===============================
function populateCategoryLists() {
  document.querySelectorAll("[data-category-list]").forEach((container) => {
    const category = container.dataset.categoryList;

    const filtered = qaData.filter((q) => q.category === category);

    container.innerHTML = "";

    filtered.forEach((entry) => {
      container.appendChild(createQACard(entry));
    });
  });
}

// ===============================
// Events
// ===============================
function setupSearch() {
  const input = document.getElementById("question-input");

  if (!input) return;

  input.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });
}

function setupNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-links");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open);
  });
}

// ===============================
// Init
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  loadQaData();
  setupSearch();
  setupNavToggle();
});
