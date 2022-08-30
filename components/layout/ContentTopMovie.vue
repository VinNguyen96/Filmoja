<template>
    <div class="container top">
        <div class="row top-movies">
            <div class="col-lg-6">
               <Title :title="titleContentTop"></Title>
            </div>

            <div class="col-lg-6 btn-slick">
                <div>
                    <button @click="Prev" type="button"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                    <button @click="showNext" type="button"><i class="fa fa-arrow-right"
                            aria-hidden="true"></i></button>
                </div>
            </div>
        </div>

        <VueSlickCarousel v-bind="settings" ref="carousel">
            <div class="slider-top" v-for="(item, index) in topArray" :key="index">
                <div class="wrap-top">
                    <div class="top-img">
                        <img :src="item.img" alt="">
                    </div>

                    <div class="watch-video">

                        <div class="btn-play">
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="content-top">
                    <nuxt-link to="#">
                        <p>{{item.name}}</p>
                    </nuxt-link>

                    <div class="icon-top">
                        <div class="icon-like">
                            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            <span>{{item.like}}</span>
                        </div>
                        <div class="icon-watching">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                            <span>{{item.watch}}</span>
                        </div>
                        <div class="icon-evaluate">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <span>{{item.evaluate}}</span>
                        </div>

                    </div>
                </div>


            </div>

        </VueSlickCarousel>


    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import Title from '@/components/layout/Title.vue'
export default {
    name: "topMovie",
    components: { 
        VueSlickCarousel, 
        Title
    },

    methods: {
        Prev() {
            this.$refs.carousel.prev()
        },
        showNext() {
            this.$refs.carousel.next()
        },
    },
    data() {
        return {
            titleContentTop:'Top Movies',
            topArray: [
                {
                    img: require('../../assets/images/top-slider-1.jpeg'),
                    name: "Draeing Joker",
                    like: "256",
                    watch: "45",
                    evaluate: "4.5"
                },

                // {
                //     img: require('../../assets/images/top-slider-2.jpeg'),
                //     name: "Draeing Joker",
                //     like: "256",
                //     watch: "45",
                //     evaluate: "4.5"
                // },

                // {
                //     img: require('../../assets/images/top-slider-3.jpeg'),
                //     name: "Draeing Joker",
                //     like: "256",
                //     watch: "45",
                //     evaluate: "4.5"
                // },

                // {
                //     img: require('../../assets/images/top-slider-4.jpg'),
                //     name: "Draeing Joker",
                //     like: "256",
                //     watch: "45",
                //     evaluate: "4.5"
                // },

                // {
                //     img: require('../../assets/images/top-slider-5.jpeg'),
                //     name: "Draeing Joker",
                //     like: "256",
                //     watch: "45",
                //     evaluate: "4.5"
                // },

                // {
                //     img: require('../../assets/images/top-slider-1.jpeg'),
                //     name: "Draeing Joker",
                //     like: "256",
                //     watch: "45",
                //     evaluate: "4.5"
                // },
            ],


            settings: {

                dots: false,
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                //  autoplay: true,
                autoplaySpeed: 2000,
                pauseOnDotsHover: true,
                pauseOnFocus: true,
                pauseOnHover: true,
                arrows: false,

            }
        }
    }
}
</script>