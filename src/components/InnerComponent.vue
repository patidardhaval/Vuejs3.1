<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header" v-on:click="greet"><h1>{{ h1 }}</h1></div>

                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { EventBus } from '../Events.js';

    export default {
        props:['h1'],
    data(){
        return {
           
        
        }
        
    },
    created() {
        EventBus.$on('init',this.init);
    },
    beforeDestroy() {
        EventBus.$off('init');
    },
    methods:{
       greet(){
            this.$parent.vheader = "I changed the message";
            
        },init() 
            {
                console.log('init call');
            }
    },
    mounted() {
      
       
    }
}
</script>

