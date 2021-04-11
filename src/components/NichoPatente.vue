<template>
  <div class="padding">
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

      <div class="cards">
        <b-card title="Card title" sub-title="Card subtitle">
          <b-card-text>
            Some quick example text to build on the <em>card title</em> and make
            up the bulk of the card's content.
          </b-card-text>

          <b-card-text>A second paragraph of text in the card.</b-card-text>

          <a href="#" class="card-link">Card link</a>
          <b-link href="#" class="card-link">Another link</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "nichoPatente",
  components: {
  },
  computed: mapGetters(["allItens"]),
  created() {
    this.getItens();
  },

  methods:{
    ...mapActions(["getItens", "deleteIten"]),

    editar() {
      this.$router.push({ name: 'editarIten' });
    },
    detalheIten() {
      this.$router.push({ name: 'DetalheIten' });
    }
  }
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
</style>
