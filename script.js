
const app = Vue.createApp({
    data() {
        return {
            active: false
        }

    },

    methods: {
        toggle(){
        this.active = ! this.active
        }
    },
});

app.mount('#app')