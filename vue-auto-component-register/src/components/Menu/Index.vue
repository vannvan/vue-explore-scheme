<template lang="html">
  <div class="menu-box">
    <button @click="loadPage('shop')">shop</button>
  </div>
</template>

<script>
export default {
  name:'Menu'
}
</script>

<style lang="scss">
.menu-box{
  height: 80px;
  width: 100%;
  background: #ccc
}
</style>
