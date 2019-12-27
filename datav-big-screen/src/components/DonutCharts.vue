<template lang="html">
  <div class="chart-box">
    <p style="text-align:center;line-height:30px">XXXX实验学校</p>
    <canvas :id="[prefixCls + index]"  width="200" height="200"></canvas>
  </div>
</template>

<script>
import DonutChart from '@/utils/donut-charts'

export default {
  props:["index",'title'],
  data() {
    return {
      prefixCls:'DonutChart',
      donutChart:''
    }
  },
  mounted() {
    //do something after mounting vue instance

  },
  methods: {
    drawDonutCharts(optionData) {
      console.log('绘制')
      this.donutChart = new DonutChart(this.prefixCls+this.index, optionData)

      this.donutChart.init(function (result) {
          console.log(result)
      })
    }
  }

}
</script>

<style lang="scss">
.chart-box{
  width: 50%;
  height: 200px;
}
</style>
