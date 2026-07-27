const toggle = document.querySelector("[data-toggle-language]");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("hide-en");
    const hidden = document.body.classList.contains("hide-en");
    toggle.textContent = hidden ? "显示 EN" : "隐藏 EN";
    toggle.setAttribute("aria-pressed", String(hidden));
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
