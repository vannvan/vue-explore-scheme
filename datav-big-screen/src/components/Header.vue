<template lang="html">
  <div class="m-header">
    <div class="header-item left">
      <dv-border-box-1>
        <dv-decoration-1 style="width:200px;height:50px;" />
        <div class="show-number-box">
          <div class="show-number-item">
            <span>新增学校</span>
            <dv-digital-flop :config="digitalData" style="width:200px;height:50px;" />
          </div>
          <dv-decoration-4 style="width:5px;height:100px;" />
          <div class="show-number-item">
            <span>新增人脸</span>
            <dv-digital-flop :config="digitalData" style="width:200px;height:50px;" />
          </div>
          <dv-decoration-4 style="width:5px;height:100px;" />
          <div class="show-number-item">
            <span>新增设备</span>
            <dv-digital-flop :config="digitalData" style="width:200px;height:50px;" />
          </div>
        </div>
      </dv-border-box-1>
    </div>
    <div class="header-item middle">
      <dv-border-box-4>
        <div class="title-box">
          <h1>XXXX的运营平台</h1>
          <h2>2019年11月28日 星期四</h2>
        </div>

        <dv-decoration-5 style="width:90%;height:40px;position:absolute;bottom:0;left:5%" />
      </dv-border-box-4>
    </div>
    <div class="header-item right">
      <dv-border-box-1>
        <div class="right-chart-box">
          <dv-decoration-9 class="charts-box" style="font-weight:bold">66</dv-decoration-9>
          <dv-decoration-7 class="charts-title" style="width:150px;height:30px;">SettledSchools</dv-decoration-7>

        </div>
      </dv-border-box-1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      digitalData:{
        number: [100],
        content: '{nt}个',
        style: {
          fontSize: 40,
          fill: '#f00'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.m-header{
  display: flex;
  height: 200px;
  .header-item{
    flex: 1;
    &.left{
      .show-number-box{
        width: 100%;
        display: flex;
        height: 100px;
        margin-top: 15px;
        .show-number-item{
          width: 33%;
          span{
            width: 100%;
            display: block;
            font-weight: bold;
            text-align: center;
            line-height: 40px;
          }
        }
      }
    }
    &.middle{
      color: #fff;
      // line-height: 200px;
      text-align: center;
      .title-box{
        height: calc(100% - 60px);
        padding: 55px

      }
    }
    &.right{
      .right-chart-box{
        float: right;
        width: 150px;
        height: 100%;
        .charts-box{
          height: 110px;
          width: 110px;
          margin-top: 25px;
          float: right;
          margin-right: 50px
        }
        .charts-title{
          position: absolute;
          bottom: 25px;
          right: 25px
        }
      }
    }
  }
}
</style>
