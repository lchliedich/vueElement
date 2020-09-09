<template>
  <div id="main" ref="main"></div>
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
      this.myChart = echarts.init(this.$refs.main);

      let option = {
        
         color:['#2ec7c9','#b6a2de','#5ab1ef'],
        legend: {
 
        bottom: 0,
          data: ["Allocated Budget", "Actual Spending","Actual Spendings"],
        },
        radar: {
          // shape: 'circle',
          splitArea : {
                            show : true,   
                            areaStyle : {
                                color: ["#2a4a93"]  // 图表背景网格的颜色
                            }
                        },
                        splitLine : {
                            show : true,
                            lineStyle : {
                                width : 1,
                                color : '#286fbb' // 图表背景网格线的颜色
                            }
                        },
                        
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5],
            },
          },
          radius:80,
          center:['50%','42%'],
          indicator: [
            { name: "销售（sales）", max: 6500 },
            { name: "管理（Administration）", max: 16000 },
            { name: "信息技术（Information Techology）", max: 30000 },
            { name: "客服（Customer Support）", max: 38000 },
            { name: "研发（Development）", max: 52000 },
            { name: "市场（Marketing）", max: 25000 },
          ],
        },

        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
symbol: "none",
            data: [
              {
                value: [3300, 10000, 28000, 35000, 50000, 19000],
                name: "Allocated Budget",
                areaStyle:{
               opacity: 1,
                },
                
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "Actual Spending",
                 areaStyle:{
               opacity: 1
                },
                
              },
              {
                value: [3400, 14100, 29000, 32000, 43000, 22000],
                name: "Actual Spendings",
                 areaStyle:{
               opacity: 1
                },
                
              },
            ],
          },
        ],
      };

      this.myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped></style>
