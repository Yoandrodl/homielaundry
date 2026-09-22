const fs = require('fs');

let index = fs.readFileSync('index.njk', 'utf-8');
index = index.replace('collections.tips', 'collections.publishedTips');
fs.writeFileSync('index.njk', index, 'utf-8');

let tips = fs.readFileSync('tips-info/index.njk', 'utf-8');
tips = tips.replace('collections.tips', 'collections.publishedTips');
fs.writeFileSync('tips-info/index.njk', tips, 'utf-8');
