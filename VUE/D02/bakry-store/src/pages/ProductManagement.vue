<template>
  <div class="py-12 max-w-7xl mx-auto px-6 w-full">
    
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 border-b border-cream-300 pb-8">
       <div class="w-full grid grid-cols-1 sm:grid-cols-4 gap-6">
      <div class="bg-butter p-6 rounded-2xl border border-cream-300 shadow-warm-sm flex items-center space-x-4">
        <div class="w-12 h-12 rounded-xl bg-pastry/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5.5 h-5.5 text-pastry">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-wider text-crust">Total Catalog</p>
          <p class="font-serif text-2xl font-bold text-chocolate">{{ productsList.length }} Items</p>
        </div>
      </div>
      <div class="bg-butter p-6 rounded-2xl border border-cream-300 shadow-warm-sm flex items-center space-x-4">
        <div class="w-12 h-12 rounded-xl bg-honey/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5.5 h-5.5 text-honey">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581a2.25 2.25 0 003.182 0l5.178-5.178a2.25 2.25 0 000-3.182l-9.581-9.581A2.25 2.25 0 009.568 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-wider text-crust">Average Price</p>
          <p class="font-serif text-2xl font-bold text-chocolate">${{ avgPrice.toFixed(2) }}</p>
        </div>
      </div>
      <div class="bg-butter p-6 rounded-2xl border border-cream-300 shadow-warm-sm flex items-center space-x-4">
        <div class="w-12 h-12 rounded-xl bg-berry/10 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5.5 h-5.5 text-berry">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        <div>
          <p class="text-[10px] font-bold uppercase tracking-wider text-crust">Highest Rated</p>
          <p class="font-serif text-2xl font-bold text-chocolate">{{ highestRating }} ★</p>
        </div>
      </div>
       <button 
        @click="openAddForm"
        class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-berry text-white font-bold text-xs tracking-wider uppercase shadow-warm-md hover:bg-berry/95 hover:shadow-warm-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer self-center"
      >
        Add New Pastry
      </button>
    </div>
    </div>

   
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      
      <div class="lg:col-span-8 space-y-4">
        <div v-if="productsList.length === 0" class="text-center py-20 bg-butter border border-cream-300 rounded-3xl space-y-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-chocolate/40 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h3 class="font-serif text-lg font-bold text-chocolate">No products available</h3>
          <p class="text-xs text-chocolate/65 max-w-xs mx-auto">Get started by creating a product using the button above.</p>
        </div>

        <div v-else class="bg-butter rounded-3xl border border-cream-300 shadow-warm-sm overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-cream-200 border-b border-cream-300 text-[10px] font-bold uppercase tracking-widest text-crust">
                  <th class="py-4.5 px-6">Product</th>
                  <th class="py-4.5 px-6">Category</th>
                  <th class="py-4.5 px-6">Price</th>
                  <th class="py-4.5 px-6">Rating</th>
                  <th class="py-4.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-cream-300/60 text-sm">
                <tr v-for="prod in productsList" :key="prod.id" class="hover:bg-cream-100/40 transition-colors">
                  
                  <td class="py-4 px-6 flex items-center space-x-3.5">
                    <img :src="prod.image" :alt="prod.name" class="w-11 h-11 object-cover rounded-xl border border-cream-300 bg-cream-100" />
                    <div>
                      <p class="font-serif font-bold text-chocolate">{{ prod.name }}</p>
                      <p class="text-[10px] text-chocolate/55 line-clamp-1 max-w-[200px]">{{ prod.description }}</p>
                    </div>
                  </td>
                  
                  
                  <td class="py-4 px-6">
                    <span class="inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-pastry/10 text-crust">
                      {{ prod.category }}
                    </span>
                  </td>
                  
                  
                  <td class="py-4 px-6 font-semibold text-chocolate">
                    ${{ prod.price.toFixed(2) }}
                  </td>
                  
                  
                  <td class="py-4 px-6 font-bold text-honey text-xs">
                    {{ prod.rating }} ★
                  </td>
                  
                  
                  <td class="py-4 px-6 text-right space-x-1.5 whitespace-nowrap">
                    <button 
                      @click="selectProductForEdit(prod)" 
                      class="px-3 py-1.5 rounded-lg border border-cream-400 hover:border-chocolate hover:bg-cream-300 text-xs font-bold text-chocolate transition-all cursor-pointer"
                    >
                      Edit
                    </button>
                    <button 
                      @click="deleteProduct(prod.id)" 
                      class="px-3 py-1.5 rounded-lg border border-berry/30 hover:border-berry hover:bg-berry/10 text-xs font-bold text-berry transition-all cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      
      <div v-if="showForm" class="lg:col-span-4 bg-butter p-6 rounded-3xl border border-cream-300 shadow-warm-md space-y-3 animate-slide-in-up">
        <div class="flex items-center justify-between border-b border-cream-300 pb-3">
          <h3 class="font-serif text-lg font-bold text-chocolate">
            {{ isEditing ? 'Edit Product' : 'Add New Product' }}
          </h3>
          <button @click="showForm = false" class="text-chocolate/60 hover:text-chocolate font-bold text-sm cursor-pointer">
            ✕
          </button>
        </div>

        <form @submit.prevent="submitForm" class="space-y-4 text-xs">
          
          <div class="space-y-1.5">
            <label class="font-bold text-crust uppercase tracking-wider">Product Name</label>
            <input 
              v-model="form.name" 
              type="text" 
              required 
              placeholder="e.g., Raspberry Macaron"
              class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm"
            />
          </div>

          
          <div class="space-y-1.5">
            <label class="font-bold text-crust uppercase tracking-wider">Category</label>
            <select 
              v-model="form.category" 
              class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm bg-butter"
            >
              <option value="Bread">Bread</option>
              <option value="Pastries">Pastries</option>
              <option value="Cakes">Cakes</option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4">
            
            <div class="space-y-1.5">
              <label class="font-bold text-crust uppercase tracking-wider">Price ($)</label>
              <input 
                v-model.number="form.price" 
                type="number" 
                step="0.01" 
                min="0.1" 
                required
                class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm"
              />
            </div>

            
            <div class="space-y-1.5">
              <label class="font-bold text-crust uppercase tracking-wider">Rating (1-5)</label>
              <input 
                v-model.number="form.rating" 
                type="number" 
                step="0.1" 
                min="1" 
                max="5" 
                required
                class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm"
              />
            </div>
          </div>

          
          <div class="space-y-1.5">
            <label class="font-bold text-crust uppercase tracking-wider">Image Source</label>
            <select 
              v-model="form.image" 
              class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm bg-butter"
            >
              <option value="/sourdough.png">Sourdough Loaf (Bread)</option>
              <option value="/croissant.png">Croissant (Pastries)</option>
              <option value="/tart.png">Fruit Tart (Cakes)</option>
            </select>
          </div>

          
          <div class="space-y-1.5">
            <label class="font-bold text-crust uppercase tracking-wider">Description</label>
            <textarea 
              v-model="form.description" 
              rows="3" 
              required
              placeholder="Describe the flavors and ingredients..."
              class="w-full px-3 py-2.5 rounded-xl border border-cream-300 focus:outline-none focus:ring-2 focus:ring-pastry/30 text-sm"
            ></textarea>
          </div>

          
          <div class="flex gap-3 pt-3">
            <button 
              type="button" 
              @click="showForm = false"
              class="w-1/2 py-3 rounded-xl border border-cream-400 font-bold hover:bg-cream-200 transition-all text-center cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="w-1/2 py-3 rounded-xl bg-chocolate text-white font-bold hover:bg-chocolate/90 transition-all text-center cursor-pointer"
            >
              {{ isEditing ? 'Save Changes' : 'Create Item' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'ProductManagement'
})

const store = useStore()

const productsList = computed(() => store.getters.productsList)
const avgPrice = computed(() => store.getters.avgPrice)
const highestRating = computed(() => store.getters.highestRating)

const showForm = ref(false)
const isEditing = ref(false)
const editingId = ref(null)

const form = ref({
  name: '',
  category: 'Pastries',
  price: 3.50,
  rating: 4.8,
  image: '/croissant.png',
  description: ''
})

const openAddForm = () => {
  isEditing.value = false
  editingId.value = null
  form.value = {
    name: '',
    category: 'Pastries',
    price: 3.50,
    rating: 4.8,
    image: '/croissant.png',
    description: ''
  }
  showForm.value = true
}

const selectProductForEdit = (product) => {
  isEditing.value = true
  editingId.value = product.id
  form.value = { ...product }
  showForm.value = true
}

const deleteProduct = (id) => {
  if (confirm('Are you sure you want to delete this product from the inventory?')) {
    store.dispatch('deleteProduct', id)
  }
}

const submitForm = () => {
  if (isEditing.value) {
    store.dispatch('updateProduct', {
      id: editingId.value,
      ...form.value
    })
  } else {
    store.dispatch('addProduct', form.value)
  }
  showForm.value = false
}
</script>