import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory'
import Category from '../views/Category/Category'
import EditCategory from '../views/Category/EditCategory'
import Product from '../views/Product/Product'
import AddProduct from '../views/Product/AddProduct'
import EditProduct from '../views/Product/EditProduct'
import Admin from '../views/Admin'
import ShowProductDetails from '../views/Product/ShowDetails'
import ListProducts from '../views/Product/ListProducts'
import Signup from '../views/Signup'
import Signin from '../views/Signin'
import Wishlist from '../views/Product/Wishlist'
import Cart from '../views/Cart'
import Success from '../views/Payment/Success'
import Failed from '../views/Payment/Failure'
import Checkout from '../views/Checkout/Checkout'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // category detail page
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts
  },

  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct
  },

  // show details of Product
  {
    path: '/product/show/:id',
    name: 'ShowProductDetails',
    component: ShowProductDetails
  },

  // signup page
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  // signin page
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  // wishlist
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  // cart
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success
  },
  {
    path: '/payment/failed',
    name: 'PaymentFail',
    component: Failed
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
