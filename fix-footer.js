const fs = require('fs');

let index = fs.readFileSync('index.njk', 'utf-8');

index = index.replace(
  '<footer class="bg-white py-8">',
  '<footer class="bg-white pt-8 pb-28 md:py-8">'
);

fs.writeFileSync('index.njk', index, 'utf-8');
