<template lang="html">
  <div class="decoration-down">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.decoration-down{
  display: flex;
  position: absolute;
  bottom: 0;
  left:66%;
  width:2px;
  height:2px;
  background:#3f96a5;
  animation:decorationDown 5s;
  -webkit-animation:decorationDown 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  transition: ease
}
@-webkit-keyframes decorationDown /* Safari and Chrome */
{
0% {  }

100% {height:150px;}
}
</style>
