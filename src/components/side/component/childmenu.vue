<template>

    <div class=" as" >
      <el-submenu
        :index="indexPathJoin(item.name)"
        v-if="item.children != null && item.children.length > 1"
      >
        <template slot="title">
          <i :class="item.meta.icon" v-if="item.meta.icon"></i>
          <i v-else style="padding-left:35px;"></i>
          <span>{{ $t(item.meta.title) }}</span>
          <span></span>
        </template>

         <side-menu  class="side-menu" v-for='(itemChild,indexChild) in item.children' :key='indexChild' :item='itemChild' 
         :url="pathJoin(url,item.name)"></side-menu>
      </el-submenu>
      <el-menu-item
        v-else
        :index="indexPathJoin(item.name)"
        @click="routerGo(url, item.name)"
      >
        <i :class="item.meta.icon" v-if="item.meta.icon"></i>
        <i v-else style="padding-left:35px;"></i>
        <span class="es">{{ $t(item.meta.title) }}</span>
      </el-menu-item>
    </div>
  
</template>
<script>
import path from "path";
export default {
  name: "sideMenu",
  props: ["item", "url"],
  data() {
    return {
    }
  },
  methods: {
    slash(val){
         let reg = /^\//;
      reg.test(val) ? "" : (val = "/" + val);
      return val;
    },
    indexPathJoin(name) {
    
      return this.slash(name);
    },
    pathJoin(url, name) {
     url?url=this.slash(url):"";
      return url ? path.join(url, name) : name;
    },
    routerGo(url, name) {
  
      this.$router.push({ path: this.pathJoin(url, name) });
    },
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
}
.side-menu {
  background: $blueChild;
}
.as {
  text-align: left;
}
</style>
