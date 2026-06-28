<template>
  <header class="sticky top-0 z-50 bg-butter/95 backdrop-blur-md border-b border-cream-300 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-22 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center space-x-3 group">
        <div class="w-11 h-11 rounded-2xl bg-pastry/15 flex items-center justify-center group-hover:bg-pastry/25 group-hover:rotate-6 transition-all duration-500 shadow-warm-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6 text-crust">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M12 3a9.003 9.003 0 0 0-6.75 3.193M12 3a9.003 9.003 0 0 1 6.75 3.193M12 12a9.003 9.003 0 0 0-6.75 3.193M12 12a9.003 9.003 0 0 1 6.75 3.193" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-2xl font-bold tracking-wide text-chocolate group-hover:text-crust transition-colors duration-300 leading-none">L'Épi Doré</span>
          <span class="text-[9px] font-sans tracking-widest uppercase text-crust/60 font-semibold mt-0.5">Artisanal Bakery</span>
        </div>
      </router-link>

      
      <nav class="hidden md:flex items-center space-x-8">
        <router-link 
          v-for="link in navLinks" 
          :key="link.text" 
          :to="link.url"
          class="relative py-2 text-xs font-bold tracking-widest uppercase text-chocolate/85 hover:text-berry transition-colors duration-300 group/link"
        >
          {{ link.text }}
          <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-berry transition-all duration-300 group-hover/link:w-full"></span>
        </router-link>
      </nav>

      <div class="flex items-center space-x-4">
        <button 
          @click="$emit('open-cart')"
          class="relative p-2.5 rounded-full hover:bg-cream-300 transition-colors duration-300 focus:outline-none cursor-pointer group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5.5 h-5.5 text-chocolate group-hover:text-berry transition-colors duration-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span v-if="cartCount > 0" class="absolute top-1 right-1 bg-berry text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
            {{ cartCount }}
          </span>
        </button>

        <router-link 
          to="/products" 
          class="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-berry text-white font-bold text-xs tracking-wider uppercase shadow-warm-sm hover:bg-berry/95 hover:shadow-warm-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
        >
          Order Online
        </router-link>
      </div>

    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'Navbar'
})

defineEmits(['open-cart'])

const store = useStore()

const cartCount = computed(() => store.getters.cartCount)

const navLinks = [
  { text: 'Home', url: '/' },
  { text: 'Products', url: '/products' },
  { text: 'Manage', url: '/products-management' },
  { text: 'About', url: '/about' }
]
</script>
