<template>
  <div class="py-12 max-w-7xl mx-auto px-6 w-full">
    
    <div class="mb-8">
      <router-link 
        to="/products" 
        class="inline-flex items-center text-xs font-bold tracking-widest uppercase text-crust hover:text-berry transition-colors duration-300 gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Products
      </router-link>
    </div>

    
    <div v-if="product" class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      
      <div class="lg:col-span-6">
        <div class="aspect-square w-full rounded-3xl overflow-hidden border border-cream-300 shadow-warm-lg bg-cream-100">
          <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
        </div>
      </div>

      
      <div class="lg:col-span-6 space-y-6">
        <div class="space-y-2">
          <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-pastry/15 text-crust">
            {{ product.category }}
          </span>
          <h1 class="font-serif text-4xl sm:text-5xl font-extrabold text-chocolate tracking-tight">
            {{ product.name }}
          </h1>
          
          
          <div class="flex items-center space-x-1 pt-1">
            <svg class="w-4 h-4 text-honey fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span class="text-xs font-bold text-chocolate/80">{{ product.rating }} / 5.0</span>
          </div>
        </div>

        
        <p class="font-serif text-3xl font-extrabold text-crust">
          ${{ product.price.toFixed(2) }}
        </p>

        
        <p class="text-sm text-chocolate/80 leading-relaxed font-light">
          {{ product.description }}
        </p>

        
        <ul class="space-y-3.5 border-y border-cream-300 py-6 text-xs text-chocolate/80 font-light">
          <li class="flex items-center gap-3">
            <span class="text-pastry text-base">✓</span> 100% organic locally-sourced grains
          </li>
          <li class="flex items-center gap-3">
            <span class="text-pastry text-base">✓</span> Baked fresh at 3:00 AM daily
          </li>
          <li class="flex items-center gap-3">
            <span class="text-pastry text-base">✓</span> Slow natural sourdough fermentation
          </li>
        </ul>

  
        <div class="flex items-center gap-4 pt-4">

          <div class="flex items-center border border-cream-300 rounded-xl bg-cream-100 overflow-hidden h-12">
            <button 
              @click="qty > 1 ? qty-- : null"
              class="px-4 text-chocolate/75 hover:bg-cream-300 font-bold cursor-pointer"
            >
              −
            </button>
            <span class="px-4 text-sm font-bold text-chocolate w-12 text-center">{{ qty }}</span>
            <button 
              @click="qty++"
              class="px-4 text-chocolate/75 hover:bg-cream-300 font-bold cursor-pointer"
            >
              +
            </button>
          </div>

          <button 
            @click="triggerAddToCart"
            class="flex-grow h-12 inline-flex items-center justify-center bg-berry hover:bg-berry/95 text-white font-bold rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-200 cursor-pointer"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-24 space-y-4">
      <div class="flex justify-center">
        <svg class="animate-spin h-10 w-10 text-pastry" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
      <h3 class="font-serif text-xl font-bold text-chocolate">Finding details...</h3>
    </div>

    <div v-if="product && relatedProducts.length > 0" class="mt-24 border-t border-cream-300 pt-16">
      <h2 class="font-serif text-3xl font-extrabold text-chocolate mb-8">Related Delicacies</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link 
          v-for="rel in relatedProducts" 
          :key="rel.id"
          :to="`/products/${rel.id}`"
          class="group bg-butter p-4 rounded-3xl border border-cream-200 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div class="aspect-square w-full rounded-2xl overflow-hidden border border-cream-300 bg-cream-100 relative mb-4">
            <img :src="rel.image" :alt="rel.name" class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
          </div>
          <h3 class="font-serif text-lg font-bold text-chocolate group-hover:text-pastry transition-colors duration-300">
            {{ rel.name }}
          </h3>
          <p class="text-xs text-crust font-bold mt-1">${{ rel.price.toFixed(2) }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductDetails',
  data() {
    return {
      qty: 1
    }
  },
  computed: {
    ...mapGetters(['productsList', 'getProductById']),
    product() {
      const id = this.$route.params.id
      return this.getProductById(id)
    },
    relatedProducts() {
      if (!this.product) return []
      return this.productsList
        .filter(p => p.category === this.product.category && p.id !== this.product.id)
        .slice(0, 3)
    }
  },
  watch: {
    '$route.params.id'() {
      this.qty = 1
    }
  },
  methods: {
    triggerAddToCart() {
      if (this.product) {
        for (let i = 0; i < this.qty; i++) {
          this.$store.dispatch('addToCart', this.product)
        }
      }
    }
  }
}</script>
