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
          <b-button pill variant="primary" size="lg" @click="patentes" style="background-color: #4285f4" class="mr-3 border-light"
            >Buscar Patentes</b-button
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
      patentes(){
          this.$router.push({name:"nichoPatente"})
      }
  },
};
</script>

<style>
.botao{
    background-color:#4285f4;
    border: 10px;
    border-color: aliceblue;
}
</style>
