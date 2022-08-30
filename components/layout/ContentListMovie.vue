<template>
    <div class="container">
        <Title :title="abc"></Title>

        <div class="content">
            <div class="container menu-Content">
                <div>NEW RELEASES</div>
                <div>MOVIES</div>
                <div>TV SERIES</div>
                <div>CARTOONS</div>
            </div>
            <div class="row">
                <div class="col-lg-3">a</div>
                <div class="col-lg-3">b</div>
                <div class="col-lg-3">c</div>
                <div class="col-lg-3">d</div>
            </div>

            <div class="row">
                <div class="col-lg-3">a</div>
                <div class="col-lg-3">b</div>
                <div class="col-lg-3">c</div>
                <div class="col-lg-3">d</div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '../../components/layout/Title.vue'


export default {

    name: 'ListMovie',
    
   data(){
        return{
         abc: 'new style',
            
        }
   },
    components: {
        Title,

    },
}
</script>