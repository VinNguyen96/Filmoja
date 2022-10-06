<template>
    <section class="section-1__detailFilm">
        <div class="container info ">
            <div class="info-film row">
                <div class="info-images col-lg-2">
                    <img src="@/assets/images/detailFilm/detail-img1.png" alt="">

                    <div class="btn-infoFilm">
                        <nuxt-link to="">Đặt vé</nuxt-link>
                    </div>
                </div>

                <div class="info-content col-lg-9">
                    <h4>BỖNG DƯNG TRÚNG SỐ</h4>

                    <h6> <span class="text-bold">Xem xếp hạng </span></h6>

                    <h6> <span class="text-bold"> Xếp hạng </span>
                        [Trong nước] 13 tuổi trở lên

                        <span class="text-bold">Ngày phát hành</span> 22/09/2022
                    </h6>

                    <h6>
                        <span class="text-bold">
                            Thông tin cơ bản
                        </span>

                        Comedy Korea (113Phút)
                    </h6>

                    <h6>
                        <span class="text-bold">Loại</span>

                        2D | Normal | Normal sound | Phụ đề
                    </h6>

                </div>

                <div class="icon-info col-lg-1">

                </div>
            </div>

            <div class="info-describe">
                <h4>Tóm Tắt</h4>

                <p>Người lính Hàn Quốc Chun Woo (Ko Kyoung-pyo) vô tình nhặt được tờ vé số trúng độc đắc trị giá lên đến
                    gần 6 triệu đô! Nhưng chưa kịp vui mừng bao lâu, tờ vé số ấy không may bị cuốn bay sang bên kia biên
                    giới và rơi vào tay anh lính Triều Tiên Yong Ho (Lee Yi-kyung). Chun Woo cần tờ vé số để đổi tiền,
                    trong khi Yong Ho dù nắm giữ tờ vé quan trọng lại không thể đặt chân đến Hàn Quốc. Câu chuyện ngày
                    càng trở nên rắc rối và hài hước khi có thêm những người đồng đội của hai anh chàng biết được sự
                    việc và nhất quyết tham gia vào cuộc đàm phán chia tiền.</p>
            </div>

        </div>
    </section>
    <!-- 

    <section class="section-1__detailFilm">
        <div class="container info">
            <div class="info-film row">
                <div class="info-images col-lg-2">
                    <img src="@/assets/images/detailFilm/detail-img1.png" alt="">

                    <div class="btn-infoFilm">
                        <nuxt-link to="">Đặt vé</nuxt-link>
                    </div>
                </div>

                <div class="info-content col-lg-9">
                    <h4>BỖNG DƯNG TRÚNG SỐ</h4>

                    <h6> <span class="text-bold">Xem xếp hạng </span></h6>

                    <h6> <span class="text-bold"> Xếp hạng </span>
                        [Trong nước] 13 tuổi trở lên

                        <span class="text-bold">Ngày phát hành</span> 22/09/2022
                    </h6>

                    <h6>
                        <span class="text-bold">
                            Thông tin cơ bản
                        </span>

                        Comedy Korea (113Phút)
                    </h6>

                    <h6>
                        <span class="text-bold">Loại</span>

                        2D | Normal | Normal sound | Phụ đề
                    </h6>

                </div>

                <div class="icon-info col-lg-1">

                </div>
            </div>

            <div class="info-describe">
                <h4>Tóm Tắt</h4>

                <p>Người lính Hàn Quốc Chun Woo (Ko Kyoung-pyo) vô tình nhặt được tờ vé số trúng độc đắc trị giá lên đến
                    gần 6 triệu đô! Nhưng chưa kịp vui mừng bao lâu, tờ vé số ấy không may bị cuốn bay sang bên kia biên
                    giới và rơi vào tay anh lính Triều Tiên Yong Ho (Lee Yi-kyung). Chun Woo cần tờ vé số để đổi tiền,
                    trong khi Yong Ho dù nắm giữ tờ vé quan trọng lại không thể đặt chân đến Hàn Quốc. Câu chuyện ngày
                    càng trở nên rắc rối và hài hước khi có thêm những người đồng đội của hai anh chàng biết được sự
                    việc và nhất quyết tham gia vào cuộc đàm phán chia tiền.</p>
            </div>

        </div>
    </section> -->
</template>

<script>
export default {
    name: 'detailFilms',

    props: {
        item: {
            type: Array,
            default: () => [],
        },

    },

    data() {
        return {
            listFilm: [],
        }
    },

    mounted() {
        this.fetchListFilm();
    },
    
    methods: {
    async fetchListFilm() {
      const ip = await this.$axios.$get('https://netflix-weekly-top-10.p.rapidapi.com/api/othermovie')
      this.listFilm = ip
    }

    
  }
}
</script>