<template>
  <div>
    <div  class='file'>
        <input type="file" style='display:none' @change="handChange" ref='file'>
        <el-button type="primary" @click='rs'>上传</el-button>
    </div>
     <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
    v-for='(item) in tableTitle' 
    :key='item.prop'
      :prop="item.prop"
      :label="item.label"
      width="180">
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
    data(){
        return{
       tableData:[],
       tableTitle:[]
        }
    },
    methods:{
    handChange(e){
        let file=e.target.files[0]
        let reader = new FileReader();
     reader.readAsArrayBuffer(file);
        reader.onload = ev => {
        let data=ev.target.result
        let dataExcel=XLSX.read(data,{type:"array"})
        this.tableData=[]
        this.tableTitle=[]
        dataExcel.SheetNames.map(name=>{
            
             let dd=XLSX.utils.sheet_to_json(dataExcel.Sheets[name])
               this.tableData=dd

       for(let i in dd[0]){
           this.tableTitle.push({
             prop:i,
             label:i    
           })
       }
        })

       
      
  
    }
    },
    rs(){
    this.$refs.file.click()
    }
    },
};
</script>
<style lang="scss" scoped>
.file{
    border:1px solid red;
    width:500px;
    margin:50px auto;
}
</style>
