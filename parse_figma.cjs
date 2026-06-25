const fs = require('fs');
const data = JSON.parse(fs.readFileSync('figma_out.json', 'utf8'));

function findNodesByName(node, names, results = []) {
  if (names.includes(node.name)) {
    results.push(node);
  }
  if (node.children) {
    for (const child of node.children) {
      findNodesByName(child, names, results);
    }
  }
  return results;
}

const desktopNodes = findNodesByName(data.document, ['Desktop - 1280px', 'Desktop', 'Focus Frame 2.0']);
const desktop = desktopNodes[0] || data.document.children[0].children[0];

const targetNodes = findNodesByName(desktop, ['Sign up', 'Sign Up', 'Reviews', 'Our Courses', 'Footer', 'Footer top', 'Footer Links', 'Form', 'Branding']);

targetNodes.forEach(n => {
  console.log(`${n.name} (id: ${n.id}): y=${n.absoluteBoundingBox?.y}, h=${n.absoluteBoundingBox?.height}, padding=${n.paddingTop}/${n.paddingBottom}, itemSpacing=${n.itemSpacing}`);
});
