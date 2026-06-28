<template>
  <div>
    
    <section class="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-butter to-cream-200">
      
      <div class="absolute top-1/4 left-10 w-72 h-72 bg-pastry/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-honey/10 rounded-full blur-3xl"></div>

      <div class="max-w-7xl mx-auto px-6 relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-honey/20 text-crust">
              Freshly Baked from the Heart
            </span>
            <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-chocolate">
              Crafting <span class="text-pastry font-serif italic">Golden</span> Moments, One Loaf at a Time
            </h1>
            <p class="text-base sm:text-lg text-chocolate/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Experience the aroma and taste of true French baking. We source organic, stone-ground flours and use slow natural wild fermentation processes to bake bread that nourishes.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <router-link 
                to="/products" 
                class="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-berry text-white font-semibold shadow-warm-md hover:bg-berry/95 hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                Explore Fresh Menu
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 relative flex justify-center">
            <div class="relative w-80 sm:w-96 aspect-square rounded-3xl overflow-hidden shadow-warm-lg border border-cream-300 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-cream-300">
              <img src="/croissant.png" alt="Fresh Butter Croissants" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span class="text-xs font-semibold tracking-widest text-honey uppercase">Warm Specialty</span>
                <h3 class="font-serif text-2xl font-bold">Laminated Butter Croissants</h3>
                <p class="text-xs text-white/80 font-light">Baked at dawn using 84-layer AOP butter laminate.</p>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-6 bg-butter border border-cream-300 p-4 rounded-2xl shadow-warm-md flex items-center space-x-3 max-w-[200px] animate-bounce">
              <div class="w-10 h-10 rounded-full bg-honey/20 flex items-center justify-center text-crust">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5.5 h-5.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3a9.003 9.003 0 0 0-6.75 3.193M12 3a9.003 9.003 0 0 1 6.75 3.193M12 12a9.003 9.003 0 0 0-6.75 3.193M12 12a9.003 9.003 0 0 1 6.75 3.193" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-chocolate/65">Golden Flaky crust</p>
                <p class="font-serif text-sm font-bold text-crust">100% Organic Wheat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-cream-200 border-t border-cream-300">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-pastry/15 text-crust">
            Customer Favorites
          </span>
          <h2 class="font-serif text-4xl font-extrabold text-chocolate">Top Baked Selections</h2>
          <p class="text-chocolate/75 text-sm font-light">
            Our most popular organic baked goods, fresh from the hearth every morning.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="product in topProducts" 
            :key="product.id"
            class="bg-butter p-4 rounded-2xl border border-cream-300 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-0.5 transition-all duration-300 flex items-center space-x-4"
          >
            <router-link :to="'/products/' + product.id" class="w-20 h-20 rounded-xl overflow-hidden border border-cream-300 bg-cream-100 shrink-0 block">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
            </router-link>
            <div class="flex-1 min-w-0 flex flex-col justify-between h-full py-1">
              <div>
                <router-link :to="'/products/' + product.id" class="block">
                  <h4 class="font-serif text-sm font-bold text-chocolate hover:text-pastry transition-colors duration-200 truncate">
                    {{ product.name }}
                  </h4>
                </router-link>
                <div class="flex items-center gap-1 mt-0.5">
                  
                  <svg class="w-3 h-3 text-honey fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span class="text-[10px] font-bold text-chocolate/70">{{ product.rating }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between mt-2 pt-2 border-t border-cream-300/40">
                <span class="font-serif text-xs font-extrabold text-crust">${{ product.price.toFixed(2) }}</span>
                <button 
                  @click="addToCart(product)"
                  class="p-1.5 rounded-lg bg-pastry hover:bg-honey text-chocolate transition-colors duration-200 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      categories: ['All', 'Bread', 'Pastries', 'Cakes'],
      selectedCategory: 'All',
    }
  },
  computed: {
    ...mapGetters({
      products: 'productsList'
    }),
    filteredProducts() {
      if (this.selectedCategory === 'All') return this.products
      return this.products.filter(p => p.category === this.selectedCategory)
    },
    topProducts() {
      return [...this.products].sort((a, b) => b.rating - a.rating).slice(0, 3)
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}</script>