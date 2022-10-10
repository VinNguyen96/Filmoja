export default {
  data() {
    return {
      listImg: [],
      listVideo: [],
      isCase1: true
    };
  },

  mounted() {
    if(this.isCase1) {
      this.getImgs();
      this.getVideo();
    }
    else {
      this.getImgs2();
      this.getVideo2();
    }
  },
  methods: {
    getImgs() {
      this.listImg = ["/img1.png", "/img2.png", "/img3.png"];
    },
    getVideo() {
      this.listVideo = ["/video1.png", "/video2.png", "/video3.png"];
    },
    getImgs2() {
      this.listImg = ["/imggggggg1.png", "/imggggggg2.png", "/imggggggg3.png"];
    },
    getVideo2() {
      this.listVideo = ["/videooooooo1.png", "/videooooooo2.png", "/videooooooo3.png"];
    },
  },
};
