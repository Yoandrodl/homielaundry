const fs = require('fs');

let index = fs.readFileSync('index.njk', 'utf-8');

const oldCSS = `    .floating-cs img {
      width: 120px; height: auto;
      cursor: pointer;
      transform: scale(3);
      transform-origin: bottom right;
      transition: transform 0.25s ease;
    }
    .floating-cs img:hover { transform: scale(3.15); }
    @media (min-width: 768px) {
      .floating-cs img { width: 90px; transform: scale(2); }
    }`;

const newCSS = `    .floating-cs img {
      width: 220px; height: auto;
      cursor: pointer;
      transform-origin: bottom right;
      transition: transform 0.25s ease;
      filter: drop-shadow(0px 5px 15px rgba(0,0,0,0.2));
    }
    .floating-cs img:hover { transform: scale(1.05); }
    @media (min-width: 768px) {
      .floating-cs img { width: 280px; }
    }`;

index = index.replace(oldCSS, newCSS);
fs.writeFileSync('index.njk', index, 'utf-8');
