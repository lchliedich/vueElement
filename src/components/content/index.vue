<template>

    <div :class="['flex']">
      <div class="nav">
        <div class="nav-left">
  <i class="el-icon-s-operation icon" @click="isCollapseClick" ></i>
          <bread-crumb></bread-crumb>
        </div>
        <div class="nav-right">
          工具
        </div>
      </div>

       <tabs class='width'></tabs>

      <div class="content">
        <r-view></r-view>
      </div>
    </div>

</template>
<script>
import rView from "./rview";
import breadCrumb from "../components/breadcrumb";
import tabs from '../components/tabs'
export default {
  props: ["isCollapse"],

  components: {
        breadCrumb,
    tabs,
    rView,

  },

  methods: {

    isCollapseClick() {
      let flag = this.isCollapse;
      this.$emit("update:isCollapse", !flag);
    },
  },
};
</script>
<style lang="scss" scoped>
.width{
  width: 100%;
}
.flex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 0 20px;
    height: 50px;
    .nav-left {
      display: flex;
      align-items: center;
      .breadcrumb {
        padding-left: 20px;
      }
      .icon {
        border: 3px solid $blue;
        background: $blue;
        color: #fff;
      }
    }
  }
  .content {
   width: 100%;
    box-sizing: border-box;
    padding:20px;
    box-sizing: border-box;
  }
}
</style>
