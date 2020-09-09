<template>
  <div>

 <div class='flex'>
    <div >
    Filename: <el-input
    class='filename'
    placeholder="请输入文件名，默认为excel"
    prefix-icon="iconfont icon-file"
    v-model="valueName">
  </el-input>
    </div>
    <div class='opt'>
        <el-button type="primary" icon="iconfont icon-file" @click='ck2'>导出 Excel</el-button>
    </div>
 </div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    ref='table'
     @selection-change="handleSelectionChange"
    >
    <el-table-column type='selection'
    
    >

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
  </div>
</template>
<script>
import saveAs from 'file-saver'
import XLSX from 'xlsx'
export default {
    data(){
        return{
            valueName:"",
            tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
 
        }
    },
    methods:{
         handleSelectionChange(val) {
        this.multipleSelection = val;
      },
        ck2(){

         
           let dom=this.$refs.table.$el

            let book=XLSX.utils.book_new()
        
            let sheet=XLSX.utils.json_to_sheet(this.multipleSelection,
            {header:["date","name","address"]})
            XLSX.utils.book_append_sheet(book,sheet,"sheet1")

    let wb = XLSX.utils.table_to_book(dom)
        console.log(wb,book)
         /* get binary string as output */
     
         let wbout = XLSX.write(book, { bookType: 'xlsx', bookSST: true, type: 'array' })
         let file=new File([wbout],`${this.valueName||"excel"}.xlsx`,{type:"application/octet-stream"})
         saveAs(file)
        },
    }
};
</script>
<style lang="scss" scoped>
.flex{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .filename{
        width:300px;
    }
    .select{
        width: 100px;
    }
    .opt{
        margin-left: 20px;
    }
}
</style>
