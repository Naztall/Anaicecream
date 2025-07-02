(() => {
  const container = document.getElementById('pixel-container');
  const dots = [];
  const maxDots = 30;

  // Mouse move listener
  document.addEventListener('mousemove', e => {
    const dot = document.createElement('div');
    dot.classList.add('pixel-dot');
    dot.style.left = `${e.pageX}px`;
    dot.style.top = `${e.pageY}px`;
    container.appendChild(dot);
    dots.push({ el: dot, life: 1.0 });
    
    if (dots.length > maxDots) {
      const old = dots.shift();
      old.el.remove();
    }
  });

  // Fade-out animation loop
  function animate() {
    for (let i = dots.length - 1; i >= 0; i--) {
      const d = dots[i];
      d.life -= 0.02;
      if (d.life <= 0) {
        d.el.remove();
        dots.splice(i, 1);
      } else {
        d.el.style.opacity = d.life;
        const scale = d.life;
        d.el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
})();
