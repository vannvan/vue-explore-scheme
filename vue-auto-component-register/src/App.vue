<template>
  <div id="app">
    <Menu></Menu>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.main{
  height: calc(100vh - 90px);
  width: 100%;
  margin-top: 10px;
  background: #f6f6f6
}
</style>
