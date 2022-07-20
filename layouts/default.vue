<template>
    <div class="layout-default">
        <Header></Header>
        <nuxt/>
    </div>
</template>

<script>
 import Header from "@/components/layout/Header.vue"

export default {
    name:"default",

    components:{
        Header,
    }
}
</script>