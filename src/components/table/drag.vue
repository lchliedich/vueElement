<template>
  <div class='es'>
   <el-table
   ref='table'
   row-key="skse"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop='x'
      type='index'
      label="序号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

   <div v-once>
默认排序[ <span v-for='(item) in tableData' :key='item.x'>
{{item.x}}
</span>]
   </div>
   <div>
拖拽后排序 [
 <span v-for='(item) in tableData' :key='item.x'>
{{item.x}}
</span>
]
   </div>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
   data(){
     return{
       tableData: [{
         x:"1",
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
           x:"2",
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
           x:"3",
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
           x:"4",
          date: '2016-05-03',
          name: '王小虎4',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
     }
   },
   mounted(){
       setTimeout(() => {
           this.rowDrag()
       }, 300);
   },
   methods:{
     rowDrag(){
       let dom=document.querySelector('.el-table__body-wrapper tbody')
       let that=this
       new Sortable(dom,{
         onEnd({newIndex,oldIndex}){
           let item=that.tableData.splice(oldIndex,1)[0]
           that.tableData.splice(newIndex,0,item)
         }
       })
     }
   }
};
</script>
<style lang="scss" scoped>
.chosen{
background:red;
color:red;
}
.drag{
background:green; 
color:green;
}
.es{
  padding:20px;
  box-sizing: border-box;
}
</style>
