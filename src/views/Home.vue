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
            this.text = `
My name is David Jeppsson, I was raised in the city of Malmö.
I live together with my girlfirend Ingrid and our dog Bilbo.
We might soon move to Stockholm but that is another story.

I enjoy playing different kinds of board games together with my firends.
I also enjoy being outdoors in nature. A hobby that i share with my dog.

During my youth I played a plethera of sports, including American Fotball and Ice Hockey.
I still play hockey, in a beer league. 
Which is basically an amature league and we don't drink beer while playing... yet.

Ave!
            `;
        }
    }
}
</script>

<style scoped>
p {
    white-space: pre;
}
</style>
