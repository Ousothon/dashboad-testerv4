// Tab switching
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    tab
      .closest(".filter-tabs")
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});
// Nav item switching
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".nav-item")
      .forEach((n) => n.classList.remove("active"));
    item.classList.add("active");
  });
});
// Page btn switching
document.querySelectorAll(".age-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".page-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
