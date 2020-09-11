<template>
<div class="about">
    <Nav />
    <h1>About</h1>
    <p>This website is a part the of the <a href="https://jsramverk.se">jsramverk</a> course</p>
</div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
    name: 'About',
    components: {
        Nav,
    }
};
</script>

<style scoped>
a:link {
    color: #2A9C9A;
}

a:visited {
    color: #A83D00;
}
</style>
