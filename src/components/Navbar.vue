
<template>
    <div class="navbar">
        <div class="nav_title">
            <h1>Augustin Hussenet</h1>
        </div>
        <div class="nav_btn_list">
            <button class="nav_btn" :class="{ 'neon_style': active == 'About' }" @click="f_scroll('About')">self.Moi()</button>
            <button class="nav_btn" :class="{ 'neon_style': active == 'Parcours' }" @click="f_scroll('Parcours')">self.Parcours()</button>
            <button class="nav_btn" :class="{ 'neon_style': active == 'Etudes' }" @click="f_scroll('Etudes')">self.Etudes()</button>
            <button class="nav_btn" :class="{ 'neon_style': active == 'Projets' }" @click="f_scroll('Projets')">self.Projets()</button>
            <button class="nav_btn" :class="{ 'neon_style': active == 'Contact' }" @click="f_scroll('Contact')">self.Contact()</button>
        </div>
    </div>    
</template>

<script>


export default{
    name: 'NavBar',
    props: ['text'],
    data() {
        return{
            active: "About",
        }
    },
    methods: {
        f_scroll(refId){
            this.active = refId;
            const element = document.getElementById(refId);
            element.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "end"
                });
        }
    },
    mounted() {
        const options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.55
        }

        var mv = this;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
            if(entry.intersectionRatio >0.55){
                mv.active = entry.target.id;
                console.log("coucou");
            }
            })
        }, options)

        const elements = document.querySelectorAll('.content_div')
        elements.forEach((element) => {
            observer.observe(element);
        })
    }
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

    .nav_btn_list{
        right: 0;
        margin-right: 50px;
        justify-content: end;
    }

    .nav_title{
        left: 0;
        margin-right: auto;
        margin-left: 50px;
        color: azure;
    }

    .nav_title::before{
        position: absolute;
        content: '';
        width: 50px;
        height: 20px;
        top: 30px;
        transform: translateX(-160px);
        border-top: solid 4px red;
        border-left: solid 6px red;
    }
    
    .nav_title::after{
        position: absolute;
        content: '';
        width: 50px;
        height: 20px;
        bottom: 30px;
        left: 300px;
        border-bottom: solid 4px red;
        border-right: solid 6px red;
    }

    .neon_style {
        animation: animate 5s linear infinite;
    }

    .nav_btn{
        padding: 0px;
        margin: 20px;
        background-color: transparent;
        font-size: 24px;
        border: none;
        font-weight: bold;
        color: azure;
    }

    .nav_btn:hover{
        color: azure;
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
            color: azure;
            text-shadow: 0 0 10px white,
                    0 0 20px white,
                    0 0 40px white,
                    0 0 80px white,
                    0 0 160px white;
        }
        18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90%, 92.1%, 100%
        {
            color: azure;
            text-shadow: 0 0 10px white,
                    0 0 20px white,
                    0 0 40px white,
                    0 0 80px white,
                    0 0 160px white;
        }
    }

</style>