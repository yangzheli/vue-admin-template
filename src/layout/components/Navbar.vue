<template>
  <div class="navbar">
    <div class="toggle" @click="toggleClick">
      <svg-icon :iconClass="toggle" :size="1.5"></svg-icon>
    </div>
    <div class="breadcrumb">
      <breadcrumb></breadcrumb>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

export default {
    components: {
        Breadcrumb
    },
    computed: {
        ...mapGetters(['sidebar']),
        toggle() {
            return this.sidebar.opened ? 'toggle-left' : 'toggle-right'
        }
    },
    methods: {
        toggleClick: function() {
            this.$store.dispatch('app/toggleSideBar')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/_mixin.scss";

.navbar {
  height: 3rem;
  overflow: hidden;
  position: relative;
  @include color("navbarText");
  @include background_color("navbarBg");
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .toggle {
    display: inline-block;
    padding: 0 1rem;
    line-height: 3rem;
    cursor: pointer;

    svg {
      transform: translateY(0.375rem);
    }
  }

  .breadcrumb {
    display: inline-block;
  }
}
</style>
