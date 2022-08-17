<template>
  <div id="About" class="content_div">
    <div class="skills_div">
      <button class="cv_btn">
        <img class="cv_img" src="@/assets/CV.png"/>
      </button>
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
          <img class="rond" src="@/assets/logo_cpp.png"/>
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
      </div>
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
        element.style.left = 50 + (50*Math.cos(theta)) + "%";
        element.style.top = 50 + (50*Math.sin(theta)) + "%";
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

      const ronds = document.getElementsByClassName("rond");
      for(let i = 0; i<ronds.length; i++){
        if(ronds[i].naturalWidth > ronds[i].naturalHeight){
          ronds[i].style.width = "75px";
        } else {
          ronds[i].style.height = "75px";
        }
      }
    }
  }


// https://jenniferbourn.com/background-pattern-generators/

</script>


<style>
#About{
  width: 100%;
  height: 90vh;
  background-color: transparent;
  position: relative;
}

.rond{
  background-color: transparent;
  display: inline-block;
  animation: reverse_spin 25s linear infinite;
}

.rond_holder{
  position: absolute;
  border-radius: 50%;
  border: 1px solid grey;
  transform: translate(-50%, -50%);
  background-color: rgba(240, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.rond_holder:hover{
  background-color: rgba(240, 255, 255, 0.8);
  transform: translate(-50%, -50%) scale(1.2);
  border: 2px solid grey;
}

.competences{
  position: absolute;
  background-color: transparent;
  height: 50vh;
  width: 50vh;
  border-radius: 50%;
  animation: spin 25s linear infinite;
  border: 1px solid grey;
}

.competences:hover,
.competences:hover .rond{
  animation-play-state: paused;
}

.skills_div{
  display: inline-block;
  position: absolute;
  background-color: transparent;
  align-content: center;
  justify-content: center;
  height: 50vh;
  width: 50vh;
  margin: 20px;
  right: 13%;
  top: 50%;
  transform: translateY(-50%);
}
.skills_div:hover{
  transform: translateY(-50%) scale(1.05);
}
.skills_div:hover .cv_btn{
  position: absolute;
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.90);
}


.cv_btn{
  position: absolute;
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30vh;
  height: 30vh;
}


@keyframes reverse_spin {
  0% { transform: rotate(360deg) }
  100% { transform: rotate(0deg) }
}



</style>