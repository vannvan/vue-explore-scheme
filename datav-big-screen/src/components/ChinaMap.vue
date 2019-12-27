<style lang="scss">
#china-map{
  /* padding-top:80px; */
  width: 100%;
  height: calc(100vh - 200px);
  position: relative;
}
.show-box{
  position: absolute;
  /* left:0; */
  bottom: 50px;
  height: 150px;
  width: 20px;
  background: #f6f6f6;
  .progress{
    background: #E3483A;
    vertical-align: bottom;
  }
}
</style>

<template>
  <div>
    <div id="china-map"></div>
    <!-- <div class="show-box">
      <div class="progress" :style="{height:progress}">

      </div>
    </div> -->
  </div>
</template>

<script>
  // 主模块
  let echarts = require('echarts/lib/echarts')
  // 散点图
  require('echarts/lib/chart/scatter')
  // 散点图放大
  require('echarts/lib/chart/effectScatter')
  // 地图
  require('echarts/lib/chart/map')
  // 图例
  require('echarts/lib/component/legend')
  // 提示框
  require('echarts/lib/component/tooltip')
  // 地图geo
  require('echarts/lib/component/geo')
  // 中国地图
  require('echarts/map/js/china')

  export default {
    name: 'index',
    data() {
      return {
        progress:'hahaahhahaah',
      }
    },
    mounted () {
      let chinaMap = echarts.init(document.getElementById('china-map'))
      let showLoadingDefault = {
        text: '加载中...',
        color: '#23531',
        textColor: '#fff',
        // 地图背景色
        // maskColor: '#272D3A',
        zlevel: 0
      }

      chinaMap.showLoading(showLoadingDefault)
      let _this = this
      setTimeout(()=>{
        _this.$store.commit('closeLoading')
        chinaMap.hideLoading()
      },3000)
      // this.$store.commit('openLoading')
      // this.$store.dispatch('fetchHeatChinaRealData', chinaMap)
      // setInterval(() => {
      //   this.$store.dispatch('fetchHeatChinaRealData', chinaMap)
      // }, 1000)
      var hoverColor = ''
      var blurWidth = 1
      // var tipShow = false
      var option = {
          // visualMap: {
          //       min: 0,
          //       max: 1500,
          //       left: 'left',
          //       top: 'bottom',
          //       text: ['高','低'],
          //       inRange: {
          //           color: ['#E3483A', '#EB3C2F']
          //       },
          //       show:true
          // },
          tooltip: {
             trigger: 'item',
             enterable:true,
             formatter: function (params) {
               console.log(params.data)
               if(params.data) {
                 var listHtml = ''
                 params.data.list.map(el=>listHtml+=`<p>${el}</p>`)
                 var tipHtml = `<div style="height:260px;width:200px">
                 <p style="text-align:center;line-height:30px;font-size:16px;font-weight:bold;border-bottom:1px solid #0D5C61">${params.name}省</p>
                 <p style="color:#f00;text-align:center;line-height:30px;font-weight:bold;">已覆盖学校:${params.data.schoolCount}所</p>
                 ${listHtml}
                 </div>`
                 return tipHtml
               }
             }
          },
    	    series : [
    	        {
    	            name: '市场分布',
    	            type: 'map',
    	            mapType: 'china',
    	            //hoverable: false,
    	            roam: false,
    	            itemStyle:{
    		               normal:{
                          label:{show:false},
                          areaColor: '#0D5C61',

                       },
    		               emphasis:{
                          label:{show:false},
                          areaColor: hoverColor,
                       },
    		            },
    	            data:[],
    	        }
    	    ],
    	    animation:true

    	};

      var ini_data=[];//初始化省份数组
  	  var provArr = [
        {name:'浙江',schoolCount:15,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']},
        {name:'江西',schoolCount:22,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']},
        {name:'山东',schoolCount:33,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']},
        {name:'陕西',schoolCount:45,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']},
        {name:'云南',schoolCount:11,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']},
        {name:'江苏',schoolCount:32,list:['XXXX中学1','XXXX中学2','XXXX中学3','XXXX中学4']}
      ];//获取的省份，有可能是从后台获取
  	  //正则省份，将省与市的字眼去掉，框架不识别
      // for(var i=0;i<provArr.length;i++){
      // 	var str = provArr[i].name;
  		//   var re = /省|市/g;  //全局匹配
  		//   var str2 ={name:str.replace(re,''),value:provArr[i].schoolCount,list:provArr[i].list};//拼接对象数组
  		//   ini_data.push(str2);
      // }
      provArr.map((el)=>{
        return Object.assign(el,{itemStyle:{areaColor:"#E3483A",shadowColor: 'rgba(0, 0, 0, 0.5)',shadowBlur: blurWidth}})
      })
      option.series[0].data=provArr;//将拼接好的数组赋给参数集合
      chinaMap.setOption(option);//跟新图表

      var count = 0;
      var timeTicket = null;
      var dataLength = option.series[0].data.length;
      timeTicket && clearInterval(timeTicket);
      timeTicket = setInterval(function() {
          chinaMap.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: (count) % dataLength
          });
          count++;
      }, 5000);
      chinaMap.on('mouseover', function (param){
        if(!provArr.includes(param.name)) {
          console.log('没有',param.name)
          hoverColor = '#0D5C61'
          chinaMap.setOption(option);//跟新图表
        }else{
          hoverColor = '#f00'
          chinaMap.setOption(option);//跟新图表
        }
        clearInterval(timeTicket);
        chinaMap.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: param.dataIndex,
        });
      });
      chinaMap.on('mouseout', function(params) {
          timeTicket && clearInterval(timeTicket);
          timeTicket = setInterval(function() {
              chinaMap.dispatchAction({
                  type: 'showTip',
                  seriesIndex: 0,
                  dataIndex: (count) % dataLength
              });
              count++;
          }, 5000);
      });


    }
  }
</script>
