<template>
    <!--<weather></weather>-->
    <div id="app">
        <Slider v-model="value" range></Slider>
    </div>
</template>

<script>
//    import weather from './weather.vue';
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>

<style>
    #app {
        margin-top:100px;
    }
</style>