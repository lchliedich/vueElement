<template>
  <div>

 <div class='flex'>
    <div class='opt'>
        <el-button type="primary" icon="iconfont icon-file" @click='ck2'>导出 zip</el-button>
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
  <input type="file" @change="getImg">
  </div>
</template>
<script>
import saveAs from 'file-saver'
import XLSX from 'xlsx'
import JSZip from 'jszip'
export default {
    data(){
        return{
            imgBase64:"",
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
        getImg(file){
        let files=file.target.files[0]
        let reader=new FileReader()
        reader.readAsDataURL(files)
        reader.onload=(ev)=>{
            let file=ev.target.result
            this.imgBase64=file.split(',')[1]
    

        }
        },
        ck2(){
     let book=XLSX.utils.book_new()
     let sheet=XLSX.utils.json_to_sheet(this.tableData)
     XLSX.utils.book_append_sheet(book,sheet,"sheet1")

     let wbout = XLSX.write(book, { bookType: 'xlsx', bookSST: true, type: 'array' })
    //   let file=new File([wbout],`${this.valueName||"excel"}.xlsx`,{type:"application/octet-stream"})

      let zip=new JSZip()
      zip.file("Hello1.txt", "Hello1 World\n");
      zip.file("excel.xlsx",wbout)
      zip.file("Hello2.txt", "Hello2 World\n");
      
    let img=zip.folder("images")
    img.file("444.png",this.imgBase64,{base64:true})

    zip.generateAsync({type:"blob"}).then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});
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
