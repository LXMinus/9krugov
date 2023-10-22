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
  font-family: Nunito, sans-serif;
  color: #FFFFFF;
  text-decoration: none;
}
*{
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

ul,
ol,
li {
  list-style: none;
}

img {
  list-style: none;
}

input {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 0;
  border: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

body{
  margin: 0 !important;
}
.wrapper{
  width: 100%;
  height: 100vh;
  background: #151719;
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
  padding: 10px 0 0 0;

}
h1:hover{
  color: #FFFFFF;
  cursor: pointer;
}
</style>
