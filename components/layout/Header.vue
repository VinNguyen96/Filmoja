<template>
  <div class="container layout-header">
    <div class="row">
      <div class="col-lg-2">
        <Logo></Logo>
      </div>

      <div class="layout-search col-lg-4">
        <div class="layout-text">
          <input type="text" placeholder="Search...." />
        </div>
        <div class="layout-submit">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>

      <div class="layout-menu col-lg-6">
        <menu_home/>
        <page/>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/layout/Logo.vue";


export default {
  name: "Header",

  components: {
    Logo,
    
  },
};
</script>