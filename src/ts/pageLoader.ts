export async function loadAndShowPage(pagePath: string, containerId: string) {
  try {
    const response = await fetch(pagePath);
    const pageContent = await response.text();

    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = pageContent;
    }
  } catch (error) {
    console.error(`Error loading page "${pagePath}":`, error);
  }
}
