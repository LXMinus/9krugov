<template>
  <div id="app" class="wrapper">
    <h1>9кругов</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
body{
  margin: 0 !important;
}
.wrapper{
  width: 100%;
  height: 100vh;
  background: #232729;
}
h1{
  color: #D5D5D5;
  font-size: 50px;
  text-align: center;
  margin: 0;
  padding: 30px 0 0 0;
}
h1:hover{
  color: #FFFFFF;
  cursor: pointer;
}
</style>
