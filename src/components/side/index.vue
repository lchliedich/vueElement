<template>
  <div :class="['side']">
  <el-scrollbar style="height:100%" class='side-scroll'>
      <side-menu  class='opt' :routerArr='routerArr' :isCollapse='isCollapseF'></side-menu>
  </el-scrollbar>
  </div>
</template>
<script>
import sideMenu from './menu'
import {mapState} from 'vuex'
export default {
  props:['isCollapseF'],
  components:{
   sideMenu,
  },
  computed:{
    isCollapse(){
   return this.isCollapseF
    },
        ...mapState({
      routerArr:state=>state.user.routerArr
    })
  }


};
</script>
<style lang="scss" scoped>
  .side{

   
    /deep/ .el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }

</style>
