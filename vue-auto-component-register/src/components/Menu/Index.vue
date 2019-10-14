<template lang="html">
  <div class="content">
    <div class="menu-box">
      <button @click="loadPage('ShopIndex')">shop</button>
      <button @click="loadPage('OrderBase')">order</button>
    </div>
    <div class="main">
      <router-view :key="key"/>
    </div>
  </div>

</template>

<script>
export default {
  name:'Menu',
  data() {
  return {
    loading: false,
    error: null,
    post: null
  }
  },
  watch: {
    '$route': {        // 使用watch来监控是否是同一个路由
      handler: 'resetData',
      immediate: true
    }
  },
  computed: {
    key() {
       return this.$route.path + Math.random();
    }
  },
  methods: {
    resetData() {
      this.loading = false
      this.error = null
      this.post = null
      this.getPost(this.$route.params.id)
      console.log(this.key);
    },
    getPost(id){ }
  }
}
</script>

<style lang="scss">
.menu-box{
  height: 80px;
  width: 100%;
  background: #ccc
}
.main{
  height: calc(100vh - 90px);
  width: 100%;
  margin-top: 20px;
  background: #f6f6f6
}
</style>
