<template lang="html">
  <div>
    <dv-border-box-8 class="atten-ranking">
      <h3>全校出勤率排行</h3>
      <dv-scroll-ranking-board :config="scrollRanking" style="width:100%;height:200px;" />
    </dv-border-box-8>
    <dv-border-box-8 class="face-photo-ranking">
      <h3>录入人脸照片排行</h3>
      <dv-scroll-ranking-board :config="scrollRanking" style="width:100%;height:200px;" />
    </dv-border-box-8>

      <dv-border-box-2 class="atten-status-charts">
        <div id="scroll-box-left">
          <div style="width:100%;display:flex;height:200px">
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:200px;height:200px" />
            </div>
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:200px;height:200px" />
            </div>
          </div>
          <div style="width:100%;display:flex;height:200px">
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:200px;height:200px" />
            </div>
            <div class="charts-item">
              <dv-active-ring-chart :config="option" style="width:200px;height:200px" />
            </div>
          </div>
        </div>
      </dv-border-box-2>
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
       ]
      },
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
  padding: 10px;
  width: calc(100% - 20px);
  margin-top: 10px;
  h3{
    border-bottom: #fff solid 2px;
    margin-bottom: 5px;
  }
}
.atten-ranking{
  
}
.atten-status-charts{
  width:100%;
  height:200px;
  overflow:hidden;
  margin-top: 10px;
}
</style>
