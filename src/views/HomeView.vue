<template>
  <div class="home">
    <NavBar text = "Work In Progress ..."></NavBar>
    <div class="content">
      <ProgressBar></ProgressBar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navbar.vue'
import ProgressBar from '@/components/progressBar.vue'
import ProgressBarNE from '@/components/progressBarNE.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    ProgressBar,
    ProgressBarNE,
},
  data(){
    return {
      liste: [],
      isActive: false
    }
  },
  methods: {
    debugStudies(){
      this.isActive = !this.isActive;
    }
  },
  mounted(){
    const options = {
        rootMargin: '-50px 0px 0px 0px',
        threshold: 1.0
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio == 1){
            entry.target.classList.add("appear")
          } else {
            entry.target.classList.remove("appear")
          }
        })
      }, options)

      const elements = document.querySelectorAll('.fade-in')
      elements.forEach((element) => {
        observer.observe(element);
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
    display: flex;
    flex-direction: column;
  }
  #Parcours{
    background-color: aqua;
    height: 90vh;
  }

@keyframes progress
    {
        0% { width: 0%; }
        20% { width: 40%; }
        50% { width: 40%; }
        67% { width: 45%; }
        70% { width: 80%; }
        100% { width: 100%; }
    }

  .home{
    display: flex;
  }

  .content{
    position: absolute;
    z-index: -1;
    top: 10vh;
    width: 100%;
    height: 90vh;
    background-color: aliceblue;
  }

</style>
