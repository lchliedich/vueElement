<template>
  <div>
    <div class="no">
     <div class='flex'>
     <div>
   <img class='image' src="../assets/img/404.a57b6f31.png" alt="">
     </div>
     <div>
        <div class="but" @click="routerGo">
        返回
      </div>
      <div style='margin-top:40px;'>
              您请求的页面不存在，请返回呢，亲(～￣▽￣)～
      </div>
     </div>
     </div>
    </div>
  </div>
</template>
<script>
  export default{
   methods:{
     routerGo(){
       this.$router.go(-1)
     }
   }
  }
</script>
<style lang="scss" scoped>
.no {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .flex{
    display: flex;
    width: 60vw;
    justify-content: space-between;
    align-items: center;
    
  }
  .image{
    width:40vw;
  }
  .but {
     display: inline-block;
     width: 300px;
    background: $blue;
    color: #fff;
    border-radius: 30px;
    margin-top: 50px;
    padding: 15px 0;
  }
}
</style>
