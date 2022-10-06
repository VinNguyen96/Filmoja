<template>
  <div class="slick-carousel">
    <VueSlickCarousel v-bind="settings">
      <div class="slider" v-for="(item, index) in sliderArray" :key="index">
        <div class="slider-images">
          <img class="img-responsive w-100" v-bind:src="item.url" alt="" />
        </div>

        <div class="slider-content">
          <div class="slider-text">
            <h6>{{ item.h6 }}</h6>
            <h1>{{ item.h1 }}</h1>
            <p>{{ item.p }}</p>
          </div>

          <div class="slider-watch">
            <div class="d-inline slider-watch__content">
              <i class="fa fa-play" aria-hidden="true"></i>
              <nuxt-link to="#">Watch Trailer</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <!-- <VueSlickCarousel v-bind="settings">
            <div class="slider">
                <div class="slider-images">
                    <img class="img-responsive w-100" src="@/assets/images/slider1.jpg" alt="">
                </div>

                <div class=" slider-content ">
                    <div class="slider-text">
                        <h6>Science Fiction</h6>
                        <h1>Black Stone Of The <br />Club</h1>
                        <p>Realase On: 20 Dec,2014</p>
                    </div>

                    <div class="slider-watch">
                        <div class="d-inline slider-watch__content">
                            <i class="fa fa-play" aria-hidden="true"></i>
                            <nuxt-link to="#">Watch Trailer</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div><img class="img-responsive w-100" src="@/assets/images/slider2.png" alt=""></div>
            <div><img class="img-responsive w-100" src="@/assets/images/slider3.jpg" alt=""></div>
        </VueSlickCarousel> -->
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },

  data() {
    return {
      sliderArray: [
        {
          url: require("@/assets/images/slider1.jpg"),
          // slider-text
          h6: "Science Fiction",
          h1: "Black Stone Of The Club",
          p: "Realase On: 20 Dec,2014",
        },

        {
          url: require("@/assets/images/slider2.png"),
          // slider-text

          h6: "Action",
          h1: "Dareing Joker : Card",
          p: "Realase On: 20 Dec,2014",
        },

        {
          url: require("@/assets/images/slider3.jpg"),
          // slider-text
          h6: "Commedy",
          h1: "Sunrisers : Fury ",
          p: "Realase On: 20 Dec,2014",
        },
      ],

      settings: {
        dots: true,
        arrow: true,
        // autoplay: true,

        infinite: false,
        speed: 2000,
        slidesToShow: 4,
        fade: true,
        infinite: true,
      },
    };
  },
};
</script>
