<template>
    <div class="p_bar">
        <div class="p_contour">
            <div class="p_remplissage" id="p_animated" :style="animationStyle"></div>
        </div>
        <font-awesome-icon v-if="isActive" style="color: green;" icon="fa-clipboard-check" class="icon"/>
        <div v-else class="p_loader"></div>
        <p v-if="isActive" class="p_text">Passed</p>
    </div>
</template>

<script>

    export default{
        name: 'ProgressBar',
        data() {
            return{
                isActive: false,
                animationName: "progress2",
                animationDuree: 5
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
                this.isActive = true;
            })
            document.getElementById("p_animated").addEventListener("animationstart", () => {
                this.isActive = false;
            })
            var entier = Math.floor(Math.random()*2)+1;
            var duree = Math.floor(Math.random()*(8-3+1))+3;
            this.animationName = "progress" + entier;
            this.animationDuree = duree;
            console.log(this.animationName);
        }
    }

</script>

<style>

.p_bar{
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

.p_contour{
    width: 200px;
    height: 20px;
    background-color: aliceblue;
    margin: 0 20px;
    display: flex;
}

.p_remplissage{
    z-index: 1;
    background-color: green;
    height: 100%;
}

@keyframes progress1
    {
        0% { width: 0%; }
        20% { width: 40%; }
        50% { width: 40%; }
        67% { width: 45%; }
        70% { width: 80%; }
        100% { width: 100%; }
    }
@keyframes progress2
    {
        0% { width: 0%; }
        100% { width: 100%; }
    }

.p_loader {
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

.p_text{
    font-size: 24px;
    font-weight: bold;
}

</style>