<script>
  function parallax(event, containerId) {
    const container = document.getElementById(containerId);
    const layers = container.querySelectorAll('.parallax-layer');
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    layers.forEach(layer => {
      const speed = parseFloat(layer.getAttribute('data-speed'));
      const depthX = (mouseX - centerX) * speed;
      const depthY = (mouseY - centerY) * speed;

      if (layer.classList.contains('layer1')) {
        layer.style.transform = `translateX(${depthX}px) translateY(${depthY}px)`;
      } else {
        layer.style.transform = `translateX(${-depthX}px) translateY(${-depthY}px)`;
      }
    });
  }
</script>
