import { createStore } from 'vuex';
import productsData from '../data.json';

export default createStore({
  state() {
    return {
      products: productsData,
      cart: [],
      toast: {
        message: '',
        show: false
      },
      toastTimeout: null
    };
  },
  getters: {
    productsList(state) {
      return state.products;
    },
    cart(state) {
      return state.cart;
    },
    cartCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartSubtotal(state) {
      return state.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    },
    cartTotal(state, getters) {
      if (getters.cartSubtotal === 0) return 0;
      return getters.cartSubtotal + 2.0;
    },
    avgPrice(state) {
      if (state.products.length === 0) return 0;
      const total = state.products.reduce((sum, p) => sum + p.price, 0);
      return total / state.products.length;
    },
    highestRating(state) {
      if (state.products.length === 0) return 0;
      return Math.max(...state.products.map(p => p.rating));
    },
    topProducts(state) {
      return [...state.products].sort((a, b) => b.rating - a.rating).slice(0, 3);
    },
    getProductById: (state) => (id) => {
      if (!id) return null;
      return state.products.find(p => String(p.id) === String(id));
    },
    toast(state) {
      return state.toast;
    }
  },
  mutations: {
    ADD_TO_CART(state, product) {
      if (!product) return;
      const existingItem = state.cart.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      const index = state.cart.findIndex(item => item.product.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    UPDATE_QUANTITY(state, { productId, change }) {
      const item = state.cart.find(item => item.product.id === productId);
      if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
          const index = state.cart.findIndex(i => i.product.id === productId);
          if (index !== -1) {
            state.cart.splice(index, 1);
          }
        }
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    },
    
    DELETE_PRODUCT(state, id) {
      const index = state.products.findIndex(p => p.id === id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
      const cartIndex = state.cart.findIndex(item => item.product.id === id);
      if (cartIndex !== -1) {
        state.cart.splice(cartIndex, 1);
      }
    },
    ADD_PRODUCT(state, product) {
      const nextId = state.products.length > 0
        ? Math.max(...state.products.map(p => p.id)) + 1
        : 1;
      state.products.push({
        ...product,
        id: nextId
      });
    },
    UPDATE_PRODUCT(state, updatedProduct) {
      const index = state.products.findIndex(p => p.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = { ...updatedProduct };
        
        const cartItem = state.cart.find(item => item.product.id === updatedProduct.id);
        if (cartItem) {
          cartItem.product = { ...updatedProduct };
        }
      }
    },
    
    SET_TOAST(state, { message, show }) {
      state.toast.message = message;
      state.toast.show = show;
    },
    SET_TOAST_TIMEOUT(state, timeoutId) {
      state.toastTimeout = timeoutId;
    }
  },
  actions: {
    addToCart({ commit, dispatch }, product) {
      if (product.silent) {
        dispatch('triggerToast', product.message);
        return;
      }
      commit('ADD_TO_CART', product);
      dispatch('triggerToast', `Added ${product.name} to cart!`);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload);
    },
    checkout({ commit, dispatch }) {
      commit('CLEAR_CART');
      dispatch('triggerToast', 'Thank you for ordering! Your fresh pastries are baking now.');
    },
    deleteProduct({ commit }, id) {
      commit('DELETE_PRODUCT', id);
    },
    addProduct({ commit }, product) {
      commit('ADD_PRODUCT', product);
    },
    updateProduct({ commit }, product) {
      commit('UPDATE_PRODUCT', product);
    },
    
    triggerToast({ commit, state }, message) {
      if (state.toastTimeout) {
        clearTimeout(state.toastTimeout);
      }
      commit('SET_TOAST', { message, show: true });
      const timeoutId = setTimeout(() => {
        commit('SET_TOAST', { message: '', show: false });
      }, 3000);
      commit('SET_TOAST_TIMEOUT', timeoutId);
    }
  }
});
