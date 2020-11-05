<template>
  <div id="app">
    <header>
      <div class="wrapper">
        <div class="row">
          <div class="col text-center">
            <router-link to="/character">
              <img src="./assets/sw_logo.png" alt="logo">
           </router-link>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="m-auto">
      <h3 class="m-auto">SWAPI</h3>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
  name: 'App',
  components: {}
}
</script>
<style>
body {
  background-color: #414141;
}

header {
  background-image: url("https://wallpapercave.com/wp/tlxFHZF.jpg");
  width: 100%;
  z-index: 3;
  padding: 8px 0;
  background-size: cover;
  position: fixed;
  /* top: 0;
   left: 0;*/
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
  border-bottom: 1px #2c3e50;
}

footer {
  background-color: #000;
  color: #fff;
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img {
  height: 45px;
}

.about {
  /*background: #386596;*/
  width: 550px;
  text-align: center;
}
</style>
