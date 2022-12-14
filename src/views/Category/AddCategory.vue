<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Добавить категорию</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Название категории</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
          <div class="form-group">
            <label>Описание</label>
            <textarea type="text" class="form-control" v-model="description" />
          </div>
          <div class="form-group">
            <label>Ссылка на фото категории</label>
            <input type="text" class="form-control" v-model="imageUrl" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");

export default {
  data() {
    return {
      categoryName: "",
      description: "",
      imageUrl: "",
    };
  },

  methods: {
    addCategory() {
      console.log(this.categoryName, this.description, this.imageUrl);
      const newCategory = {
        categoryName: this.categoryName,
        description: this.description,
        imageUrl: this.imageUrl,
      };

      const baseURL = "http://10.50.50.99:8085/";
      console.log(JSON.stringify(newCategory));
      axios({
        method: "post",
        url: `${baseURL}category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Category added succesfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>
