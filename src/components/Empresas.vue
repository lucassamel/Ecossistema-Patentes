<template>
  <div class="tamanho">
    <div class="container">
      <b-row class="cartao">
        <div class="col-sm">
          <b-card class="bordas">
            <b-card-title class="titulo">
              O que são Patentes?
            </b-card-title>
            <b-card-text class="text">
              Uma patente é um direito exclusivo, outorgado pelo Estado que se
              obtém sobre invenções. A invenção é uma solução técnica voltado
              para a resolução de um problema técnico em específico. Para ser
              patenteável, a invenção previsa ser novidade, inventivo e ter
              aplicação industrial A patente está prevista no artigo 6o. e ss.
              da Lei 9.279/96
            </b-card-text>
          </b-card>
        </div>
        <div class="col-sm">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="https://www.youtube.com/embed/V_J3QFtHXo0"
            allowfullscreen
          ></b-embed>
        </div>
      </b-row>

      <div>
        <!-- <h2 class="titulo">teste</h2> -->
        <p class="text">
          Você pode apesentar um pedido de patente para invenções que ainda não
          são de conhecimento do público. Sabemos que o pedido de patente é um
          processo cheio de detalhes. Por este motivo, aqui você encontrará todo
          o material necessário para te orientar no processo pedido de patente.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text{
  font-size: larger;
  font-weight: 500;
}
.titulo {
  text-align: center;
  font-size: xx-large;
}
.tamanho {
  width: 100%;
  min-height: 56vh;
}

.cartao {
  padding: 20px;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.bordas {
  border-color: white;
}
</style>
