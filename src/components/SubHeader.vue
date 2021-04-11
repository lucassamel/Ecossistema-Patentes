<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      style="background-color: #4285f4"
      class="mx-auto"
    >
      <b-navbar-nav class="mx-auto">
        <b-nav-form>
          <b-button pill variant="primary" size="lg" @click="patentes" style="background-color: #4285f4" class="mr-3"
            >Buscar Patentes</b-button
          >
          <b-button pill variant="primary" size="lg" class="mr-3" @click="video"  style="background-color: #4285f4" 
            >Vídeo Institucional</b-button
          >
          <b-button pill variant="primary" size="lg" @click="sobre" style="background-color: #4285f4" 
            >Tenho interesse em saber mais</b-button
          >          
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
      video(){
          this.$router.push({name:"contato"})
      },
      sobre(){
          this.$router.push({name:"sobre"})
      },
      patentes(){
          this.$router.push({name:"nichoPatente"})
      }
  },
};
</script>

<style>
.botao{
    background-color:#4285f4;
    border: 0px;
}
</style>
