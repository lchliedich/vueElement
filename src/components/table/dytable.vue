<template>
  <div class="tab">
    <div class="title">
      固定表头，按照表头顺序排序
    </div>
    <div>
      <div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox
            v-show="!item.flag"
            v-for="item in tableTitle"
            :key="item.title"
            :label="item.title"
            @change="change(item,$event)"
          >{{item.title}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            v-for="item in comTableTitle"
            :key="item.title"
            :label="item.title+item.show"
            :prop="item.prop"
            ref='ms'
          >
          
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="title">
      不固定表头，按照点击顺序排列
    </div>
    <div>
      <div>
        <el-checkbox-group v-model="checkList2">
          <el-checkbox
            v-show="!item.flag"
            v-for="(item,index) in tableTitle2"
            :key="item.title"
            :label="item.title"
            @change="change2(item,index,$event)"
          >{{item.title}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            v-for="item in comTableTitle2"
            :key="item.title"
            :label="item.title+item.show"
            :prop="item.prop"
            ref='ms'
          >
          
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    computed:{
     comTableTitle(){
         return this.tableTitle.filter(item=>{
             return item.show
         })
     },
      comTableTitle2(){
         return this.tableTitle3.filter(item=>{
             return item.show
         })
     }
    },
    methods:{
    change(a,b){
        this.tableTitle[this.tableTitle.indexOf(a)].show=b
    },
    change2(item,index,val){
      if(val){
        this.tableTitle3.push(item)
      }else{
          let index=0;
        for(let i of this.tableTitle3.keys()){
            if(this.tableTitle3[i].title==item.title){
                index=i
                        console.log(index)
                                this.tableTitle3.splice(index,1)
                return;
            }
        }


      }
    }
    },
  data() {
    return {
      checkList: [
          "日期",
          "名字",
          "地址"
      ],
      tableTitle: [
        { title: "skse", prop: "skse", flag: true,show:true},
        { title: "日期", prop: "date",show:true},
        { title: "名字", prop: "name" ,show:true},
        { title: "地址", prop: "address",show:true },
      ],
      checkList2: [
          "日期",
          "名字",
          "地址"
      ],
      tableTitle3:[
          { title: "skse", prop: "skse", flag: true,show:true},
        { title: "日期", prop: "date",show:true},
        { title: "名字", prop: "name" ,show:true},
        { title: "地址", prop: "address",show:true },
      ],
       tableTitle2: [
        { title: "skse", prop: "skse", flag: true,show:true},
        { title: "日期", prop: "date",show:true},
        { title: "名字", prop: "name" ,show:true},
        { title: "地址", prop: "address",show:true },
      ],
      tableData: [
        {
          skse: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          skse: 1,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          skse: 1,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          skse: 1,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.tab {
  text-align: left;
  padding-left: 30px;
  box-sizing: border-box;
}
.title {
  padding: 15px 0;
}
</style>
