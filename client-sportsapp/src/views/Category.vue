<template>
  <div class="category">
      <!-- tu ide html -->

      <div class="row">
            <div class="col1">
                Add category: <input v-model="category" type="text">
                <button @click="addCategories">Add</button>
            </div>

            <div class="col2">
                <p v-bind:key="c" v-for="c in categories"> {{ c.name }} </p>
                <button @click="getCategories">Get categories</button>
            </div>
    
     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            category: "",
            categories: []
        }
    },
    methods: {
        async getCategories() {
            var res = await axios.get(`http://localhost:3000/api/categories`)
            this.categories = res.data;
            console.log(res.data);
        },

        async addCategories() {
            var res = await axios.post(`http://localhost:3000/api/add-categories?cat=${this.category}`)
            
            console.log(res.data);
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>

<style>

.row{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

</style>