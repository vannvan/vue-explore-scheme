<template lang="html">
    <dv-full-screen-container>
      <!-- <dv-loading>Loading...</dv-loading> -->
      <!-- <div class="header" style="width:100%;height:80px;background:#f6f6f6">

      </div> -->
      <!-- 特效线条 -->
      <!-- <dv-decoration-10 style="width:100%;height:5px;" /> -->
      <div class="m-main">
        <div class="main-item left">
          <LeftItem></LeftItem>
        </div>
        <div class="main-item middle">
            <dv-border-box-7 class="middle-count-box">
              <div class="show-number-box">
                <div class="show-number-item">
                  <span>新增学校</span>
                  <dv-digital-flop :config="digitalData" style="width:100%;height:50px;" />
                </div>
                <dv-decoration-4 style="width:5px;height:100px;" />
                <div class="show-number-item">
                  <span>新增人脸</span>
                  <dv-digital-flop :config="digitalData" style="width:100%;height:50px;" />
                </div>
                <dv-decoration-4 style="width:5px;height:100px;" />
                <div class="show-number-item">
                  <span>新增设备</span>
                  <dv-digital-flop :config="digitalData" style="width:100%;height:50px;" />
                </div>
              </div>
            </dv-border-box-7>
          <MiddleItem></MiddleItem>
        </div>
        <div class="main-item right">
          <RightItem></RightItem>
        </div>
      </div>
    </dv-full-screen-container>
</template>

<script>
import LeftItem from './LeftItem'
import MiddleItem from './MiddleItem'
import RightItem from './RightItem'
export default {
  components: {
    LeftItem,
    MiddleItem,
    RightItem
  },
  data() {
    return {
      digitalData:{
        number: [100],
        content: '{nt}个',
        style: {
          fontSize: 40,
          fill: '#f00'
        }
      },
      scrollConfig:{
        header: ['列1', '列2', '列3'],
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ],
        index: true,
        columnWidth: [50],
        align: ['center']
      },

    }
  },
  mounted() {
    //do something after mounting vue instance
    let _this = this
    setTimeout(()=>{
      _this.digitalData = {
        number: [1000],
        content: '{nt}个'
      }
    },3000)
    // console.log(this.digitalData);
    // console.log(fnScrollList);
    // this.$nextTick(()=>{
    //   var list = new fnScrollList('scroll-box-left','div',1,2000);
    //
    // })

  }
}
</script>

<style lang="scss">
#dv-full-screen-container{
  background: url(../assets/images/bg1.png);
  background-size: cover;
  color: #fff;
  .m-main{
    width: 100%;
    display: flex;
    .left,.right{
      width: 20%;
    }
    .middle{
      width: 60%;
      height: 100vh;
      .middle-count-box{
        width:60%;
        height:140px;
        margin:20px auto 0 auto;
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
    }
  }
}
</style>
