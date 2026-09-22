const fs = require('fs');

let index = fs.readFileSync('index.njk', 'utf-8');

index = index.replace(
  /\.floating-cs img \{[\s\S]*?\}/,
  '.floating-cs img { width: 220px; height: auto; cursor: pointer; transform-origin: bottom right; transition: transform 0.25s ease; filter: drop-shadow(0px 5px 15px rgba(0,0,0,0.2)); }'
);

index = index.replace(
  /\.floating-cs img:hover \{[\s\S]*?\}/,
  '.floating-cs img:hover { transform: scale(1.05); }'
);

index = index.replace(
  /@media \(min-width: 768px\) \{[\s\S]*?\.floating-cs img \{[\s\S]*?\}[\s\S]*?\}/,
  '@media (min-width: 768px) { .floating-cs img { width: 280px; } }'
);

fs.writeFileSync('index.njk', index, 'utf-8');
