<template>
  <div id="app">
    <div class="header">
      <headerMenu></headerMenu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu"

export default {
  name: "app",
  components: {
    HeaderMenu
  }
};
</script>

<style>
body {
  font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
}
.app {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  border-bottom: 1px solid #b3b3b3;
  width: 100%;
  padding: 30px 50px;
}
.page {
  width: 100%;
  padding: 30px 50px;
}
.help-text {
  margin-top: 20px;
  font-size: 12px;
}
</style>
