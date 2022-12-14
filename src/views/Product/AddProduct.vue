<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add new product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" 
                            :key="category.id"
                            :value="category.id">{{category.categoryName}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="name"/>
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea type="text" class="form-control" v-model="description"/>
                    </div>
                    <div class="form-group">
                        <label>Image url</label>
                        <input type="text" class="form-control" v-model="imageUrl"/>
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" v-model="price"/>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addProduct">Add product</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert'

    export default {
        props: ["baseURL", "categories"],
        data() {
            return {
                id: null,
                categoryId: null,
                name: null,
                description: null,
                imageUrl: null,
                price: null
            }
        },
        methods: {
            addProduct() {
                const newProduct = {
                    categoryId: this.categoryId,
                    description: this.description,
                    name: this.name,
                    imageUrl: this.imageUrl,
                    price: this.price
                };

                axios.post(this.baseURL + "product/add", newProduct)
                .then(() => {
                    this.$router.push({name: 'AdminProduct'});
                    swal({
                        text: "Product added",
                        icon: "success"
                    })
                }).catch((err) => {
                    console.log("err", err)
                })
            }
        }
    }
</script>

