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
        Book Type:
          <el-select class='select' v-model="valueSelect" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select>
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
    >
    <el-table-column
      prop="date"
      label="date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="address">
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
            valueSelect:"xlsx",
            valueName:"",
            options:[
                  "xlsx",
                  "csv",
                  "txt"
            ],
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
        ck2(){
  let dom=this.$refs.table.$el
    let wb = XLSX.utils.table_to_book(dom)
         /* get binary string as output */
         let wbout = XLSX.write(wb, { bookType: this.valueSelect, bookSST: true, type: 'array' })
         let file=new File([wbout],`${this.valueName||"excel"}.${this.valueSelect}`,{type:"application/octet-stream"})
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
