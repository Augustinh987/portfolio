<template>
  <div id="About" class="content_div">
    <div class="competences">
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_python.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_react.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_python.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_python.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_python.png"/>
      </div>
      <div class="rond_holder">
        <img class="rond" src="@/assets/logo_python.png"/>
      </div>
      <button>CV</button>
    </div>
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

      function positionCercle(element, theta){
        element.style.left = 50 + (40*Math.cos(theta)) + "%";
        element.style.top = 50 + (40*Math.sin(theta)) + "%";
      }
      function tailleCercle(element, size){
        element.style.width = size;
        element.style.height = size;
      }

      const cercles = document.getElementsByClassName("rond_holder");
      for(let i = 0; i<cercles.length; i++){
        let theta = ((Math.PI * 2) / cercles.length) * i;
        tailleCercle(cercles[i], Math.sqrt(2*75*75) + "px");
        positionCercle(cercles[i], theta);
      }
    }
  }


// https://jenniferbourn.com/background-pattern-generators/

</script>


<style>
#About{
  width: 100%;
  height: 90vh;
  background-color: beige;
  position: relative;
}

.rond{
  background-color: transparent;
  height: 75px;
  width: 75px;
  display: inline-block;
  /*animation: reverse_spin 25s linear infinite;*/
}

.rond_holder{
  position: absolute;
  border-radius: 50%;
  border: 1px solid grey;
  transform: translate(-50%, -50%);
  background-color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
}
.rond_holder:hover{
  background-color: rgb(200, 255, 255);
  transform: translateY(-50%, -50%) scale(1.5);
}

.competences{
  display: inline-block;
  position: absolute;
  background-color: transparent;
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  /*animation: spin 25s linear infinite;*/
  margin: 20px;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
}

.competences:hover,
.competences:hover .rond{
  animation-play-state: paused;
}

@keyframes reverse_spin {
  0% { transform: rotate(360deg) }
  100% { transform: rotate(0deg) }
}


</style>