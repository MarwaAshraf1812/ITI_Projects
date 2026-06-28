<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-butter px-6 py-24 text-center">
    <div class="space-y-6 max-w-md">
      <div class="relative flex justify-center">
        <span class="font-serif text-9xl font-extrabold text-pastry/30 select-none">404</span>
      </div>
      
      <div class="space-y-2">
        <h1 class="font-serif text-3xl font-extrabold text-chocolate tracking-tight">Oven is Empty!</h1>
        <p class="text-sm text-chocolate/75 leading-relaxed font-light">
          We couldn't find the page or pastry you were looking for. It might have been devoured or retired from our catalog.
        </p>
      </div>

      <div class="pt-4">
        <router-link 
          to="/" 
          class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-berry text-white font-bold text-xs tracking-wider uppercase shadow-warm-md hover:bg-berry/95 hover:shadow-warm-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
        >
          Return to Bakery
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}</script>
