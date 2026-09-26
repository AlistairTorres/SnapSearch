const records = [
  { title: "Coastal path", category: "nature", tags: ["coast", "walking", "outdoors"] },
  { title: "City geometry", category: "architecture", tags: ["city", "buildings", "lines"] },
  { title: "Morning desk", category: "workspace", tags: ["work", "desk", "light"] },
  { title: "Market colours", category: "street", tags: ["market", "colour", "people"] },
  { title: "Quiet reading room", category: "interior", tags: ["books", "room", "study"] }
];

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const results = document.querySelector("#results");
const summary = document.querySelector("#result-summary");

function render(items, query = "") {
  results.replaceChildren();
  summary.textContent = items.length + " result" + (items.length === 1 ? "" : "s") +
    (query ? " for “" + query + "”." : ".");

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No matching records. Try a broader search.";
    results.append(empty);
    return;
  }

  items.forEach((record) => {
    const card = document.createElement("article");
    card.className = "result-card";
    const title = document.createElement("h2");
    title.textContent = record.title;
    const category = document.createElement("p");
    category.className = "category";
    category.textContent = record.category;
    const tags = document.createElement("p");
    tags.textContent = record.tags.map((tag) => "#" + tag).join("  ");
    card.append(title, category, tags);
    results.append(card);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim().toLowerCase();
  const items = query
    ? records.filter((record) => [record.title, record.category, ...record.tags].join(" ").toLowerCase().includes(query))
    : records;
  render(items, input.value.trim());
});

render(records);
