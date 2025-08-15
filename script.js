// ฟังก์ชันเลือกตัวละคร
function selectCharacter(name) {
  const display = document.getElementById('selectedCharacter');
  display.textContent = `คุณเลือกตัวละคร: ${name}`;
}

// ฟังก์ชันสร้างฟองพื้นหลัง
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  const size = Math.random() * 30 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = Math.random() * window.innerWidth + 'px';
  bubble.style.background = `rgba(255,255,255,${Math.random() * 0.5 + 0.2})`;
  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 6000);
}

// สร้างฟองทุก 200ms
setInterval(createBubble, 200);

// เอฟเฟกต์เล็ก ๆ ตามเมาส์
document.addEventListener('mousemove', (e) => {
  const particle = document.createElement('div');
  particle.className = 'bubble';
  const size = Math.random() * 15 + 5;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particle.style.left = e.clientX + 'px';
  particle.style.top = e.clientY + 'px';
  particle.style.background = 'rgba(255,255,255,0.8)';
  particle.style.animation = 'rise 1s linear forwards';
  document.body.appendChild(particle);

  setTimeout(() => particle.remove(), 1000);
});
