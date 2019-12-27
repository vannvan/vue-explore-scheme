<template lang="html">
  <div>
    <dv-border-box-7 class="atten-ranking">
      <h3>全校出勤率排行</h3>
      <div style="width:90%;margin:10px auto;padding-bottom:15px">
        <dv-scroll-ranking-board :config="scrollRanking" style="width:100%;height:200px;margin-bottom:15px" />
      </div>
    </dv-border-box-7>
    <dv-border-box-7 class="face-photo-ranking">
      <h3>录入人脸照片排行</h3>
      <div style="width:90%;margin:10px auto;padding-bottom:15px">
        <dv-scroll-ranking-board :config="scrollRanking" style="width:100%;height:200px;margin-bottom:15px" />
      </div>
    </dv-border-box-7>
    <dv-border-box-7 class="atten-status-charts">
      <h3>学校考勤状态</h3>
      <div style="width:100%;height:200px;overflow:hidden">
        <div id="scroll-box-left">
          <div style="width:90%;display:flex;height:200px">
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:180px;height:200px" />
            </div>
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:180px;height:200px" />
            </div>
          </div>
          <div style="width:100%;display:flex;height:200px">
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:180px;height:200px" />
            </div>
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:180px;height:200px" />
            </div>
          </div>
        </div>
      </div>
    </dv-border-box-7>
    <dv-border-box-7 class="today-msg-data">
      <h3>全国今日消息推送总量</h3>
      <div style="display:table;width:100%">
        <div class="card-box" style="width:50%;display:table-cell">
          <p>教师消息</p>
          <p :style="{color:RandomColor()}"><b>2121210</b>条</p>
          <p>同比增长2.3%</p>
        </div>
        <div class="card-box" style="width:50%;display:table-cell">
          <p>家长消息</p>
          <p :style="{color:RandomColor()}"><b>1254</b>条</p>
          <p>同比增长2.3%</p>
        </div>
      </div>
    </dv-border-box-7>
  </div>
</template>

<script>
import fnScrollList from '@/utils/scrollUp'
export default {
  data() {
    return {
      option:{
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 78
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          }
        ],
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '单位'
      },
      scrollRanking:{
        data: [
         {
           name: '周口',
           value: 55
         },
         {
           name: '南阳',
           value: 120
         },
         {
           name: '西峡',
           value: 78
         },
         {
           name: '驻马店',
           value: 66
         },
         {
           name: '新乡',
           value: 80
         },
         {
           name: '信阳',
           value: 45
         },
         {
           name: '漯河',
           value: 29
         }
       ],
       oddRowBGC:"#f00",
      },
    }
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
  mounted() {
    //do something after mounting vue instance
    setTimeout(()=>{
        var list = new fnScrollList('scroll-box-left','div',1,3000);
    },500)
  }
}
</script>

<style lang="scss" scoped>
.atten-ranking,.face-photo-ranking{
  width: calc(100% - 20px);
  margin-top: 10px;
  h3{
    line-height: 50px;
    padding-left: 5%;
    position: relative;
  }
}

.atten-status-charts{
  width: calc(100% - 20px);
  height: 250px;
  // overflow:hidden;
  margin-top: 10px;
  h3{
    line-height: 50px;
    padding-left: 5%;
    position: relative;
  }
  #scroll-box-left{
    height: 180px;
    // background: #f00;
  }
}
.today-msg-data{
    width: calc(100% - 20px);
    // overflow:hidden;
    margin-top: 10px;
    h3{
      line-height: 50px;
      padding-left: 5%;
      position: relative;
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
