// Back to top button
window.addEventListener('scroll', function() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

document.querySelector('.back-to-top').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Copy code button
document.querySelectorAll('pre').forEach(pre => {
  const button = document.createElement('button');
  button.textContent = '📋 Copiar';
  button.style.cssText = `
    display: block;
    margin-top: 10px;
    padding: 8px 15px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.9em;
    font-weight: 600;
    transition: background 0.3s;
  `;
  button.addEventListener('mouseover', () => button.style.background = '#764ba2');
  button.addEventListener('mouseout', () => button.style.background = '#667eea');
  button.addEventListener('click', function() {
    const code = pre.innerText;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = button.textContent;
      button.textContent = '✅ Copiado';
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  });
  pre.appendChild(button);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add copy button to code blocks
if (typeof Prism !== 'undefined') {
  Prism.hooks.add('complete', function(env) {
    if (!env.code) return;
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = '📋 Copiar';
    copyButton.addEventListener('click', function() {
      navigator.clipboard.writeText(env.code);
      copyButton.textContent = '✅ Copiado';
      setTimeout(() => {
        copyButton.textContent = '📋 Copiar';
      }, 2000);
    });
  });
}
