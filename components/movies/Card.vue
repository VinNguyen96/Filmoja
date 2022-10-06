<template>
  <div class="slider-top">
    <div class="wrap-top">
      <div class="top-img">
        <img :src="getImgUrl" alt="" @error="onError" />
      </div>

      <div class="watch-video">
        <div class="btn-play">
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="content-top">
      <nuxt-link :to="url">
        <p>{{ item.name }}</p>
      </nuxt-link>

      <div class="icon-top">
        <div class="icon-like">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
          <span>{{ item.like }}</span>
        </div>
        <div class="icon-watching">
          <i class="fa fa-eye" aria-hidden="true"></i>
          <span>{{ item.watch }}</span>
        </div>
        <div class="icon-evaluate">
          <i class="fa fa-star" aria-hidden="true"></i>
          <span>{{ item.evaluate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MovieCard",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    url() {
      return `movie/${this.item.list}`;
    },
    getImgUrl() {
      return this.item.img || ''
    },
  },

  methods: {
    onError(e) {
      e.target.src = require('@/assets/images/default-img.jpeg')
    },
  }
};
</script>
