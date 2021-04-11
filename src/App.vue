<template>
  <div id="app">
    <Header />

    
      <b-row no-gutters>
        <router-view />
      </b-row>
    
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
.tela {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
