<template>
  <section class="Theater">
    <div class="container">
      <div
        class="row watch-content"
        v-for="(item, index) in textArray"
        :key="index"
      >
        <div class="col-lg-5 watch-text">
          <h1>{{ item.h1 }}</h1>
          <p>{{ item.p }}</p>
          <h6>{{ item.h6 }}</h6>

          <div class="discover">
            <nuxt-link to="#" class="btn-discover">{{
              item.discover
            }}</nuxt-link>
          </div>
        </div>
        <div class="col-lg-7 watch-video">
          <div class="icon-youtube">
            <nuxt-link to="#"
              ><i class="fa fa-play" aria-hidden="true"></i>
            </nuxt-link>
          </div>
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { request } from "http";

export default {
  name: "watch",

  data() {
    return {
      textArray: [
        {
          h1: "Today In Theater",
          p: "Action, Adventure, Fantasy",
          h6: "Researved Your Seat,Before You Miss Tomorrow",
          discover: "Discover All",
          img: require("@/assets/images/theater.jpeg"),
        },
      ],
    };
  },
};
</script>
