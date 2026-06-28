<template>
  <div class="py-12 max-w-7xl mx-auto px-6 w-full">
    
    <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
      <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-pastry/15 text-crust">
        Our Artisanal Selection
      </span>
      <h1 class="font-serif text-5xl font-extrabold text-chocolate tracking-tight">
        The Full Bakery Collection
      </h1>
      <p class="text-chocolate/75 text-sm leading-relaxed font-light">
        Indulge in our selection of freshly baked organic sourdoughs, buttery pastries, and exquisite cakes. Order online for same-day boutique pickup.
      </p>
    </div>

    
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-cream-300 pb-8 mb-12">
      
      <div class="relative w-full md:max-w-xs">
        <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
          <svg class="h-4.5 w-4.5 text-chocolate/40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
          </svg>
        </span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search products..." 
          class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 bg-butter/50 focus:bg-butter focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm placeholder-chocolate/40 transition-all duration-300"
        />
      </div>

      
      <div class="flex flex-wrap gap-2">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="selectedCategory = cat"
          class="px-4.5 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer"
          :class="selectedCategory === cat 
            ? 'bg-chocolate text-white shadow-warm-sm scale-102' 
            : 'bg-cream-200 text-chocolate hover:bg-cream-300'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card 
        v-for="product in filteredProducts" 
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>

    
    <div v-else class="text-center py-24 space-y-4">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-chocolate/40">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A8.986 8.986 0 0 0 21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9a8.986 8.986 0 0 0 4.318-1.182L19.5 21l1.5-1.5-5.818-5.818zM12 19.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" />
        </svg>
      </div>
      <h3 class="font-serif text-xl font-bold text-chocolate">No treats found</h3>
      <p class="text-sm text-chocolate/60 max-w-xs mx-auto">We couldn't find any products matching your search. Try another query or category filter!</p>
      <button 
        @click="resetFilters" 
        class="px-5 py-2.5 rounded-xl bg-pastry text-chocolate font-bold hover:bg-honey transition-colors cursor-pointer"
      >
        View All Products
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import Card from '../components/Card.vue'

defineOptions({
  name: 'Products'
})

const store = useStore()

const products = computed(() => store.getters.productsList)
const categories = ['All', 'Bread', 'Pastries', 'Cakes']
const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesCategory = selectedCategory.value === 'All' || product.category === selectedCategory.value
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesSearch
  })
})

const resetFilters = () => {
  selectedCategory.value = 'All'
  searchQuery.value = ''
}

const addToCart = (product) => {
  store.dispatch('addToCart', product)
}
</script>
