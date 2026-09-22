const fs = require('fs');
let index = fs.readFileSync('index.njk', 'utf-8');

// Add ID to Instagram section
index = index.replace(
  /<!-- INSTAGRAM SECTION\s+-->\s*<!-- ===+ -->\s*<section class="py-8 px-4 bg-gray-50">/,
  '<!-- INSTAGRAM SECTION                                             -->\n    <!-- ============================================================ -->\n    <section id="instagram" class="py-8 px-4 bg-gray-50">'
);

// Fix Instagram link in bottom nav
index = index.replace(
  /<!-- Instagram -->\s*<a href="#"/g,
  '<!-- Instagram -->\n    <a href="/#instagram"'
);

fs.writeFileSync('index.njk', index, 'utf-8');
