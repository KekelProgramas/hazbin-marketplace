async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);
    if (!response.ok) throw new Error(`Failed to load ${componentPath} (status ${response.status})`);
    const html = await response.text();
    const el = document.getElementById(elementId);
    if (!el) return console.warn(`Element with id "${elementId}" not found on this page.`);
    el.innerHTML = html;
  } catch (error) {
    console.error(`${componentPath}:`, error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadComponent('header-component', '/components/header.html');
  loadComponent('footer-component', '/components/footer.html');
});