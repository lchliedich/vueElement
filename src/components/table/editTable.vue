<template>
  <div class='es'>

 <el-table
    :data="tableData"
    border
    style="width: 100%"
    >
    <el-table-column
      prop="id"
      label="ID"
          align='center'
     >
    </el-table-column>
    <el-table-column
      prop="date"
      label="Date"
      width="150"
          align='center'
     >
    </el-table-column>
        <el-table-column
      prop="author"
      label="Author"
          align='center'
    >
    </el-table-column>
    <el-table-column
      prop="importance"
      label="Importance"
          align='center'
     >
     <template #default='{row}'>
          <i class='el-icon-star-on' v-for='item in row.importance' :key='item'></i>
     </template>
    </el-table-column>
        <el-table-column
      prop="Status"
      label="Status"
          align='center'
     >
     <template  #default='{row}'> 
       <el-button :type='row.Status' size='mini'>skse</el-button>
     </template>
    </el-table-column>
        <el-table-column
      prop="title"
      label="Title"
          align='center'
          width="500"
    >
    <template #default='{row}'>
        <div class='flex'>
            <div v-show='row.flag'>{{row.title}}</div>
            <div v-show='!row.flag' class='flex-false'>
           <el-input v-model="row.value" placeholder="请输入内容"></el-input>
               <el-button type="warning"  size='mini' @click='row.flag=!row.flag'>cancel</el-button>
            </div>
        </div>
    </template>
    </el-table-column>
        <el-table-column
            align='center'
     >
     <template #header>
         <div>
             Actions
         </div>
     </template>
     <template #default='{row,$index}'>
         <div>
          <el-button v-show="row.flag" type="primary" icon="el-icon-edit" size="mini" @click='row.flag=!row.flag'>Edit</el-button>
          <el-button v-show='!row.flag' type="success" icon="el-icon-edit" size="mini" @click='editValue($index)'>ok</el-button>
         </div>
     </template>
    </el-table-column>
    
  </el-table>
  </div>
</template>
<script>
export default {
    data(){
        return{
            input:"123",
             tableData: [
                 {
                     id:1,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                     title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:2,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:3,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:4,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:5,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:6,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 },
                  {
                     id:7,
                     date:"2009-12-14 17:26",
                     author:"laura",
                     importance:5,
                     Status:"success",
                      title:"Let's dance",
                     flag:true,
                     value:"Let's dance",
                 }
             ]
        }
        },
        methods:{
            editValue(index){
                this.tableData[index].flag=!this.tableData[index].flag
               this.tableData[index].title=this.tableData[index].value
            }
        }
};
</script>
<style lang="scss" scoped>

.flex{
   text-align: left;
   .flex-false{
       display: flex;
       justify-content: space-between;
       .el-input{
           width: 400px;
       }
      /deep/ .el-input__inner{
    height: 30px;
}
   }
}
.elinput{
    width: 400px;
    height: 30px;
}
.es{
    padding:20px;
    box-sizing: border-box;
}
</style>
