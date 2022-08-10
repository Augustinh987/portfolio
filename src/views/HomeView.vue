<template>
  <div class="home">
    <NavBar text = "Work In Progress ..."></NavBar>
    <div class="content">
      <div id="About">
        <ProgressBar class="fade-in"></ProgressBar>
      </div>
      <div id="Parcours">
        <ProgressBar class="fade-in"></ProgressBar>
      </div>
      <ProgressBar class="fade-in"></ProgressBar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/Navbar.vue'
import ProgressBar from '@/components/progressBar.vue'
import {onMounted} from 'vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ProgressBar
    },
  setup() {
    onMounted(() => {
      const observer = new IntersectionObserver((entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          if(entry.intersectionRatio == 1){
            console.log(entry.intersectionRatio)
            console.log("appear")
            entry.target.classList.add("appear")
          } else {
            console.log("not appear")
            entry.target.classList.remove("appear")
          }
        })
      }, {threshold: 1.0})
      const elements = document.querySelectorAll('.fade-in')
      elements.forEach((element) => {
        observer.observe(element);
      })
    })
  }
}


</script>

<style>
  .fade-in{
    opacity: 0;
    transition: opacity 500ms ease-in;
  }
  .appear{
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  #About{
    background-color: antiquewhite;
    height: 90vh;
    width: 100%;
  }
  #Parcours{
    background-color: aqua;
    height: 90vh;
  }

  .home{
    display: flex;
  }

  .content{
    position: absolute;
    z-index: -1;
    top: 10vh;
    width: 100%;
  }

</style>
