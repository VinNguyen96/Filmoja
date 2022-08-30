<template>
       <div class="top-movies__text">
                <h2>{{title}} <span>2019</span> </h2>
        </div>
</template>

<script>
export default {
    name:'Title',

    props:{
        title:{
            // 1.kieu du lieu
            type: String,
            default: () => '',
            
        }
    },

    data(){
        return{
            titleArray: [
                {
                    name: 'Top Movies',
                    year: '2019',
                },

            ]
        }
    }

}
</script>