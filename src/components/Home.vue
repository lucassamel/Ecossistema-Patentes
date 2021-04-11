<template>
  <div class="fullScreen">
    
      <Empresas class="fullScreen" />
    
      <Materias />
    
  </div>
</template>

<script>
import Empresas from "./Empresas";
import Materias from "./Materiais";



export default {
  name: "Home",
  components: {
    Empresas,
    Materias,
  },
};
</script>

<style>
.fundo{
  background-color:#4285f4;
}

.fullScreen{
  height: 100%;
  width: 100%;
}
</style>
