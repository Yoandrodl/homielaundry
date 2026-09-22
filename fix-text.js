const fs = require('fs');

let content = fs.readFileSync('index.njk', 'utf-8');

// Replace Hero Section button text and subtitle
content = content.replace(
  'Tanya-Tanya Dulu (Gratis)</a><div class="text-xs text-indigo-200 mt-2 font-medium text-center">✨ Bebas canggung, chat aja dulu!</div>',
  'Tanya-Tanya Dulu</a><div class="text-xs text-indigo-200 mt-2 font-medium text-center">✨ CS kami selalu siap membantu setiap saat</div>'
);

fs.writeFileSync('index.njk', content, 'utf-8');
