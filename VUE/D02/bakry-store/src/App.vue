<template>
  <div class="min-h-screen flex flex-col bg-butter text-chocolate font-sans antialiased selection:bg-pastry/30 selection:text-chocolate">
    <Navbar v-if="$route.name !== 'not-found'" @open-cart="isCartOpen = true" />

    <main class="flex-grow">
      <router-view 
        :key="$route.fullPath"
      />
    </main>

    <Footer v-if="$route.name !== 'not-found'" />

    <div 
      v-if="isCartOpen" 
      class="fixed inset-0 z-50 overflow-hidden" 
      role="dialog" 
      aria-modal="true"
    >

      <div 
        @click="isCartOpen = false"
        class="absolute inset-0 bg-chocolate/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
      ></div>

      <div class="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div class="w-screen max-w-md bg-butter border-l border-cream-300 shadow-warm-lg flex flex-col h-full">
          <div class="px-6 py-5 border-b border-cream-300 flex items-center justify-between">
            <h2 class="font-serif text-2xl font-bold text-chocolate">Your Basket</h2>
            <button 
              @click="isCartOpen = false" 
              class="text-chocolate hover:text-crust p-1.5 rounded-full hover:bg-cream-300 transition-colors cursor-pointer"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <p class="text-sm text-chocolate/60">Your basket is empty. Fill it with delicious warmth!</p>
              <button 
                @click="isCartOpen = false"
                class="px-5 py-2.5 rounded-xl bg-pastry text-chocolate font-bold hover:bg-honey transition-colors cursor-pointer"
              >
                Go to Shop
              </button>
            </div>
            
            <div 
              v-else 
              v-for="item in cart" 
              :key="item.product.id"
              class="flex items-center py-4 border-b border-cream-300/60"
            >
              <img :src="item.product.image" :alt="item.product.name" class="w-16 h-16 object-cover rounded-xl border border-cream-300" />
              
              <div class="ml-4 flex-1">
                <div class="flex items-start justify-between">
                  <h4 class="font-serif text-sm font-bold text-chocolate">{{ item.product.name }}</h4>
                  <span class="text-xs font-semibold text-crust">${{ (item.product.price * item.quantity).toFixed(2) }}</span>
                </div>
                
                <div class="flex items-center justify-between mt-2.5">
                  
                  <div class="flex items-center border border-cream-300 rounded-lg bg-cream-100 overflow-hidden">
                    <button 
                      @click="updateQuantity(item.product.id, -1)" 
                      class="px-2 py-1 text-chocolate/70 hover:bg-cream-300 hover:text-chocolate font-bold text-xs cursor-pointer"
                    >
                      −
                    </button>
                    <span class="px-3 text-xs font-bold text-chocolate">{{ item.quantity }}</span>
                    <button 
                      @click="updateQuantity(item.product.id, 1)" 
                      class="px-2 py-1 text-chocolate/70 hover:bg-cream-300 hover:text-chocolate font-bold text-xs cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  
                  
                  <button 
                    @click="removeFromCart(item.product.id)" 
                    class="text-xs text-berry hover:underline font-semibold cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-if="cart.length > 0" class="border-t border-cream-300 px-6 py-6 space-y-4 bg-cream-200">
            <div class="flex justify-between text-xs text-chocolate/75">
              <span>Subtotal</span>
              <span>${{ cartSubtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-xs text-chocolate/75">
              <span>Packing & Delivery</span>
              <span>$2.00</span>
            </div>
            <div class="flex justify-between text-sm font-bold text-chocolate border-t border-cream-300/60 pt-4">
              <span>Total</span>
              <span>${{ cartTotal.toFixed(2) }}</span>
            </div>
            
            <button 
              @click="checkout"
              class="w-full inline-flex items-center justify-center py-4 bg-berry hover:bg-berry/95 text-white font-bold rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-200 cursor-pointer"
            >
              Order & Pay ${{ cartTotal.toFixed(2) }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div 
      v-if="showToast" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50 max-w-sm bg-chocolate border border-crust text-cream-200 px-5 py-4 rounded-2xl shadow-warm-lg flex items-center justify-between space-x-4 animate-slide-in-up"
    >
      <div class="flex items-center space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 text-cream-200">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 1 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.852l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
        <p class="text-xs font-semibold leading-snug">{{ toastMessage }}</p>
      </div>
      <button @click="closeToast" class="text-cream-400 hover:text-white font-bold text-sm cursor-pointer">
        ✕
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isCartOpen: false
    }
  },
  computed: {
    ...mapGetters(['cart', 'cartSubtotal', 'cartTotal', 'toast']),
    showToast() {
      return this.toast.show
    },
    toastMessage() {
      return this.toast.message
    }
  },
  methods: {
    ...mapActions(['updateQuantity', 'removeFromCart', 'checkout']),
    closeToast() {
      this.$store.commit('SET_TOAST', { message: '', show: false })
    }
  }
}</script>

<style>

@keyframes slideInUp {
  from {
    transform: translateY(1rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-in-up {
  animation: slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>