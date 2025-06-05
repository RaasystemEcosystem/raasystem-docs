document.addEventListener('DOMContentLoaded', () => {
  const toc = document.querySelector('.toc');
  toc.innerHTML = `
    <h3>Docs</h3>
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#video">Intro Video</a></li>
    </ul>
  `;
});
