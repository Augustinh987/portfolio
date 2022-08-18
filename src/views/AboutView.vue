<template>
  <div id="About" class="content_div">
    <div id="skills_div" class="skills_div" @mouseover="hover = false" @mouseleave="hover = false">
      <div class="competences">
        <SkillHolder class="skill_holder" image='logo_python.png' skill="Python" lvl="Professionnel"></SkillHolder>
        <SkillHolder class="skill_holder" image='logo_react.png' skill="ReactJS" lvl="Débutant"></SkillHolder>
        <SkillHolder class="skill_holder" image='logo_vue.png' skill="VueJS" lvl="Débutant"></SkillHolder>
        <SkillHolder class="skill_holder" image='logo_c.png' skill="C" lvl="Professionnel"></SkillHolder>
        <SkillHolder class="skill_holder" image='logo_cpp.png' skill="C++" lvl="Débutant"></SkillHolder>
        <SkillHolder class="skill_holder" image='logo_docker.png' skill="Docker" lvl="Débutant"></SkillHolder>
      </div>
      <a href="./CV-Augustin_base.pdf" target="_blank">PDF</a>
      <div class="CV_holder">
        <h1 v-if="hover">Télécharger mon CV</h1>
      </div>
    </div>
  </div>
</template>


<script>
import SkillHolder from "../components/SkillHolder.vue";

  export default{
    data() {
        return {
            hover: false,
        };
    },
    mounted(){
    
    },  
    components: { SkillHolder }
}

</script>


<style>
#About{
  width: 100%;
  z-index: 0;
  height: 90vh;
  background-color: transparent;
  position: relative;
}

.competences{
  position: absolute;
  background-color: transparent;
  height: 45vh;
  width: 45vh;
  border-radius: 50%;
  animation: spin 25s linear infinite;
  border: 1px solid grey;
}

.competences:hover,
.competences:hover .skill_holder{
  animation-play-state: paused;
}

.skills_div{
  color: azure;
  display: flex;
  position: absolute;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  height: 45vh;
  width: 45vh;
  border-radius: 50%;
  margin: 20px;
  right: 13%;
  top: 50%;
  transform: translateY(-50%);
}
.skills_div:hover{
  transform: translateY(-50%) scale(1.01);
  background-color: rgba(240, 255, 255, 0.1);
}
.skills_div:hover .cv_btn{
  position: absolute;
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0.990099);
}


.cv_btn{
  position: absolute;
  z-index: 0;
  background-color: rgba(255, 217, 0, 0.575);
  display: inline-block;
  font-size: 50px;
  font-weight: bold;
  border-radius: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 20vh;
  height: 20vh;
}
.cv_btn:hover{
  background-color: gold;
}

a {
  z-index: 1;
}
a:hover{
  background-color: red;
}


@keyframes reverse_spin {
  0% { transform: translate(-50%, -50%) rotate(360deg); }
  100% { transform: translate(-50%, -50%) rotate(0deg); }
}

</style>