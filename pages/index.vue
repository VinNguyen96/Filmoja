<template>
  <div>
    <!-- <Header></Header> -->

    <Slider></Slider>

    <topMovie></topMovie>

    <ContentWatch></ContentWatch>

    <ListMovie></ListMovie>


  </div>
</template>

<script>
import Slider from "@/components/layout/Slider.vue";
import topMovie from "@/components/layout/ContentTopMovie.vue";
import ContentWatch from "@/components/layout/ContentWatch.vue";
import ListMovie from "@/components/layout/ContentListMovie.vue";



export default {
  name: 'IndexPage',

  layout: "default",

  components:{
    Slider,
    topMovie,
    ContentWatch,
    ListMovie,
},


}
</script>
