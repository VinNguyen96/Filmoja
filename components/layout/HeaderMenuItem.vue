<template>

    <li class="nav-item nav-child">
        <a href="#" class="nav-link">{{ data.text }}</a>
        <ul class="nav">

            <HeaderMenuItem v-for="(item, index) in data.children" :key="'childItem' + index" :data="item">
            </HeaderMenuItem>
            <!-- <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
            </li> -->

            <!-- <li class="nav-item">
                <a href="#" class="nav-link">Blog Details</a>
            </li> -->
        </ul>
    </li>
</template>

<script>
import HeaderMenuItem from "@/components/layout/HeaderMenuItem.vue";

export default {
    name: 'HeaderMenuItem',

    comments: {
        HeaderMenuItem,
    },

    props: {
        data: {
            type: Object,
            default: () => {},
        }
    }
}
</script>