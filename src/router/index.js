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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
