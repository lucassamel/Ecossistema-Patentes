<template>
  <div class="tela">
    <div class="tamanho">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Search</b-button
                >
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <div class="cards" >
        <b-card
          v-for="i in patentes"
          :key="i.id"
          :title="i.titulo"
          sub-title="Card subtitle"
          :id="i.id"
        >
          <b-card-text>
            <em>{{ i.titulo }}</em>
          </b-card-text>

          <b-card-text>Teste</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api.js'


export default {
  name: "nichoPatente",

  data(){
    return{
      patentes:[]
    }
  },
  mounted(){
    api.get('').then(response=> {
      this.patentes = response.data;
    })
  },

  // mounted(){
  //   axios.get('https://localhost:44323/api/patentes')
  //   .then((response)=>
  //     this.patentes=response.data.data
  //   ).catch(error => console.log(error))
  //   },

  components: {},
  methods: {

    editar() {
      this.$router.push({ name: "editarIten" });
    },
    detalheIten() {
      this.$router.push({ name: "DetalheIten" });
    },
  },
};
</script>

<style>
.cards {
  padding: 15px;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
}

.tamanho {
  width: 80%;
}

.tela {
  display: flex;
  justify-content: center;
}
</style>
