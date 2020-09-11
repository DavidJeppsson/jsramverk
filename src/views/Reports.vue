<template>
<div class="reports">
    <Nav />
    <h1>Reports</h1>
    <h2> {{ readme[0] }} </h2>
    <h3> {{ readme[1] }} </h3>
    <p> {{ readme[2] }} </p>
    <h3> {{ readme[3] }} </h3>
    <p> {{ readme[4] }} </p>
    <h3> {{ readme[5] }} </h3>
    <p> {{ readme[6] }} </p>
    <h3> {{ readme[7] }} </h3>
    <p> {{ readme[8] }} </p>
    <h3> {{ readme[9] }} </h3>
    <a href="https://cli.vuejs.org/config/"> {{ readme[10] }} </a> |
    <a href="https://github.com/DavidJeppsson/report-vue-app"> {{ github[0] }} </a>

</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Reports',
    components: {
        Nav,
    },
    data() {
        return {
            readme: [
                'report-vue-app',
                'Project setup',
                'npm install',
                'Compiles and hot-reloads for development',
                'npm run serve',
                'Compiles and minifies for production',
                'npm run build',
                'Lints and fixes files',
                'npm run lint',
                'Customize configuration',
                'See Configuration Reference'
            ],
            github: [
                'Github repo'
            ]

        }
    }

}
</script>

<style scoped>
h2,h3 {
    text-decoration: underline;
}

a:link {
    color: #2A9C9A;
}

a:visited {
    color: #A83D00;
}
</style>
