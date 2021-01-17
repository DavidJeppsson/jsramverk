<template>
<div class="reports">
    <Nav />
    <h1>Reports</h1>
    <nav v-if ="view === 'read'" class="report-nav">
        <ul>
            <li v-for="n in num_array" v-bind:key="n" v-on:click="getReport(n)">
                <a href="#">kmom0{{ n }}</a>
            </li>
        </ul>
    </nav>

    <div v-if ="view === 'read'" class="content">
        <h3 v-if="text">Kmom 0{{ kmom }}</h3>
        <vue-simple-markdown :source="text"></vue-simple-markdown>
        <button v-if="this.$root.$data.logged && exists" v-on:click="setEdit()" class="button">Edit</button>
        <button v-if="this.$root.$data.logged && !exists" v-on:click="setAdd()" class="button">Add</button>
    </div>


    <div class="add" v-if ="view === 'add'">
        <h3>Add report for kmom 0{{ kmom }}</h3>

        <form @submit.prevent="addReport">
            <textarea
                @change="setNewContent($event.target.value)"
                rows="20"
                cols="40"
            />

            <input type="submit" class="button" value="Add">

        </form>
        <button type="button" name="button" v-on:click="setRead()" class="button back">Back</button>

        <!-- <button type="button" name="button" v-on:click="setRead()">Back</button>
        <button type="button" name="button" v-on:click="addReport()">Add</button> -->
    </div>

    <div class="edit" v-if ="view === 'edit'">
        <h3>Edit report for kmom 0{{ kmom }}</h3>

        <form @submit.prevent="editReport">
            <textarea
                @change="setNewContent($event.target.value)"
                rows="20"
                cols="40"
                :value="text"
            />

            <input type="submit" class="button" value="Save">

        </form>
        <button type="button" name="button" v-on:click="setRead()" class="button back">Back</button>
    </div>

</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
// import { EventBus } from "@/modules/event-bus.js"

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
                    this.kmom = week
                    this.exists = true
                } if(data.data.status === 404) {
                    this.text = "Content will be added."
                    this.kmom = week
                    this.exists = false
                }
            })
            .catch((e) => {
                console.log(e)

            })
        },
        setEdit() {
            this.view = "edit";
        },
        setAdd() {
            this.view = "add";
        },
        setRead() {
            this.view = "read";
        },
        setNewContent(content) {
            this.newContent = content;
        },
        addReport() {
            const data = {
                kmom: this.kmom,
                content: this.newContent,
            };
            fetch("http://localhost:1337/reports", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": this.$root.$data.token
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.text = this.newContent;
                this.newContent = "";
                this.exists = true;
                this.setRead();
            })
        },
        editReport() {
            const data = {
                kmom: this.kmom,
                content: this.newContent,
            };
            fetch("http://localhost:1337/reports", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": this.$root.$data.token
                },
                body: JSON.stringify(data)
            })
            .then(() => {
                this.text = this.newContent;
                this.newContent = "";
                this.setRead();
            })
        },
    },
    data() {
        return {
            view: "read",
            newContent: "",
            exists: false,
            text: "",
            kmom: "",
            num_array: [1, 2 ,3 , 4, 5, 6],

        }
    },
    mounted() {
        this.getReport(1);
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

a:active {
    background-color: #2A9C9A;
    color: white;
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

.button {
    color: white;
    display: block;
    width: 35%;
    margin: 3em auto 0;
    background: #A83D00;
    padding: 0.6em 0;
    font-size: 1.1em;
    border: 1px solid #075755;
    border-radius: 0.4em;
}
.button:hover {
    background-color: #5C2200;

}
</style>
