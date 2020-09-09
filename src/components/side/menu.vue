<template>
  <el-menu
    :default-active="index"
    :default-openeds="indexArr"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    ref='menu'
  >

    <child-menu  v-for="(item, index) in routerArr" :key="index" :item='item'></child-menu>
  </el-menu>
</template>
<script>
import path from "path";
import childMenu from './component/childmenu'
export default {
  // name: "sideMenu",
  props: ["isCollapse", "routerArr", "url"],
  components:{
 childMenu
  },
  data() {
    return {
      index: "",
      indexArr: [],
    };
  },
  watch:{
 "$store.getters.sidePath":{
      handler(item){

       if(!item.val)return;
   this.$refs.menu.open([item.val])
        
      },
      immediate:true,
      deep:true

 }
  },
  mounted() {
          this.index = this.$route.name;
         this.indexMake()

  },
  
  methods: {

    indexMake() {
      // let arr =path
      //   .replace(/^\//, "")
      //   .split("/")
      //   .map((item) => {
      //     return "/" + item;
      //   });
      // return arr
    if(this.$route.matched[0].meta.menu){
          let val=this.$route.matched[this.$route.matched.length-2].name
      this.$store.commit("side/setPath",val)

    }
       
    },
    indexPathJoin(name) {
      let reg = /^\//;
      reg.test(name) ? "" : (name = "/" + name);
      return name;
    },
    pathJoin(url, name) {
      return url ? path.join(url, name) : name;
    },
    routerGo(url, name) {
      this.$router.push({ path: this.pathJoin(url, name) });
    },
    // handleOpen(key, keyPath) {
    //   console.log("open",key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log("close",key, keyPath);
    // }
  },
};
</script>
<style lang="scss" scoped>

.el-menu-vertical-demo {
  height: 100vh;
  &:not(.el-menu--collapse) {
    width: 200px;
  }
  width: 100%;

}
.side-menu {
  background: $blueChild;
}
.as {
  text-align: left;
}
</style>
