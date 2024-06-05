const { createApp } = Vue

createApp({
    data() {
        return {
        emails: []
        }
    },
    
    methods:{
        emailGenerator: function(){
            for (let i = 0; i < 10; i++){    
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        email = response.data.response;
                        this.emails.push(email)
                    });
            }
        }
    },

    created() {
        this.emailGenerator();
    }
}).mount('#app')