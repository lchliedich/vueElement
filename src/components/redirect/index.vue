<template>
  <div>

   side21
  </div>
</template>
<script>
export default {
    data(){
         this.$router.replace({
            path:this.$route.params.pathMatch
        })
       return{

       }
    }
};
</script>
<style lang="scss" scoped>

</style>
