import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './modules/store'
import { EventBus } from "@/modules/event-bus.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data() {
      return {
          logged: false,
          token: null,
          user: "",
      }
  },
  mounted() {
      EventBus.$on("jwt", (data) => {
          this.logIn(data);
      })
  },
  methods: {
      logIn(data) {
          this.logged = true;
          this.token = data.token;
          this.user = data.user;
      }
  }
}).$mount('#app')
