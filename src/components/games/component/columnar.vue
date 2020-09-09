<template>
  <div id='cs' ref='cs'>

123
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  data() {
    return {
      myChart: null,
    };
  },
  mounted() {
    this.setMyChart();
    window.addEventListener("resize", this.resize);
  },
  beforeMount() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.myChart.resize();

    },
    setMyChart() {

      this.myChart = echarts.init(this.$refs.cs);
      let option = {
        color:['#2ec7c9','#b6a2de','#5ab1ef','red','orange'],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid:{
          left:"15%",
          right:"10%",
          
        },

        xAxis: {
          
          type: "category",
          data: ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
         barWidth : 20,
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
         
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "总量",
         
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "总量",
            
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "搜索引擎",
            type: "bar",
            stack: "总量",
         
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      this.myChart.setOption(option);
       
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
