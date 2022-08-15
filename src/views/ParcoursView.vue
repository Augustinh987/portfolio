<template>
  <div id="Parcours" class="content_div">
    
  </div>
</template>


<script>

  export default{
    data() {
      return {
        studies: {}
      }
    },
    mounted(){
      this.studies = require('@/texts/studies')
    }
  }


</script>


<style>
#Parcours{
  width: 100%;
  height: 90vh;
  background-color: bisque;
}

</style>