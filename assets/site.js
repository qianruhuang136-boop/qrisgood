(function () {
  var root = document.documentElement;
  var progress = document.getElementById("progress");
  var themeToggle = document.getElementById("themeToggle");
  var filterButtons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".work-card");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = document.getElementById("lightboxImage");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var revealItems = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", function () {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.width = Math.min(100, ratio * 100) + "%";
  });

  themeToggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "violet" ? "" : "violet";
    if (next) {
      root.setAttribute("data-theme", next);
    } else {
      root.removeAttribute("data-theme");
    }
  });

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      filterButtons.forEach(function (item) {
        item.classList.toggle("active", item === button);
      });
      cards.forEach(function (card) {
        var categories = card.getAttribute("data-category") || "";
        card.classList.toggle("is-hidden", filter !== "all" && categories.indexOf(filter) === -1);
      });
    });
  });

  document.querySelectorAll("[data-lightbox]").forEach(function (button) {
    button.addEventListener("click", function () {
      lightboxImage.src = button.getAttribute("data-lightbox");
      lightboxImage.alt = button.getAttribute("data-caption") || "作品预览";
      lightboxCaption.textContent = button.getAttribute("data-caption") || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeLightbox();
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("visible"); });
  }
})();
