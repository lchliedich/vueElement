<template>
   <transition name="fade" mode='out-in'>
   <router-view  :key='key'></router-view>
   </transition>

</template>
<script>
export default {
    computed:{
       key(){
          return this.$route.fullPath
       }
    }
};
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
