import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Products from '../pages/Products.vue';
import ProductDetails from '../pages/ProductDetails.vue';
import ProductManagement from '../pages/ProductManagement.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  {
    path: '/',         
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'product-details',
    component: ProductDetails
  },
  {
    path: '/products-management',
    name: 'products-management',
    component: ProductManagement
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;