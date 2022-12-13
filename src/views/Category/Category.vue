<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Our categories</h3>
        <router-link :to="{name : 'AddCategory'}">
            <button class="btn" style="float:right">Add category</button> 
        </router-link>
      </div>
    </div>
    <div class="row">
      <div
        v-for="category of categories"
        :key="category.id"
        class="col-xl-4 col-md-6 col-12 pt-3 d-flex"
      >
        <CategoryBox :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import CategoryBox from "../../components/Category/CategoryBox.vue";
export default {
  name: "Category",
  components: { CategoryBox },
  data() {
    return {
      baseURL: "http://10.50.50.99:8085/",
      categories: [],
    };
  },
  methods: {
    async getCategories() {
      await axios
        .get(`${this.baseURL}category/list`)
        .then((res) => (this.categories = res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>
<style scoped></style>
