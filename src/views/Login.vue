<template>
<div class="login">
    <Nav />
    <h1>Login</h1>
    <form @submit.prevent="checkUser">
        <label for="email">Email</label>
        <input type="email" placeholder="test@test.se" name="email" v-model="email" required>
        <label for="password">Password</label>
        <input type="password" placeholder="Enter password" name="password" v-model="password" required>
        <input type="submit" class="button" value="Logga in">
    </form>
    <p> {{ message }}</p>
</div>
</template>


<script>
import Nav from '@/components/Nav.vue'
import { EventBus } from "@/modules/event-bus.js"

export default {
    name: 'Login',
    components: {
        Nav,
    },
    methods: {
        checkUser() {
            let userInfo = {
                email: this.email,
                password: this.password,
            }
            fetch("http://localhost:1337/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data.data.status === 200) {
                    EventBus.$emit("jwt", { user:userInfo.email, token: data.data.token });
                    this.message = data.data.title
                }

                if(data.data.status === 404) {
                        this.message = data.data.title;
                }

            })
            .catch((e) => {
                console.log(e)
            });
        },
    },
    data() {
        return {
            email: "",
            password: "",
            message: "",
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
a:link {
    color: #2A9C9A;
}

a:visited {
    color: #A83D00;
}

label, input {
    margin-right: .5em;
}

.button {
    color: white;
    margin-bottom: 1.4em;
    text-align: center;
    padding: 0.4em 0.4em;
    font-size: 0.8em;
    background: #A83D00;
    border: 1px solid #075755;
    border-radius: 0.4em;

}
.button:hover {
    background-color: #5C2200;
}
</style>
