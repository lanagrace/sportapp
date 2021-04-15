<template>
<div class="court-post">
  <div class="court-header">
    <p>Header</p>
  </div>
  <div class="court-content">
    <p>{{ content.name }}</p>
  </div>
  <div class="court-footer">
    <p>{{ content.category }}</p>
  </div>
</div>


</template>

<script>
export default {
  name: 'CourtPost',
  props: {
    content: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.court-post{
  display: flexbox;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

</style>
