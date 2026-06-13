const fs = require('fs');
const path = require('path');
const dir = 'src/components/home';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/viewport={{ once: true }}/g, 'viewport={{ once: true, margin: "-100px" }}');
  fs.writeFileSync(p, content);
});
console.log('Done!');
