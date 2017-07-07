<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="menu">
          <router-link class="home" to="/home">首页</router-link>
         <a class="ppp">知乎日报</a>
          <router-link class="search" to="/search">主题日报</router-link>
      </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  *{
    margin:0;
    padding:0;
  }
  li{
    list-style:none;
  }
  a{
    text-decoration:none;
  }
  .menu{
    width:100%;
    height:3.125rem;
    background:#20A0FF;
    color:#fff;
    text-align:center;
   
    position:relative;
    top:0;
  }

 .menu .home{
    float:left;
    display:inline-block;
    margin-left:1.25rem;
    margin-top:1.0rem;
    color:#fff;
 }
  .menu .ppp{
  
    
    float:left;
    margin-top:1.0rem;
    margin-left:5.5rem;
  }
  .search{
    color:#fff;
    float:left;
    margin-top:1.0rem;
    margin-left:4.5rem;
  }
</style>
