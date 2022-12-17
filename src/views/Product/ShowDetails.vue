<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <!-- display image -->
            <div class="col-md-4 col-12">
                <img :src="product.imageUrl" class="img-fluid" />
            </div>
            <!-- display product details -->
            <div class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="category font-italic">
                    {{ category.categoryName }}
                </h6>
                <h6 class="font-weight-bold">Стоимость: ${{ product.price }}</h6>
                <p>
                    {{ product.description }}
                </p>
                <div class="d-flex flex-row justify-content-between">
                  <div class="input-group col-md-3 col-4 p-0">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Quantity</span>
                    </div>
                    <input type="number" class="form-control" v-model="quantity">
                  </div>

                  <dib class="input-group col-md-3 col-4 p-0">
                    <button class="btn" id="add-to-cart-button" @click="addToCart()">
                      Add to cart
                    </button>
                  </dib>
                </div>
                <button id="wishlist-button"
                class="btn btn mr-3 p-1 py-0" @click="addToWishlist()">
                {{ wishListString }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import swal from "sweetalert";
export default {
    data() {
        return {
            product: {},
            category: {},
            quantity: 1,
            wishListString: "Add to wishlist"
        };
    },
    props: ["baseURL", "products", "categories"],
    methods: {
      addToWishlist() {
        if (!this.token) {
          // user is not logged in
          // show some error
          swal({
            text: "Please login to add product to wishlist",
            icon: "error"
          });
          return;
        }

        // add item to wishlist
        axios.post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        }).then((res) => {
          if (res.status == 201) {
            this.wishListString = "Added to wishlist";
            swal({
            text: "Added to wishlist",
            icon: "success"
          });
          }
        }).catch(err => {
          console.log('err', err);
        })
      },

      addToCart() {
          if (!this.token) {
          // user is not logged in
          // show some error
          swal({
            text: "Please login to add item to cart",
            icon: "error"
          });
          return;
        }

        // add to cart
        axios.post(`${this.baseURL}cart/add?token=${this.token}`, {
          productId: this.product.id,
          quantity: this.quantity
        }).then((res) => {
          if (res.status == 201) {
            swal({
              text: "Product added to cart",
              icon: "success"
            })
          }
        }).catch(err => {
          console.log('err', err);
        })
      }
    },
    mounted() {
        this.id = this.$route.params.id;
        this.product = this.products.find((product) => product.id == this.id);
        this.category = this.categories.find(
            (category) => category.id == this.product.categoryId
        );
        this.token = localStorage.getItem("token");
    },
};
</script>

<style>
.category {
    font-weight: 400;
}
#wishlist-button {
  background-color: #b9b9b9;
}

#add-to-cart-button {
  background-color: #febd69;
}
</style>
