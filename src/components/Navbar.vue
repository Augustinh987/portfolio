
<template>
    <div class="navbar">
        <div class="nav_title">
            <h1>Augustin Hussenet</h1>
        </div>
        <div class="nav_btn">
            <button class="redirect" :class="{ 'neon_style': isActive[0] }" @click="f_scroll('About', 0)">self.Moi()</button>
            <button class="redirect" :class="{ 'neon_style': isActive[1] }" @click="f_scroll('Parcours', 1)">self.Parcours()</button>
            <button class="redirect" :class="{ 'neon_style': isActive[2] }" @click="f_scroll('About', 2)">self.Etudes()</button>
            <button class="redirect" :class="{ 'neon_style': isActive[3] }" @click="f_scroll('About', 3)">self.Projets()</button>
            <button class="redirect" :class="{ 'neon_style': isActive[4] }" @click="f_scroll('About', 4)">self.Contact()</button>
        </div>
    </div>    
</template>

<script>

export default{
    name: 'NavBar',
    props: ['text'],
    data() {
        return{
            isActive: [true, false, false, false, false]
        }
    },
    methods: {
        f_scroll(refId, nb){
            const element = document.getElementById(refId);
            element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "end"
                });
            element
            for(let i=0; i<this.isActive.length; i++) this.isActive[i]=false;
            this.isActive[nb] = true;
        }
    },
}

</script>

<style>

    .navbar {
        display: flex;
        position: fixed;
        top: 0;
        height: 10vh;
        width: 100%;
        align-items: center; 
        background-color: black;
        border-bottom: 3px solid grey;
    }

    .nav_btn{
        right: 0;
        margin-right: 50px;
        justify-content: end;
    }

    .nav_title{
        left: 0;
        margin-right: auto;
        margin-left: 50px;
        animation: animate 5s linear infinite;
    }

    .neon_style {
        animation: animate 5s linear infinite;
    }

    .redirect{
        padding: 0px;
        margin: 20px;
        background-color: transparent;
        font-size: 24px;
        border: none;
        font-weight: bold;
        color: royalblue;
    }

    .redirect:hover{
        color: white;
        text-shadow: 0 0 10px white,
                    0 0 20px white,
                    0 0 40px white,
                    0 0 80px white,
                    0 0 160px white;
    }

    @keyframes animate
    {
        0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%
        {
            color: #333;
            text-shadow: none;
        }
        18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%
        {
            color: white;
            text-shadow: 0 0 10px white,
                    0 0 20px white,
                    0 0 40px white,
                    0 0 80px white,
                    0 0 160px white;
        }
    }

</style>