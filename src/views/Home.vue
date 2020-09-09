<template>

    <div >
      <side-left :class="['side',{sideWidth:isCollapse}]" :isCollapseF='isCollapse'></side-left>
      <div :class="['content',{conWidth:isCollapse}]">
              <content-right :isCollapse.sync='isCollapse'></content-right>
      </div>
      <!-- <div class='content'>
        <content-right :isCollapse.sync='isCollapse'></content-right>
      </div> -->
    </div>

</template>
<script>
import sideLeft from "@/components/side";
import contentRight from "@/components/content";
export default {
  components: {
    sideLeft,
    contentRight
  },
  data(){
    return{
   isCollapse:false
    }
  },
  methods:{
  isCollapseFlag(){
    document.documentElement.clientWidth>=750?"":this.isCollapse=true
    console.log(this.isCollapse)
  }
  },
  mounted(){
    this.isCollapseFlag()
  },
  beforeMount(){
    window.addEventListener('resize',this.isCollapseFlag)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.isCollapseFlag)
  },
  

};
</script>
<style lang="scss" scoped>

.side{
      position: fixed;
    height: 100vh;
    background:$blue;
    width: 200px;
    transition: width .28s;

}
   .sideWidth{
     width: 64px;
   }
  .content {
   transition: margin-left .28s;
  margin-left: 200px;
    height: 100vh;

  }
  .conWidth{
margin-left: 64px;
  }
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
}



</style>
