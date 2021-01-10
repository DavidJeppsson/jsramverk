<template>
<div class="reports">
    <Nav />
    <h1>Reports</h1>
    <nav class="report-nav">
        <ul>
            <li v-for="n in num_array" v-bind:key="n" v-on:click="getReport(n)">
                <a href="#">kmom0{{ n }}</a>
            </li>
        </ul>
    </nav>

    <div class="content">
        <vue-simple-markdown :source="text"></vue-simple-markdown>
    </div>


</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Reports',
    components: {
        Nav,
    },
    methods:{
        getReport(week) {
            fetch("http://localhost:1337/reports/week/" + week)
            .then(res => res.json())
            .then(data => {
                if(data.data.text) {
                    this.text = data.data.text
                    this.kmom = week;
                } else {
                    this.text = "Content will be added."
                }

            })
        }
    },
    data() {
        return {
            text: "",
            kmom: "",
            num_array: [1, 2 ,3 , 4, 5, 6]

        }
    }

}
</script>

<style scoped>
h2,h3 {
    text-decoration: underline;
}

a:link {
    color: #A83D00;
}

a:visited {
    color: #A83D00;
}

a.router-link-exact-active {
  color: #2A9C9A;
}

a:hover {
    color: #2A9C9A;
}

 li {
    display: inline;
    margin-right: .5em;
}
</style>
