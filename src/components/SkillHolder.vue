<template>

    <div @mouseover="hover = true" @mouseleave="hover = false" class="rond_holder">
        <img class="rond" v-bind:src="require(`@/assets/${image}`)"/>
        <div v-if="hover" class="element_description">
          <h1>{{skill.toUpperCase()}}</h1>
          <h2>{{lvl}}</h2>
        </div>
    </div>

</template>


<script>

  export default{
    name: "SkillHolder",
    props: {
      image: String,
      skill: String,
      lvl: String
    },
    data() {
      return {
        hover: false
      }
    },
    mounted(){
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

      const descriptions = document.getElementsByClassName("element_description");
      for(let i = 0; i<descriptions.length; i++){
        descriptions[i].style.height = 75 + "px";
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

.rond{
  position: absolute;
  background-color: transparent;
  display: inline-block;
}

.rond_holder{
  position: absolute;
  border-radius: 50%;
  border: 1px solid grey;
  transform: translate(-50%, -50%);
  background-color: rgb(55, 66, 66);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: reverse_spin 25s linear infinite;
}
.rond_holder:hover{
  background-color: rgba(240, 255, 255, 1);
  transform: translate(-50%, -50%) scale(1.2);
  border: 2px solid grey;
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
  0% { transform: translate(-50%, -50%) rotate(360deg); }
  100% { transform: translate(-50%, -50%) rotate(0deg); }
}

.element_description{
  background-color: red;
  color: white;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  border-right: solid 1px grey;
  border-top: solid 1px grey;
  border-bottom: solid 1px grey;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 170px;
  height: 75px;
  left: 50%;
  transform: translateX(37.5px);
}

</style>