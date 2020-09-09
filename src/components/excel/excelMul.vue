<template>
  <div>

 <div class='flex'>


    <div class='opt'>
        <el-button type="primary" icon="iconfont icon-file" @click='ck2'>导出 Excel</el-button>
    </div>
 </div>
<el-table
    :data="tableData"
    style="width: 100%"
    ref='table'
    >
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column label="配送信息">
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column label="地址">
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
      </el-table-column>
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
             tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
 
        }
    },
    methods:{
        ck2(){
  let dom=this.$refs.table.$el
    let wb = XLSX.utils.table_to_book(dom)
         /* get binary string as output */
         let wbout = XLSX.write(wb, { bookType: "xlsx", bookSST: true, type: 'array' })
         let file=new File([wbout],'excel.xlsx',{type:"application/octet-stream"})
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
