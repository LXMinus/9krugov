<template>
  <div id="app" class="wrapper">
    <router-link to="/">
      <h1>9кругов</h1>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

@font-face {
  font-family: "Jost";
  src: local("Jost"), url(./fonts/Jost-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Nunito";
  src: local("Nunito"), url(./fonts/Nunito-Regular.ttf) format("truetype");
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-decoration: none;
}
body{
  margin: 0 !important;
}
.wrapper{
  width: 100%;
  height: 100vh;
  background: #232729;
}
a{
  text-decoration: none;
}
h1{
  color: #D5D5D5;
  font-family: Jost;
  font-weight: 600;
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
