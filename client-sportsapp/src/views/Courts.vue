<template>
  <div class="courts"> 
      <court-post v-for="p in posts" :key= "p" :content="p" />
  </div>
</template>

<script>
import CourtPost from '../components/CourtPost.vue'
export default {
  components: { CourtPost },
  data(){
      return{
          posts:[
              {name: "Lana", category: "curka"}, {name: "sladoled", category: "njam"}, {name: "kava", category: "need"}
          ]
      }
  }
}
</script>

<style>

</style>