
<template>
<div class="Me">
    <Nav />
    <h1>David Jeppson</h1>
    <p>{{ text }}</p>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'Home',
    components: {
        Nav,
    },
    data() {
        return {
            text: ""
        };
    },
    mounted() {
        this.getIntro();
    },
    methods: {
        getIntro() {
            fetch("http://localhost:1337")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.data.text) {
                    return this.text = data.data.text
                }
                this.text = "Could not be loaded"
            })
        }
    }
}
</script>

<style scoped>
p {
    white-space: pre;
}
</style>
