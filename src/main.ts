import './style.scss';

import { loadAndShowPage } from './ts/pageLoader';
import { select, responsiveMenu } from './components/navbar/navbar';


interface PageConfig {
  path: string;
  containerId: string;
}

const pagesToLoad: PageConfig[] = [
  { path: '/src/components/navbar/navbar.html', containerId: 'navbar' },
  // Add more objects here if there are more pages to load.
];

async function loadPages() {
  for (const pageConfig of pagesToLoad) {
    await loadAndShowPage(pageConfig.path, pageConfig.containerId);
  }
}

loadPages();

// Event Listener for the link when clicking
const linkElement = document.querySelector("#links a");
linkElement?.addEventListener("click", () => {
  select(linkElement);
});

// Event Listener for the menu icon when clicking
const iconNav = document.getElementById("icon-nav");
iconNav?.addEventListener("click", () => {
  responsiveMenu();
});