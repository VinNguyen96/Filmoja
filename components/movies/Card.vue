<template>
  <div class="slider-top">
    <div class="wrap-top">
      <div class="top-img">
        <img :src="item.img" alt="" />
      </div>

      <div class="watch-video">
        <div class="btn-play">
          <i class="fa fa-play" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="content-top">
      <nuxt-link to="#">
        <p>{{ item.name }}</p>
      </nuxt-link>

      <div class="icon-top">
        <div class="icon-like"  @click="handleActions(actionTypes.LIKE)">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
          <span>{{ item.like }}</span>
        </div>
        <div class="icon-watching">
          <i class="fa fa-eye" aria-hidden="true"></i>
          <span>{{ item.watch }}</span>
        </div>
        <div class="icon-evaluate" @click="handleActions(actionTypes.STAR)">
          <i class="fa fa-star" aria-hidden="true"></i>
          <span>{{ item.evaluate }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes} from '@/constant/actions.js'

export default {
  name: "MovieCard",

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      actionTypes
    }
  },

  methods: {
    handleActions(key) {
      // this[`handleClick${key}`]()
      // this.$emit(key, this.item.id)
      this.$emit('action', {id: this.item.id, key})
    },

    // handleClickLike() {
    //   this.$emit('like', this.item.id)
    // },
    // handleClickStar() {
    //   this.$emit('star', this.item.id)
    // }
  }
};
</script>
