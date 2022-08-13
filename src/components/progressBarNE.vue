<template>
    <div class="p_bar_ne">
        <div class="p_contour_ne">
            <div class="p_remplissage_ne" id="p_animated_ne" :style="animationStyle"></div>
        </div>
        <div class="p_loader_ne"></div>
    </div>
</template>

<script>

    export default{
        name: 'ProgressBarNE',
        data() {
            return{
                isActive: false,
                animationName: "",
                animationDuree: 5,
                anim: null
            }
        },
        methods: {
            startDebug(){
                console.log('TEST');
            }
        },
        computed: {
            animationStyle(){
                return "animation: " + this.animationName + " " + this.animationDuree + "s forwards;"
            }
        },
        mounted() {
            document.getElementById("p_animated").addEventListener("animationend", () => {
                //this.isActive = true;
            })
            document.getElementById("p_animated").addEventListener("animationstart", () => {
                //this.isActive = false;
            })
            var entier = Math.floor(Math.random()*2)+1;
            var duree = Math.floor(Math.random()*(8-3+1))+3;
            this.animationName = "progressNE" + entier;
            this.animationDuree = duree;
            console.log(this.animationName);
            var vm = this;
            setTimeout(function(){
                vm.isActive = true;
            }, vm.animationDuree*1000)

        }
    }

</script>

<style>

.p_bar_ne{
    display: flex;
    width: auto;
    align-items: center;
    padding: 40px 20px;
    height: 40px;
}

.icon{
    margin: 0 15px;
    width: 30px;
    height: 30px;
    display: flex;
}

.p_contour_ne{
    width: 200px;
    height: 20px;
    background-color: aliceblue;
    margin: 0 20px;
    display: flex;
}

.p_remplissage_ne{
    z-index: 1;
    background-color: orange;
    height: 100%;
}

@keyframes progressNE1
    {
        0% { width: 0%; }
        20% { width: 40%; }
        50% { width: 40%; }
        67% { width: 45%; }
        70% { width: 70%; }
        100% { width: 80%; }
    }
@keyframes progressNE2
    {
        0% { width: 0%; }
        100% { width: 70%; }
    }

.p_loader_ne {
    margin: 0 15px;
    border: 6px solid #f3f3f3; /* Light grey */
    border-top: 6px solid #93a3a3; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>