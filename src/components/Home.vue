<template>
  <div class="fullScreen">
    
      <Empresas class="fullScreen" />
    
      <Materias />

      <NichoPatente/>
    
  </div>
</template>

<script>
import Empresas from "./Empresas";
import Materias from "./Materiais";
import NichoPatente from './NichoPatente';


export default {
  name: "Home",
  components: {
    Empresas,
    Materias,
    NichoPatente
  },
};
</script>

<style>
.fundo{
  background-color: cornflowerblue;
}

.fullScreen{
  height: 100%;
  width: 100%;
}
</style>
