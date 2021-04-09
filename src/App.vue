<template>
  <div id="app">
    
    <Header/>
    

    <b-container fluid>
      <router-view />
    </b-container>
    
  </div>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>

</style>
