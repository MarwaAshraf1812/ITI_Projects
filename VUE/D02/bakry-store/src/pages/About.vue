<template>
  <div>
    
    <section class="relative py-20 bg-gradient-to-b from-butter to-cream-200 overflow-hidden border-b border-cream-300">
      <div class="absolute top-10 left-10 w-72 h-72 bg-pastry/5 rounded-full blur-3xl"></div>
      <div class="max-w-5xl mx-auto px-6 text-center space-y-6 relative">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-honey/20 text-crust">
          Our Heritage & Passion
        </span>
        <h1 class="font-serif text-5xl sm:text-6xl font-extrabold text-chocolate tracking-tight">
          The Story Behind <span class="text-pastry font-serif italic">L'Épi Doré</span>
        </h1>
        <p class="text-base sm:text-lg text-chocolate/80 max-w-2xl mx-auto leading-relaxed font-light">
          Baking is not just a trade; it is a sacred conversation between nature, the baker, and the community. Discover how we turn simple flour, water, and salt into art.
        </p>
      </div>
    </section>


    <section class="py-24 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h2 class="font-serif text-3xl sm:text-4xl font-extrabold text-chocolate leading-tight">
          A Decade of Flour, Yeast & Fermentation
        </h2>
        <p class="text-sm text-chocolate/80 leading-relaxed font-light">
          Founded in 2014 by master baker Jean-Luc Martin, L'Épi Doré started as a tiny boutique corner in Paris. Jean-Luc set out with a simple mission: to preserve the ancient methods of wild fermentation that modern commercial baking had left behind.
        </p>
        <p class="text-sm text-chocolate/80 leading-relaxed font-light">
          Today, we bring those same French traditions to your neighborhood. Every morning at 3:00 AM, our bakers hand-shape sourdough loaves, roll laminated butter croissants, and glaze sweet berry tarts. We believe that good bread takes time, patience, and love.
        </p>

        <div class="grid grid-cols-3 gap-6 pt-6 border-t border-cream-300">
          <div>
            <p class="font-serif text-3xl font-extrabold text-pastry">100%</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-crust font-sans mt-1">Organic Wheat</p>
          </div>
          <div>
            <p class="font-serif text-3xl font-extrabold text-berry">24h+</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-crust font-sans mt-1">Slow Fermented</p>
          </div>
          <div>
            <p class="font-serif text-3xl font-extrabold text-honey">12k+</p>
            <p class="text-[10px] font-bold uppercase tracking-wider text-crust font-sans mt-1">Happy Customers</p>
          </div>
        </div>
      </div>

      <div class="relative flex justify-center">
        <div class="w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-warm-lg border border-cream-300 transform rotate-1 hover:rotate-0 transition-transform duration-500 bg-cream-300">
          <img src="/sourdough.png" alt="Fresh baked bread in bakery basket" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-6 -right-6 bg-chocolate text-cream-100 p-6 rounded-2xl shadow-warm-md max-w-xs space-y-2 border border-crust/20">
          <p class="font-serif text-lg font-bold text-pastry">"Time is our secret ingredient."</p>
          <p class="text-[10px] text-cream-400/80 font-light">— Chef Jean-Luc Martin</p>
        </div>
      </div>
    </section>

    <section class="py-20 bg-cream-200 border-t border-cream-300">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 class="font-serif text-4xl font-extrabold text-chocolate">The Pillars of Our Craft</h2>
          <p class="text-chocolate/75 text-sm">
            We don't cut corners. Here is how we ensure every bite is wholesome, delicious, and memorable.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-butter p-8 rounded-3xl border border-cream-300 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300 space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-pastry/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6 text-pastry">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3a9.003 9.003 0 0 0-6.75 3.193M12 3a9.003 9.003 0 0 1 6.75 3.193M12 12a9.003 9.003 0 0 0-6.75 3.193M12 12a9.003 9.003 0 0 1 6.75 3.193" />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-chocolate">Stone-Milled Grains</h3>
            <p class="text-xs text-chocolate/80 leading-relaxed font-light">
              We source single-origin heritage grains from sustainable farmers. Our flour is stone-milled to retain the wheat germ and essential nutrients.
            </p>
          </div>

          <div class="bg-butter p-8 rounded-3xl border border-cream-300 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300 space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-berry/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6 text-berry">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-chocolate">Wild Fermentation</h3>
            <p class="text-xs text-chocolate/80 leading-relaxed font-light">
              No commercial yeast is used. Our signature wild starter ("levain") is over a decade old, yielding natural acidity and easy digestibility.
            </p>
          </div>

          <div class="bg-butter p-8 rounded-3xl border border-cream-300 shadow-warm-sm hover:shadow-warm-md transition-shadow duration-300 space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-honey/15 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6 text-honey">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-chocolate">Community Centered</h3>
            <p class="text-xs text-chocolate/80 leading-relaxed font-light">
              We are dedicated to building a cozy community space. Unsold baked goods are donated daily to local shelters, avoiding food waste.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}</script>