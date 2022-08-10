<template>
    <div class="slick-carousel">
        <VueSlickCarousel v-bind="settings">
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
            <!-- <div><img class="img-responsive w-100" src="@/assets/images/slider3.jpg" alt=""></div> -->
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },

    data() {
        return {
            settings: {
                dots: true,
                arrow: true,
                autoplay: true,
                touchMove: true,
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            },
        }
    },
}
</script>