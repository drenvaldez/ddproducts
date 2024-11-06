// List of JSON files to load
const jsonFiles = [
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/audio-books-premium-and-quality-authors.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/Bonus.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/e-books-premium-and-quality-authors.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/l2e-plr-products-with-reseller-rights.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-6figures-high-income-skills-collections.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-masterclass-collections.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-money-making-courses.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-premium-courses-top-brands.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-premium-courses-top-influencers.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-premium-paid-courses-experts.json',
  'https://cdn.jsdelivr.net/gh/drenvaldez/ddproducts/ddigiproducts/videos-premium-paid-courses-udemy.json'
];

// Load JSON data
async function loadJSON(file) {
  const response = await fetch(file);
  if (!response.ok) throw new Error('Network response was not ok: ' + response.statusText);
  return response.json();
}

// Load all JSON files
async function loadAllJSON() {
  const allData = [];
  for (const file of jsonFiles) {
    try {
      const data = await loadJSON(file);
      allData.push(...data); // Add data from each file to allData
    } catch (error) {
      console.error('Error loading JSON file:', error);
    }
  }
  postMessage(allData); // Send the loaded data back to the main script
}

// Run the loader
loadAllJSON();
