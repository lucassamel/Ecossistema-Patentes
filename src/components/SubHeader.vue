<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      style="background-color: #3033D9"
      class="mx-auto"
    >
      <b-navbar-nav class="mx-auto">
        <b-nav-form>
          <b-button pill variant="primary" size="lg" class="mr-3" @click="video"
            >Vídeo Institucional</b-button
          >
          <b-button pill variant="primary" size="lg" @click="sobre"
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
          this.$router.push({name:"login"})
      },
      sobre(){
          this.$router.push({name:"sobre"})
      }
  },
};
</script>

<style>
.botao{
    padding-right: 20px;
}
</style>
