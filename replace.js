const fs = require('fs');

let content = fs.readFileSync('index.njk', 'utf-8');

// Hero Section
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281141020169\?text=Halo%20Homie%20Laundry%20Samarinda%2C%20saya%20ingin%20pesan"\s*target="_blank" rel="noopener" class="btn-secondary">\s*<i class="fab fa-whatsapp mr-2"><\/i>WhatsApp\s*<\/a>/,
  '<a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20saya%20mau%20tanya-tanya%20dulu%20soal%20promo%20dan%20harga%20laundry%20nih..." target="_blank" rel="noopener" class="btn-secondary"><i class="fab fa-whatsapp mr-2"></i>Tanya-Tanya Dulu (Gratis)</a><div class="text-xs text-indigo-200 mt-2 font-medium text-center">✨ Bebas canggung, chat aja dulu!</div>'
);

// Regular Pricing
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281228470169\?text=Saya%20mau%20paket%20Regular"\s*target="_blank" rel="noopener" class="btn-secondary w-full text-center block">Chat Kami<\/a>/,
  '<div class="text-center mb-2 text-yellow-400 text-sm">⭐⭐⭐⭐⭐ <span class="text-gray-500 text-xs">(Paling Laris)</span></div><a href="https://wa.me/6281228470169?text=Halo%20Admin%2C%20mau%20tanya%20harga%20Paket%20Regular..." target="_blank" rel="noopener" class="btn-secondary w-full text-center block">Tanya Harga Regular</a><p class="text-[11px] text-center text-gray-500 mt-2 font-medium">*Gratis Jemput Maks 3KM</p>'
);

// Express Pricing
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281228470169\?text=Saya%20mau%20paket%20Express"\s*target="_blank" rel="noopener" class="btn-primary w-full text-center block">Chat Kami<\/a>/,
  '<div class="text-center mb-2 text-yellow-500 text-sm">⚡ <span class="text-indigo-600 font-bold text-xs">Slot Terbatas Hari Ini!</span></div><a href="https://wa.me/6281228470169?text=Halo%20Admin%2C%20apakah%20slot%20Paket%20Express%20hari%20ini%20masih%20ada%3F" target="_blank" rel="noopener" class="btn-primary w-full text-center block shadow-lg shadow-indigo-200">Cek Slot Express</a><p class="text-[11px] text-center text-gray-500 mt-2 font-medium">*Gratis Jemput Maks 3KM</p>'
);

// Bulanan Pricing
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281141020169\?text=Saya%20mau%20paket%20Bulanan"\s*target="_blank" rel="noopener" class="btn-secondary w-full text-center block">Chat Kami<\/a>/,
  '<div class="text-center mb-2 text-indigo-600 font-bold text-sm"><i class="fas fa-wallet mr-1"></i> Paling Hemat!</div><a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20mau%20tanya%20detail%20Paket%20Bulanan%20yang%20hemat..." target="_blank" rel="noopener" class="btn-secondary w-full text-center block">Konsultasi Paket Bulanan</a>'
);

// Services - Laundry Biasa
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281141020169\?text=Saya%20mau%20pesan%20Laundry"\s*target="_blank" rel="noopener" class="btn-secondary">Chat Now<\/a>/,
  '<a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20saya%20mau%20tanya-tanya%20dulu%20layanan%20Laundry-nya..." target="_blank" rel="noopener" class="btn-secondary">Tanya-Tanya Dulu</a>'
);

// Services - Ambal
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281141020169\?text=Saya%20mau%20pesan%20Laundry%20Ambal"\s*target="_blank" rel="noopener" class="btn-secondary">Chat Now<\/a>/,
  '<a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20mau%20konsultasi%20harga%20cuci%20ambal%2Fkarpet..." target="_blank" rel="noopener" class="btn-secondary">Konsultasi Cuci Ambal</a>'
);

// Services - Shoes
content = content.replace(
  /<a href="https:\/\/wa\.me\/6281141020169\?text=Saya%20mau%20pesan%20Shoes%20Care"\s*target="_blank" rel="noopener" class="btn-secondary">Chat Now<\/a>/,
  '<a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20mau%20tanya%20promo%20cuci%20sepatu%20dong..." target="_blank" rel="noopener" class="btn-secondary">Cek Promo Sepatu</a>'
);

fs.writeFileSync('index.njk', content, 'utf-8');
