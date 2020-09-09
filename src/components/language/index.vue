<template>
  <div>

   <div>
      {{$t('语言切换')}}
   </div>
   <div>
       <el-radio v-model="radio" label="zh">简体中文</el-radio>
  <el-radio v-model="radio" label="en">English</el-radio>
  <el-radio v-model="radio" label="ja"> 日本語 </el-radio>
   </div>
  </div>
</template>
<script>
export default {
    data () {
      return {
        radio: 'zh'
      };
    },
    watch:{
        radio(val){
          this.$i18n.locale=val
        }
    }
    
};
</script>
<style lang="scss" scoped></style>
