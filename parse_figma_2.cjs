const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_out.json', 'utf8'));

const desktop = data.document.children[0].children.find(c => c.name === 'Desktop - 1280px' || c.name.includes('1280') || c.name.includes('Focus'));

if(desktop) {
  desktop.children.forEach(c => {
     console.log(`${c.name}: y=${c.absoluteBoundingBox?.y}, h=${c.absoluteBoundingBox?.height}, bottom=${c.absoluteBoundingBox?.y + c.absoluteBoundingBox?.height}`);
  });
}
