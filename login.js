import {createApp} from 'vue';
createApp({
    data(){
        return{
            url:'https://vue3-course-api.hexschool.io/v2',
            path:'hsuanin-hexschool',
            emailValue : '',
            passwordValue:'',

        }
    },
    methods:{
        submitLogin(){
            console.log(this.emailValue,this.passwordValue);
        }
    },
    mounted() {
        console.log('hi');
    },
}).mount("#app")