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
        color:['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80'],
        legend: {
        bottom:10,
        left: 'center',
        data: ['industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
        
    },
          series:[
            {
         roseType: 'radius',
            type: 'pie',
            radius: ['20%', '50%'],
     
      
            emphasis: {
                label: {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            data: [
                {value: 335, name: 'industries'},
                {value: 310, name: 'Technology'},
                {value: 234, name: 'Forex'},
                {value: 135, name: 'Gold'},
                {value: 580, name: 'Forecasts'}
            ]
            }
          ]
      };

      this.myChart.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped></style>
