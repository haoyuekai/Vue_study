<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
}
*{
	margin: 0;
	padding: 0;
}
ul,li{
	list-style: none;
}
img{
	display: block;
}
a{
	text-decoration: none;
}
html,body{
	height: 100%;
}
/*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
    width: 0px;
    height: 0px;
    background-color: #f5f5f5;
}
/*定义滚动条的轨道，内阴影及圆角*/
::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,.3);
    border-radius: 10px;
    background-color: #f5f5f5;
}
/*定义滑块，内阴影及圆角*/
::-webkit-scrollbar-thumb{
    width: 0px;
    height: 20px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 0px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
