<template>
  <div>page abc</div>
</template>

<script>
import GlobalHandler from '@/mixins/Global'
import GlobalData from '@/mixins/GlobalData'

export default {
  name: 'AbcPage',

  mixins: [GlobalHandler(), GlobalData],

  data() {
    return {
      abc: '4353564'
    }
  },

  async mounted() {
      const movies = await this.getListMovie()
      console.log(movies)
  }
}
</script>