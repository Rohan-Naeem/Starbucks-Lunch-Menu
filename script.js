/* =========================================================
   Starbucks Lunch Menu — data & interactivity
   Note: prices are presented as reference/estimated menu
   prices and can vary by store location. Calorie figures
   reflect standard published nutrition information and are
   not invented. See disclaimer.html for details.
   ========================================================= */

const MENU_ITEMS = [
  {
    id: "crispy-grilled-cheese",
    name: "Crispy Grilled Cheese on Sourdough",
    category: "sandwiches",
    tags: ["sandwiches", "vegetarian"],
    description:
      "Toasted sourdough with melted cheddar and Monterey Jack, griddled until golden and crisp at the edges.",
    price: 7.95,
    calories: 520,
    image: "images/crispy-grilled-cheese.jpg",
    nutrition: { protein: "21g", carbs: "47g", fat: "27g", sodium: "1040mg" },
    popular: true,
  },
  {
    id: "ham-swiss-baguette",
    name: "Ham & Swiss on Baguette",
    category: "sandwiches",
    tags: ["sandwiches"],
    description:
      "Sliced ham and Swiss cheese with whole grain mustard on a crisp baguette roll.",
    price: 8.25,
    calories: 500,
    image: "images/ham-swiss-baguette.jpg",
    nutrition: { protein: "22g", carbs: "40g", fat: "23g", sodium: "1200mg" },
    popular: true,
  },
  {
    id: "tomato-mozzarella-focaccia",
    name: "Tomato & Mozzarella on Focaccia",
    category: "sandwiches",
    tags: ["sandwiches", "vegetarian", "light"],
    description:
      "Fresh mozzarella, tomato, and basil pesto layered on soft rosemary focaccia.",
    price: 7.45,
    calories: 360,
    image: "images/tomato-mozzarella-focaccia.jpg",
    nutrition: { protein: "15g", carbs: "47g", fat: "12g", sodium: "590mg" },
    popular: true,
  },
  {
    id: "turkey-provolone-pesto",
    name: "Turkey, Provolone & Pesto on Ciabatta",
    category: "sandwiches",
    tags: ["sandwiches", "protein"],
    description:
      "Roasted turkey, provolone, and basil pesto mayo layered on toasted ciabatta.",
    price: 8.65,
    calories: 520,
    image: "images/turkey-provolone-pesto.jpg",
    nutrition: { protein: "32g", carbs: "53g", fat: "19g", sodium: "1190mg" },
    popular: true,
  },
  {
    id: "avocado-spread",
    name: "Avocado Spread",
    category: "sandwiches",
    tags: ["vegetarian", "light"],
    description:
      "A simple side of seasoned mashed avocado, perfect for adding to any sandwich or pocket.",
    price: 1.55,
    calories: 90,
    image: "images/avocado-spread.jpg",
    nutrition: { protein: "1g", carbs: "5g", fat: "8g", sodium: "150mg" },
    popular: false,
  },
  {
    id: "spicy-falafel-pocket",
    name: "Spicy Falafel Pocket",
    category: "pockets",
    tags: ["pockets", "vegetarian", "light"],
    description:
      "Herbed falafel, pickled vegetables, and a spiced yogurt sauce tucked into warm flatbread.",
    price: 5.25,
    calories: 230,
    image: "images/spicy-falafel-pocket.jpg",
    nutrition: { protein: "8g", carbs: "38g", fat: "6g", sodium: "400mg" },
    popular: true,
  },
  {
    id: "jalapeno-chicken-pocket",
    name: "Jalape\u00f1o Chicken Pocket",
    category: "pockets",
    tags: ["pockets", "light"],
    description:
      "Shredded chicken with jalape\u00f1o and Monterey Jack folded into a soft grilled pocket.",
    price: 4.95,
    calories: 200,
    image: "images/jalapeno-chicken-pocket.jpg",
    nutrition: { protein: "14g", carbs: "24g", fat: "7g", sodium: "480mg" },
    popular: false,
  },
  {
    id: "eggs-cheddar-protein-box",
    name: "Eggs & Cheddar Protein Box",
    category: "protein-boxes",
    tags: ["protein-boxes", "vegetarian", "protein"],
    description:
      "Hard-boiled eggs, cheddar cheese, multigrain muesli bread, and grapes for a balanced bite.",
    price: 7.45,
    calories: 460,
    image: "images/eggs-cheddar-protein-box.jpg",
    nutrition: { protein: "21g", carbs: "39g", fat: "24g", sodium: "450mg" },
    popular: true,
  },
  {
    id: "cheese-fruit-protein-box",
    name: "Cheese & Fruit Protein Box",
    category: "protein-boxes",
    tags: ["protein-boxes", "vegetarian"],
    description:
      "A trio of cheeses paired with grapes, apple slices, and multigrain muesli bread.",
    price: 7.25,
    calories: 470,
    image: "images/cheese-fruit-protein-box.jpg",
    nutrition: { protein: "18g", carbs: "37g", fat: "28g", sodium: "400mg" },
    popular: true,
  },
  {
    id: "eggs-gouda-protein-box",
    name: "Eggs & Gouda Protein Box",
    category: "protein-boxes",
    tags: ["protein-boxes", "vegetarian", "protein"],
    description:
      "Hard-boiled eggs and smoked Gouda with fruit and multigrain bread for staying power.",
    price: 7.25,
    calories: 530,
    image: "images/eggs-gouda-protein-box.jpg",
    nutrition: { protein: "22g", carbs: "41g", fat: "29g", sodium: "470mg" },
    popular: false,
  },
  {
    id: "cheese-trio-protein-box",
    name: "Cheese Trio Protein Box",
    category: "protein-boxes",
    tags: ["protein-boxes", "vegetarian"],
    description:
      "Cheddar, Gouda, and Swiss with grapes, dried fruit, and multigrain bread.",
    price: 7.45,
    calories: 520,
    image: "images/cheese-trio-protein-box.jpg",
    nutrition: { protein: "19g", carbs: "36g", fat: "30g", sodium: "430mg" },
    popular: false,
  },
  {
    id: "cheddar-salami-protein-box",
    name: "Cheddar & Uncured Salami Protein Box",
    category: "protein-boxes",
    tags: ["protein-boxes", "protein"],
    description:
      "Cheddar cheese and uncured salami with mixed nuts and dried fruit for a savory, protein-rich box.",
    price: 7.45,
    calories: 470,
    image: "images/cheddar-salami-protein-box.jpg",
    nutrition: { protein: "20g", carbs: "31g", fat: "31g", sodium: "810mg" },
    popular: false,
  },
];

const CATEGORY_LABELS = {
  all: "All",
  sandwiches: "Sandwiches",
  pockets: "Pockets",
  "protein-boxes": "Protein Boxes",
};

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function cardMarkup(item) {
  const categoryLabel = CATEGORY_LABELS[item.category] || item.category;
  return `
    <article class="food-card" data-id="${item.id}" data-category="${item.category}" data-tags="${item.tags.join(" ")}" data-calories="${item.calories}" data-name="${item.name.toLowerCase()}" data-description="${item.description.toLowerCase()}">
      <div class="food-card__media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" width="400" height="300">
      </div>
      <div class="food-card__body">
        <span class="food-card__tag">${categoryLabel}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="food-card__meta">
          <span class="badge badge--price">${formatPrice(item.price)}</span>
          <span class="badge badge--cal">${item.calories} Calories</span>
        </div>
        <button type="button" class="btn btn--ghost" data-view-details="${item.id}">View Details</button>
      </div>
    </article>
  `;
}

function renderGrid(container, items) {
  if (!container) return;
  container.innerHTML = items.map(cardMarkup).join("");
}

function initGrids() {
  const fullGrid = document.querySelector("[data-full-grid]");
  const popularGrid = document.querySelector("[data-popular-grid]");

  if (fullGrid) {
    renderGrid(fullGrid, MENU_ITEMS);
  }
  if (popularGrid) {
    renderGrid(popularGrid, MENU_ITEMS.filter((item) => item.popular));
  }
}

/* ---------- Search + category + quick filters (lunch-menu.html) ---------- */
function initFinder() {
  const grid = document.querySelector("[data-full-grid]");
  if (!grid) return;

  const searchInput = document.querySelector("[data-search-input]");
  const categoryButtons = document.querySelectorAll("[data-category-filter]");
  const quickButtons = document.querySelectorAll("[data-quick-filter]");
  const noResults = document.querySelector("[data-no-results]");
  const statusEl = document.querySelector("[data-results-status]");

  let activeCategory = "all";
  const activeQuickFilters = new Set();
  let searchTerm = "";

  function applyFilters() {
    const cards = grid.querySelectorAll(".food-card");
    let visibleCount = 0;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const tags = card.dataset.tags.split(" ");
      const name = card.dataset.name;
      const description = card.dataset.description;
      const calories = Number(card.dataset.calories);

      const matchesCategory = activeCategory === "all" || category === activeCategory;
      const matchesSearch =
        !searchTerm ||
        name.includes(searchTerm) ||
        description.includes(searchTerm) ||
        category.includes(searchTerm);

      let matchesQuick = true;
      activeQuickFilters.forEach((filter) => {
        if (filter === "under-400" && calories >= 400) matchesQuick = false;
        if (filter === "vegetarian" && !tags.includes("vegetarian")) matchesQuick = false;
        if (filter === "protein" && !tags.includes("protein")) matchesQuick = false;
        if (filter === "sandwiches" && category !== "sandwiches") matchesQuick = false;
      });

      const visible = matchesCategory && matchesSearch && matchesQuick;
      card.style.display = visible ? "" : "none";
      if (visible) visibleCount += 1;
    });

    if (noResults) {
      noResults.classList.toggle("is-visible", visibleCount === 0);
    }
    if (statusEl) {
      statusEl.textContent =
        visibleCount === 0
          ? "No lunch items found. Try another search."
          : `Showing ${visibleCount} of ${cards.length} lunch items`;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchTerm = event.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      activeCategory = btn.dataset.categoryFilter;
      applyFilters();
    });
  });

  quickButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.quickFilter;
      const pressed = btn.getAttribute("aria-pressed") === "true";
      btn.setAttribute("aria-pressed", String(!pressed));
      if (pressed) {
        activeQuickFilters.delete(filter);
      } else {
        activeQuickFilters.add(filter);
      }
      applyFilters();
    });
  });

  applyFilters();
}

/* ---------- Modal ---------- */
function initModal() {
  const overlay = document.querySelector("[data-modal-overlay]");
  if (!overlay) return;

  const modal = overlay.querySelector(".modal");
  const closeBtn = overlay.querySelector("[data-modal-close]");
  let lastFocused = null;

  function openModal(item) {
    lastFocused = document.activeElement;
    const categoryLabel = CATEGORY_LABELS[item.category] || item.category;
    modal.innerHTML = `
      <button type="button" class="modal__close" data-modal-close aria-label="Close details">&times;</button>
      <div class="modal__media">
        <img src="${item.image}" alt="${item.name}" width="640" height="360">
      </div>
      <div class="modal__body">
        <span class="modal__tag">${categoryLabel}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="modal__meta">
          <span class="badge badge--price">${formatPrice(item.price)}</span>
          <span class="badge badge--cal">${item.calories} Calories</span>
        </div>
        <div class="modal__nutrition">
          <div><strong>${item.nutrition.protein}</strong><span>Protein</span></div>
          <div><strong>${item.nutrition.carbs}</strong><span>Carbs</span></div>
          <div><strong>${item.nutrition.fat}</strong><span>Fat</span></div>
          <div><strong>${item.nutrition.sodium}</strong><span>Sodium</span></div>
        </div>
      </div>
    `;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    modal.querySelector("[data-modal-close]").addEventListener("click", closeModal);
    modal.querySelector("[data-modal-close]").focus();
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-view-details]");
    if (trigger) {
      const item = MENU_ITEMS.find((i) => i.id === trigger.dataset.viewDetails);
      if (item) openModal(item);
    }
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeModal();
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("is-open")) {
      closeModal();
    }
  });
}

/* ---------- Mobile nav ---------- */
function initNavToggle() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initGrids();
  initFinder();
  initModal();
});
