<template>
    <div class=" container top ">
        <Title :title="abc"></Title>
        <div class="content">
            <div class="menu-Content">
                <div>NEW RELEASES</div>
                <div>MOVIES</div>
                <div>TV SERIES</div>
                <div>CARTOONS</div>
            </div>
            <div class="row list-movie">
                <div class="col-lg-3" v-for="(item, index) in list" :key="'listmove' + index">
                    <!-- <MovieCard :item="item" @like="handleLiked" @star="handleStar"></MovieCard> -->
                    <MovieCard :item="item" @action="handleAction"></MovieCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieCard from "@/components/movies/Card";
import Title from "../../components/layout/Title.vue";
import {actionTypes} from '@/constant/actions.js'

export default {
    name: 'ListMovieItem',

    components: {
        Title,
        MovieCard,
    },

    props: {
        list: {
            type: Array,
            default: () => [],
        }

    },

    data() {
        return {
            abc: {
                name: "New Items",
                year: "",
            },
        }
    },

    methods: {
        handleAction(param) {
            if(!param.id || !param.key) return false
            this[`handle${param.key}`](param.id)
        },

        [`handle${actionTypes.LIKE}`](id) {
            console.log('đã like ' + id)
        },
        
        handleStar(id) {
            console.log('đã star ' + id)
        },
    }
    
}
</script>