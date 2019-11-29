<template lang="html">
  <div>
    <div class="newly-box">
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
    </div>
    <dv-border-box-6 class="warning-info">
      <dv-capsule-chart :config="warningInfo" style="width:100%;height:200px" />
    </dv-border-box-6>
  </div>
</template>

<script>
import decorationDown from './decorationDown'
export default {
  components: {
    decorationDown
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
        colors: ['#FF5D00', '#00FEF2', '#0087DF', '#32c5e9'],
        unit: '百分比'
      },
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
</style>
