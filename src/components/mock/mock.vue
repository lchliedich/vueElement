<template>
  <div class='es'>


  <!-- <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    v-for='(item,index) in tableTitle' :key='index'
      :prop="item.prop"
      :label="item.label"
     >
    </el-table-column>
  </el-table> -->



  </div>
</template>
<script>
import axios from 'axios'
export default {
   data(){
       return{
           tableTitle:[
              {"prop":"Content",label:"内容"},
              {"prop":"CreateUserId",label:"创建用户id"},
              {"prop":"CreateUserName",label:"创建用户名"},
              {"prop":"CreatedTime",label:"创建时间"},
              {"prop":"Prize",label:"奖品"},
              {"prop":"QuestionId",label:"询问id"},
              {"prop":"State",label:"状态"},
              {"prop":"Title",label:"标题"},
              {"prop":"VisitCount",label:"访问数"}
           ],
           tableData:[]
       }
   },
   mounted(){
  //    axios.get("https://petstore.swagger.io/v2/pet/findByStatus?status=sold")
  //    .then(res=>{
  //  console.log(res)
  //    }) 
  //    .catch(err=>{
  //      console.log(err)
  //    })
     axios.get("http://47.111.250.151:8081/api/Question/GetQuestion")
     .then(res=>{
    this.tableData=res.data.rows
     }) 
     .catch(err=>{
       console.log(err)
     })
   }
};
</script>
<style lang="scss" scoped>
.es{

}
</style>
