<template>
  <div class="border" ref='border'>
    <div class='scrollborder'>
      <el-scrollbar class="scroll">
 
  
            <el-tag
            v-for="(item,index) in tagsArr"
            :key="item.label"
            :type="item.type"
            :closable="item.label != '首页'"
            :effect="effect(item)"
            @click="Go(item)"
            @close="removeTagsArr(item)"
          @contextmenu.native.prevent="contextmenu(item, $event,index)" 
          >
            {{ item.label }}
          </el-tag>
        


    </el-scrollbar>
    </div>
  

    <div :class="['popver']" v-show="popverShow" ref='popverShow'>
      <div class="opt" @click="refreshClick">刷新</div>
      <div class="opt" @click='popverRemoveTags'>关闭</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
       refresh:{},
       popverShow:false,
      tagsArr: [
        {
          label: "首页",
          path: "/home/index",
          type: "",
          menu: false,
        },
      ],
    };
  },
  watch: {

    $route() {
      if (!this.$route.meta.title) return;
      let item = {
        label: this.$route.meta.title,
        type: "",
        path: this.$route.path,
        menu: this.$route.matched[0].meta.menu ? true : false,
      };
      if (this.$route.matched[0].meta.menu) {
        item["sideF"] = this.$route.matched[
          this.$route.matched.length - 2
        ].name;
      }

      this.addTagsArr(item);
    },
  },
  mounted() {
    window.addEventListener("click", this.clickOther);
    this.initTagsArr();
  },
  
beforeDestroy() { 
    window.removeEventListener('click', this.clickOther);
},
  methods: {
    popverRemoveTags(){
      this.removeTagsIndex(this.refresh.index)
    },
        removeTagsArr(val) {
          
      let index = this.tagsArr.indexOf(val);
      this.removeTagsIndex(index)

    },
    removeTagsIndex(index){
      
      if(index==null||index==0) return;

            this.tagsArr.splice(index, 1);
      this.$router.push({ path: this.tagsArr[index - 1].path });
    },
    refreshClick(){
      this.$router.push({path:`/redirect${this.refresh.path}`})
    },
    clickOther(){
   this.popverShow=false
    },
    contextmenu(item, event,index) {
      this.refresh={...item,index}
      this.popverShow=true
      let border=this.$refs.border
      let top=event.clientY-border.getBoundingClientRect().top
      let left=event.clientX-border.getBoundingClientRect().left
      this.$refs.popverShow.style.top=top+"px";
      this.$refs.popverShow.style.left=left+"px"
    
    },
    initTagsArr() {
      let item = this.$route;
      if (item.meta.title == "首页") {
        return;
      }
      let n = {
        label: item.meta.title,
        type: "",
        path: item.path,
        menu: this.$route.matched[0].meta.menu ? true : false,
      };

      if (this.$route.matched[0].meta.menu) {
        n["sideF"] = this.$route.matched[this.$route.matched.length - 2].name;
      }

      this.tagsArr.push(n);
    },
    effect(item) {
      return this.$route.path == item.path ? "dark" : "plain";
    },
    Go(item) {
      this.$router.push({ path: item.path });

      if (item.sideF) {
        this.$store.commit("side/setPath", item.sideF);
      }
    },
    addTagsArr(val) {
      for (let i of this.tagsArr) {
        if (i.label == val.label) {
          return;
        }
      }
      this.tagsArr.push(val);
    },

  },
};
</script>
<style lang="scss" scoped>
.popver {
  position: absolute;
  background: #fff;
  border: 0.5px solid #eee;
  width: 80px;
  font-size: 14px;
  .opt{
    padding:10px;
    cursor: pointer;
    transition: all .5s;
  }
  .opt:hover{
    background:rgba($color: #000000, $alpha: 0.1)
  }

}
.border {
  border-top: 0.5px solid #eee;
  border-bottom: 0.5px solid #eee;
  position: relative;
  width: 100%;

}
.scrollborder{
  width: 100%;
  text-align: left;
}


.scroll {
  height: 40px;
  width: 100%;
  white-space: nowrap;
      .el-tag {
      cursor: pointer;
      margin: 0 3px;

   
      
    }
}
.el-scrollbar .el-scrollbar__wrap .el-scrollbar__view {
  white-space: nowrap;
}
.el-scrollbar__view {
  display: flex;
  align-items: center;
}
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;

}
.home {
  box-sizing: border-box;
  border: 5px solid red;
  height: 100px;
  white-space: nowrap;
}
.ess{
  border:1px solid red;
  width: 100%;
}
</style>
