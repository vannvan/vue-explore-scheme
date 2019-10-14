<template>
   <div class="order-content">
     <div class="left">
       <li v-for="(item, index) in nav" :key="index" @click="loadPage(item.path)">{{item.name}}</li>
     </div>
     <div class="right">
       <router-view></router-view>
     </div>
   </div>
</template>
<script type="text/javascript">
  export default{
    data() {
      return {
        nav:[
          {name:'基础信息',path:'OrderBase'},
          {name:'详情',path:"OrderDetails"},
          {name:'基础信息',path:'OrderBase'},
          {name:'详情',path:"OrderDetails"},
          {name:'基础信息',path:'OrderBase'},
          {name:'详情',path:"OrderDetails"}
        ]
      }
    }
  }
</script>
<style lang="scss">
.order-content{
  display: flex;
  width: 100%;
  justify-content: space-between;
  .left{
    width: 20%;
    height: calc(100vh - 100px);
    background-color: #666;
    li{
      list-style: none;
      width: 100%;
      text-align: center;
      line-height: 45px;
      background: #ccc;
      border:1px solid #fff;
      cursor: pointer;
    }
  }
  .right{
    width: 78%;
    background: #ccc
  }
}

</style>
