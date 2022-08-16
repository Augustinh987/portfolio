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
        <img class="rond" src="@/assets/logo_vue.png"/>
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

      const cercles = document.getElementsByClassName("rond_holder");
      for(let i = 0; i<cercles.length; i++){
        let theta = ((Math.PI * 2) / cercles.length) * i;
        positionCercle(cercles[i], theta);
      }
    }
  }


</script>


<style>
#About{
  width: 100%;
  height: 90vh;
  background-color: beige;
  position: relative;
}

.rond{
  position: absolute;
  background-color: azure;
  height: 75px;
  width: 75px;
  border-radius: 50%;
  display: inline-block;
  animation: reverse_spin 25s linear infinite;
}

.rond_holder{
  height: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: azure;
  position: absolute;
}
.rond_holder:hover{
  background-color: rgb(200, 255, 255);
  transform: scale(1.5);
}

.competences{
  display: inline-block;
  position: absolute;
  background-color: transparent;
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  animation: spin 25s linear infinite;
  margin: 20px;
  top: 20%;
  transform: translateY(-50%);
  right: 10%;
}

.competences:hover,
.competences:hover .rond{
  animation-play-state: paused;
}

@keyframes reverse_spin {
  0% { transform: translate(-50%, -50%) rotate(360deg) }
  100% { transform: translate(-50%, -50%) rotate(0deg) }
}


</style>