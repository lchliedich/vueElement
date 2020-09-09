<template>
  <div>
    <div class="flex">
     
      <div class="opt basic">
        <div id="main" ref="main"></div>
      </div>

    <div class='bas-flex'>
      <ech-columnar  class='opt  basic2'></ech-columnar>
<ech-pie class='opt basic3'></ech-pie>
<ech-radar class='opt basic4'></ech-radar>
    </div>


    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import echColumnar from "./component/columnar";
import echPie from "./component/pie";
import echRadar from "./component/radar";
export default {
  components: {
    echColumnar,
    echPie,
    echRadar,
  },
  data() {
    return {
      val: "123456",
      myChart: null,
    };
  },
  mounted() {
    this.setBasic();
    window.addEventListener("resize", this.resize);
  },
  beforeMount() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize() {
      this.myChart.resize();

    },
    setBasic() {
      this.myChart = echarts.init(this.$refs.main);
      // 绘制图表
      this.myChart.setOption({
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: true,
          textStyle: {
            align: "left",
          },
        },
        dataset: {
          source: [
            ["product", "Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"],
            ["expected", 100, 120, 161, 134, 105, 160, 165],
            ["actual", 120, 82, 91, 154, 162, 140, 145],
          ],
        },
         grid:{
         left:"10%",
         right:"10%"
         },
        xAxis: {
          type: "category",
          boundaryGap: false,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "#3ca4d6",
            },
          },
          axisPointer: {
            show: true,
            lineStyle: {
              type: "solid",
            },
          },
        },
        yAxis: {
          axisTick: {
            show: false,
          },
          splitArea: {
            show: true,
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "#3ca4d6",
            },
          },
          splitLine: {
            lineStyle: {
              color: "#eee",
            },
          },
          // axisPointer: {
          //   show: true,
          //   lineStyle: {
          //     color: "#3ca4d6",
          //     type: "dashed",
          //   },
          // },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            areaStyle: {
              color: "#B9D6F4",
            },
            lineStyle: {
              color: "#3888fa",
            },
            itemStyle: {
              color: "#3888fa",
            },
          },
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",

            lineStyle: {
              color: "red",
            },
            itemStyle: {
              color: "red",
            },
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#main {
  height: 300px;
}

.bas-flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .basic2,.basic3,.basic4{
  width:25vw;
  height: 300px;
  
}
}
.flex {
  display: flex;
  flex-direction: column;
  background: #eee;
  box-sizing: border-box;
  padding: 20px;
 
  .basic {
    box-sizing: border-box;
    padding: 10px;
  }
  .opt {
    background: #fff;
    margin: 10px 0;
  }
  .opt-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: #eee;
    .opt-flex-child {
      width: 30%;
      height: 300px;
      background: #fff;
    }
  }
}
</style>
