<template>
  <footer class="bg-chocolate text-cream-200 border-t border-crust/35 mt-auto">
    <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">

      <div class="md:col-span-5 space-y-4">
        <a href="#" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 rounded-xl bg-pastry/10 flex items-center justify-center border border-pastry/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5.5 h-5.5 text-pastry">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3a9.003 9.003 0 0 0-6.75 3.193M12 3a9.003 9.003 0 0 1 6.75 3.193M12 12a9.003 9.003 0 0 0-6.75 3.193M12 12a9.003 9.003 0 0 1 6.75 3.193" />
            </svg>
          </div>
          <span class="font-serif text-2xl font-bold tracking-wide text-pastry">L'Épi Doré</span>
        </a>
        <p class="text-xs text-cream-400/80 leading-relaxed font-light max-w-sm">
          Delivering the aroma and taste of artisanal, slow-fermented organic French breads and delicate pastries directly from our ovens to your tables.
        </p>
      </div>

      <div class="md:col-span-4 space-y-3">
        <h4 class="text-xs font-bold tracking-widest uppercase text-cream-300">Quick Navigation</h4>
        <div class="grid grid-cols-2 gap-2 text-xs font-medium text-cream-400">
          <a href="#" class="hover:text-pastry transition-colors duration-200">Home</a>
          <a href="#menu" class="hover:text-pastry transition-colors duration-200">Menu</a>
          <a href="#palette" class="hover:text-pastry transition-colors duration-200">Theme Palette</a>
          <a href="#about" class="hover:text-pastry transition-colors duration-200">About Us</a>
        </div>
      </div>

      <div class="md:col-span-3 space-y-3">
        <h4 class="text-xs font-bold tracking-widest uppercase text-cream-300">Baking Hours</h4>
        <ul class="text-xs text-cream-400/90 space-y-1.5 font-light">
          <li class="flex justify-between"><span>Mon — Fri</span> <span class="font-mono">06:00 - 18:00</span></li>
          <li class="flex justify-between"><span>Saturday</span> <span class="font-mono">07:00 - 16:00</span></li>
          <li class="flex justify-between"><span>Sunday</span> <span class="font-mono">07:00 - 13:00</span></li>
        </ul>
      </div>

    </div>

    <div class="border-t border-cream-400/10 py-6 text-center text-[10px] text-cream-400/50 tracking-wider uppercase font-light">
      <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span>© 2026 L'Épi Doré. All rights reserved.</span>
        <span>Artistic Patisserie Design & Theme</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}</script>