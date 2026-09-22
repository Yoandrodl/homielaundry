const fs = require('fs');

let index = fs.readFileSync('index.njk', 'utf-8');

// Hide floating CS on mobile
index = index.replace('class="floating-cs"', 'class="floating-cs hidden md:block"');

// Insert mobile bottom nav right before </body>
const bottomNav = `
  <!-- Mobile Bottom Navigation -->
  <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around items-end pb-2 pt-2 z-[9999] rounded-t-[20px] shadow-[0_-5px_20px_rgba(0,0,0,0.08)]">
    <!-- Home -->
    <a href="/" class="flex flex-col items-center justify-center w-full text-indigo-600">
      <i class="fas fa-home text-xl mb-1"></i>
      <span class="text-[10px] font-semibold">Beranda</span>
    </a>
    
    <!-- Telepon -->
    <a href="tel:+6281141020169" class="flex flex-col items-center justify-center w-full text-gray-400 hover:text-indigo-600 transition-colors">
      <i class="fas fa-phone-alt text-xl mb-1"></i>
      <span class="text-[10px] font-medium">Telepon</span>
    </a>
    
    <!-- Floating Chat Button (Center) -->
    <a href="https://wa.me/6281141020169?text=Halo%20Admin%2C%20saya%20mau%20tanya-tanya%20dulu%20nih..." 
       target="_blank" rel="noopener"
       class="relative flex flex-col items-center justify-center w-full -mt-8 group">
      <div class="bg-indigo-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-300 border-4 border-white transform transition group-hover:scale-105">
        <i class="fab fa-whatsapp text-3xl"></i>
      </div>
      <span class="text-[10px] font-bold text-indigo-600 mt-1">Chat</span>
    </a>
    
    <!-- Instagram -->
    <a href="#" class="flex flex-col items-center justify-center w-full text-gray-400 hover:text-indigo-600 transition-colors">
      <i class="fab fa-instagram text-xl mb-1"></i>
      <span class="text-[10px] font-medium">Instagram</span>
    </a>
    
    <!-- Layanan -->
    <a href="/#services" class="flex flex-col items-center justify-center w-full text-gray-400 hover:text-indigo-600 transition-colors">
      <i class="fas fa-th-large text-xl mb-1"></i>
      <span class="text-[10px] font-medium">Layanan</span>
    </a>
  </nav>

</body>`;

index = index.replace('</body>', bottomNav);

fs.writeFileSync('index.njk', index, 'utf-8');
