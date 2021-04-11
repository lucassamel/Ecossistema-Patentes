<template>
  <div class="tela">
    <div class="tamanho">
      <div class="menu">
        <b-navbar toggleable="lg" type="dark" style="background-color:  #000000">
          <b-collapse id="nav-collapse" is-nav>
            

            <b-button-group >
              <b-dropdown right text="Categorias" variant="dark">
                <b-dropdown-item>Agropecuária</b-dropdown-item>
                <b-dropdown-item>Saúde</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Informção e Comunicação</b-dropdown-item>
                <b-dropdown-item>Serviços de utilidade pública</b-dropdown-item>
                <b-dropdown-item>Instituições financeiras</b-dropdown-item>
                <b-dropdown-item>Indústria extrativa mineral</b-dropdown-item>
                <b-dropdown-item>Transporte</b-dropdown-item>
                <b-dropdown-item>Construção</b-dropdown-item>
                <b-dropdown-item>Atividade imobiliária</b-dropdown-item>
              </b-dropdown>
              
            </b-button-group>

            <b-navbar-nav>
              <b-nav-item href="#" >Favoritos</b-nav-item>
            </b-navbar-nav>

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

      <div class="cards">
        <b-card v-for="i in patentes" :key="i.id" :id="i.id" class="patent">
          <a href="#" class="estrela">
            <b-icon
              icon="star"
              variant="warning"
              v-if="i.favorito == false"
            ></b-icon>
            <b-icon
              icon="star-fill"
              variant="warning"
              v-if="i.favorito == true"
            ></b-icon>
          </a>
          <b-card-title>{{ i.titulo }}</b-card-title>
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
import api from "@/services/api.js";

export default {
  name: "nichoPatente",

  data() {
    return {
      patentes: [],
    };
  },
  mounted() {
    api.get("").then((response) => {
      this.patentes = response.data;
    });
  },
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
.menu{
  padding-top: 20px;
}
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

.patent {
  margin-bottom: 10px;
}

.estrela {
  float: right;
}
</style>
