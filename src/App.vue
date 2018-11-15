<template>
    <div class="container">

        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">{{ vheader }}</div>

                    <div class="card-body" v-for="v in arr">
                        {{ v }}
                    </div>

                </div>
            </div>
             <other-component  :h1="arr[0]"></other-component>
        </div>
    </div>
</template>

<script>
import OtherComponent from './components/InnerComponent.vue'
import { EventBus } from './Events.js';
export default {
    data(){
        return {
            arr : [1,2,3,4,5],
            vheader : 'q',
        }
        
    },
    methods:{
        printhello(){
            return "hello";
        }, 
        
    },
    mounted() {
      this.vheader = 'Change1';
       EventBus.$emit('init');
    },
    components: {
            OtherComponent
        }
}
</script>
