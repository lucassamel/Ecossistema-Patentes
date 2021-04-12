<template>
  <div id="app" class="app">
    <Header />

    
      <b-row no-gutters>
        <router-view />
      </b-row>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
.tela {
  padding-right: 0px;
  padding-left: 0px;
}
.app{
  font-family: Merriweat'Raleway',sans-serif;
}
</style>
