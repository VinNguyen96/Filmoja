<template>
  <div class="header-menu">
    <ul class="nav" >

      <li class="nav-item" v-for="(item, index) in menuPageList" :key="index">
        <nuxt-link to="/abc" class="nav-link">{{item.text}}</nuxt-link>
        
        <ul class="nav">

          <HeaderMenuItem v-for="(child,index) in item.children" :key="'child' + index" :data="child"></HeaderMenuItem>
          <!-- <li class="nav-item">
            <a href="#" class="nav-link">About us</a>
          </li>

          <li class="nav-item">
            <a href="#" class="nav-link">Pricing</a>
          </li>

          <li class="nav-item nav-child">
            <a href="#" class="nav-link">Blog</a>
            <ul class="nav">
              <li class="nav-item">
                <a href="#" class="nav-link">Blog</a>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">Blog Details</a>
              </li>
            </ul>
          </li> -->
        </ul>
      </li>

    </ul>
  </div>
</template>

<script>
import HeaderMenuItem from "./HeaderMenuItem.vue";
export default {
  name: "HeaderMenu",

  components:{
    HeaderMenuItem,
  },

  data() {
    return {
      menuPageList: [
        {
          text: "Home", url: "/", children: [],
        },

        {
          text: "Pages",
          url: "/",
          children: [
            {
              text: "About Us",
              url: "/",
              children: [],
            },

            {
              text: "Pricing",
              url: "/",
              children: [],
            },

            {
              text: "Blog",
              url: "/",
              children: [
                {
                  text: "Blog",
                  url: "/",
                  children: [],
                },

                {
                  text: "Blog Details",
                  url: "/",
                  children: [],
                },
              ],
            },

            {
              text: "Authentication",
              url: "/",
              children: [],
            },

            {
              text: "404 error",
              url: "/",
              children: [],
            },
          ],
        },

        {
          text: "Movies",
          url: "/",
          children: [
            {
              text: "Movie List Sidebar",
              url: "/",
              children: [],
            },

            {
              text: "Movie Grid",
              url: "/",
              children: [
                {
                  text: "Grid Sidebar",
                  url:"/",
                  children:[],
                },

                 {
                  text: "Full Page Grid",
                  url:"/",
                  children:[],
                },

              ],
            },

            {
              text: "Movie Details",
              url: "/",
              children: [],
            },
          ],
        },

        {
          text: "Tv Show",
          url: "/",
          children: [
            {
              text: "Tv Series",
              url: "/",
              children: [],
            },

            {
              text: "Series Details",
              url: "/",
              children: [],
            },


          ],
        },

        {
          text: "Celebrities",
          url: "/",
          children: [
            {
              text: "All Celebrities",
              url: "/",
              children: [],
            },

            {
              text: "Celebrities Details",
              url: "/",
              children: [],
            },

          ],
        },

        {
          text: "Contact", url: "/", children: [],
        },

      ],
    };
  },
};
</script>