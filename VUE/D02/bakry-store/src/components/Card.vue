<template>
  <div class="group bg-butter rounded-3xl border border-cream-200 shadow-warm-sm hover:shadow-warm-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
    
    <router-link :to="'/products/' + product.id" class="relative aspect-square w-full overflow-hidden bg-cream-100 border-b border-cream-300 block">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      <span class="absolute top-4 left-4 bg-butter/90 backdrop-blur-sm text-chocolate text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border border-cream-300">
        {{ product.category }}
      </span>
    </router-link>

    
    <div class="p-6 flex-grow flex flex-col justify-between">
      <div class="space-y-2">
        
        <router-link :to="'/products/' + product.id" class="block">
          <h3 class="font-serif text-xl font-bold text-chocolate hover:text-pastry transition-colors duration-300 leading-tight">
            {{ product.name }}
          </h3>
        </router-link>
        
        
        <div class="flex items-center space-x-1">
          <svg class="w-3.5 h-3.5 text-honey fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span class="text-[11px] font-bold text-chocolate/70">{{ product.rating }} / 5.0</span>
        </div>

        
        <p class="text-xs text-chocolate/75 leading-relaxed font-light line-clamp-2">
          {{ product.description }}
        </p>
      </div>

      
      <div class="flex items-center justify-between pt-5 border-t border-cream-300/60 mt-5">
        <span class="font-serif text-lg font-extrabold text-crust">
          ${{ product.price.toFixed(2) }}
        </span>

        <button 
          @click="$emit('add-to-cart', product)"
          class="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pastry hover:bg-honey text-chocolate font-bold text-xs tracking-wide transition-all duration-300 cursor-pointer shadow-warm-sm hover:shadow-warm-md"
        >
          <span>Add</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  emits: ['add-to-cart']
}</script>
