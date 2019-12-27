<template lang="html">
  <div>
    <!-- <div class="newly-box">
      <div class="newly-item">
        <h3 style="color:#FF5D00">新增学校</h3>
        <p>12所</p>
      </div>
      <dv-decoration-2 :reverse="true" style="width:5px;height:150px;" />
      <div class="newly-item">
        <h3 style="color:#00FEF2">新增设备</h3>
        <p>120台</p>
      </div>
      <decorationDown></decorationDown>
      <div class="newly-item">
        <h3 style="color:#0087DF">新增人脸</h3>
        <p>1230张</p>
      </div>
    </div> -->
    <dv-border-box-6 class="warning-info">
      <dv-capsule-chart :config="warningInfo" style="width:100%;height:200px" />
    </dv-border-box-6>
    <dv-border-box-6 class="warning-info">
      <div style="display:flex;height:auto;flex-wrap: wrap">
          <DonutCharts
            v-for="(item, index) in 6" :key="index"
            :index="index"
            title="XXXX实验学校"
            ref="setChartData"
            ></DonutCharts>
      </div>
      <!-- <div style="display:flex">
        <div style="width:50%;">
          <p style="text-align:center">XXXX实验学校</p>
          <canvas id="pie_4" width="200" height="200"></canvas>
        </div>
        <div style="width:50%">
          <p style="text-align:center">XXXX实验学校</p>
          <canvas id="pie_5" width="200" height="200"></canvas>
        </div>
      </div> -->
    </dv-border-box-6>
    <dv-border-box-6 class="right-today-data">
      <h3>全国XXXX今日总量</h3>
      <div style="display:table;width:100%">
        <div class="card-box" style="width:50%;display:table-cell">
          <p>刷脸总量</p>
          <p :style="{color:RandomColor()}"><b>2121210</b>张</p>
          <p>同比增长2.3%</p>
        </div>
        <div class="card-box" style="width:50%;display:table-cell">
          <p>在线设备</p>
          <p :style="{color:RandomColor()}"><b>1254</b>台</p>
          <p>同比增长2.3%</p>
        </div>
      </div>
    </dv-border-box-6>

  </div>
</template>
<script>
import DonutChart from '@/utils/donut-charts'
import decorationDown from './decorationDown'
import DonutCharts from './DonutCharts'
export default {
  components: {
    decorationDown,
    DonutCharts
  },
  data(){
    return {
      warningInfo:{
        data: [
          {
            name: '设备健康度',
            value: 75
          },
          {
            name: '预警1',
            value: 60
          },
          {
            name: '预警2',
            value: 65
          },
          {
            name: '预警3',
            value: 45
          }
        ],
        colors: ['#119BF0', '#E0395F', '#0087DF', '#32c5e9'],
        unit: '百分比'
      },
    }

  },
  mounted() {
    //do something after mounting vue instance
    var option2 = {
            type: 'pie', // pie 环形图|| gauge 计量图
            title: {
                show: true,
                text: '总设备(台)',
                textStyle: {
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: '#9f9f9f'
                },
                subtext: '360',
                subtextStyle: {
                    fontSize: "30px",
                    lineHeight: "35px",
                    color: '#e53344'
                },
                x: '50%',
                y: "50%",
            },
            tooltip:{
              show:false
            },
            x: "50%",
            y: "50%",
            radius: "30%",
            lineWidth: "10%",
            data: [{
                name: "正常(台)",
                value: 110,
            }, {
                name: "异常(台)",
                value: 120,
            }],
            label: {
                show: true,
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 'bold',
                fontSize: "14px",
                lineHeight: "20px",
                fontFamily: 'Arial',
                zIndex:10000,
                color: '#9f9f9f',
                formatter: function (param) {
                    var str = "{c|" + param.percent + "}" + '\n' + "{b|" + param.value +
                        "台}"
                    return str
                },
                rich: {
                    a: {
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 'bold',
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontFamily: 'Arial',

                    },
                    b: {
                        fontStyle: "normal",
                        fontVariant: "normal",
                        fontWeight: 'bold',
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontFamily: 'Arial',
                        color: '#e53344',
                    },
                }
            },
            capType: "round",
            selectedStyle: {
                color: "white",
                borderWidth: 3
            },
            color: ["#32a676", "#e83227"],
            labelCoverTitle: true,
            backgroundArc: '#999'
        }
        this.sendOption(option2)
        // var cir2 = new DonutChart('pie_2', option2)
        // cir2.init(function (result) {
        //     console.log(result)
        // })
        //
        // var cir4 = new DonutChart('pie_4', option2)
        // cir4.init(function (result) {
        //     console.log(result)
        // })
        //
        // var cir5 = new DonutChart('pie_5', option2)
        // cir5.init(function (result) {
        //     console.log(result)
        // })
        //
        //
        // var cir3 = new DonutChart('pie_3', option2)
        //
        // cir3.init(function (result) {
        //     console.log(result)
        // })
  },
  computed: {
    RandomColor() {
      return function(){
        let r, g, b;
        r = Math.floor(Math.random() * 256);
        g = Math.floor(Math.random() * 256);
        b = Math.floor(Math.random() * 256);
        return "rgb(" +r + ',' +g+ ',' +b+ ")";
      }
    }
  },
  methods: {
    sendOption(option) {
      let _this = this
      this.$nextTick(()=>{
        for(let i=0;i<this.$refs.setChartData.length;i++) {
          _this.$refs.setChartData[i].drawDonutCharts(option)
        }
      })
    }
  }
}
</script>

<style lang="scss">
.newly-box{
  width: calc(100% - 15px);
  height: 150px;
  margin:5px;
  border:5px solid #3f96a5;
  border-top:#f00 5px solid;
  border-bottom: #f00 5px solid;
  // background: #ccc;
  display: flex;
  position: relative;
  .newly-item{
    flex: 1;
    width: 33%;
    h3{
      text-align: center;
      margin-top: 35px
    }
    p{
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      margin-top:35px
    }
  }
}
.warning-info{
  width: calc(100% - 20px);
  margin-top: 10px;
  padding: 10px;
  // background: #f6f6f6
}
.right-today-data{
  width: calc(100% - 20px);
  margin-top: 10px;
  padding: 10px;
  h3{
    line-height: 45px;
    padding-left: 5%;
  }
  .card-box{
    text-align: center;
    p:first-child{
      line-height: 40px;
      color: #3f96a5
    }
    p:nth-child(2){
      // font-size: 18px;
      line-height: 60px;
      b{
        font-size: 22px;
        font-weight: bold;
      }
    }
    p:last-child{
      font-size:10px;
      margin-bottom: 20px;
    }
  }
}
</style>
