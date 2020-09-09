<template>
    <el-breadcrumb separator="/" class='breadcrumb' >

      <transition-group name="list">
  <el-breadcrumb-item   v-for='(item) in breadCrumb' :class='[{breadcrumbClass:item.meta.noClick}]'  :to={path:item.path} :key='item.path'>
         {{item.meta.title}}
 </el-breadcrumb-item>
      </transition-group>
      </el-breadcrumb>
</template>
<script>
export default {
  data() {
    return {
      breadCrumb: [],
    };
  },
    watch: {
    $route() {
      this.urlVariation();
    },
  },
  mounted() {
    this.urlVariation();
  },
    methods:{
          urlVariation() {
      let arr = this.$route.matched;
      let home = {
        meta: { title: "首页" },
        path: "/",
      };


     arr=arr.filter(item=>{
       return item.meta.title&&item.meta.title!="首页"
     })
      this.breadCrumb=[home,...arr]
      
    },
    }
};
</script>
<style lang="scss" scoped>
.breadcrumbClass{
  pointer-events: none;
    cursor: default;
    opacity: 0.7;
}

.list-enter-active {
  transition: all .5s ease;
}
.list-leave-to{
    transition: all .1s ease;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}


</style>
