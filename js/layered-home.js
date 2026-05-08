const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const driftLayers = [...document.querySelectorAll(".drift-layer")];

function updateDrift() {
  const viewportHeight = window.innerHeight || 1;

  driftLayers.forEach((layer) => {
    const rect = layer.parentElement.getBoundingClientRect();
    const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
    const clamped = Math.min(1, Math.max(0, progress));
    const speed = Number.parseFloat(layer.dataset.speed || "0");

    layer.style.setProperty("--drift", `${clamped * speed * 100}vh`);
  });
}

updateDrift();
window.addEventListener("scroll", updateDrift, { passive: true });
window.addEventListener("resize", updateDrift);
