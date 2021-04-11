<template>
  <div class="fundo">
    <h2 class="faq">Perguntas frequentes</h2>
    <b-row class="cartao">
      <div class="cartao">
        <b-card title="Posso patentear uma ideia?" class="tela">
          <b-card-text>
            Não, pois a Lei de Propriedade Industrial (Lei 9.279/96), exclui da
            proteção como invenção,.um extenso rol de possibilidades (artigo
            10o.), tais como descobertas, teorias científicas, atividades
            intelectual. Em alguns casos, pode ser aplicado a Lei de Direitos
            Autorais (Lei 9.610/98)
          </b-card-text>
        </b-card>
      </div>

      <div class="cartao">
        <b-card
          title="Uma Patente regsitrada no Brasil, tem eficácia no exterior?"
          class="tela"
        >
          <b-card-text>
            Inicialmente, cabe salientar que a patente é territorial, não
            existindo patentes mundiais. Assim, caso o inventor faça o depósito
            o Brasil, a patente terá efeito somente no território brasileiro.
            Caso o inventor necessite ou deseje proteção internacional, será
            necessário efetuar novo pedido de patente no(s) país(es) que
            desejar, apresentado a documentação necessária em cada escritório.
          </b-card-text>
        </b-card>
      </div>

      <div class="cartao">
        <b-card
          title="Quais as vantagens de proteger minha patente?"
          class="tela"
        >
          <b-card-text>
            Muitas são as vantages de uma patente. O inventor terá sua invenção
            protegida por um prazo de 20 anos. Protege sua idéia de potenciais
            infrações, assim como pode transmitir o seu direito ou conceder
            licenças de explorações a terceiros, por exemplo.
          </b-card-text>
        </b-card>
      </div>
    </b-row>
    <div class="cartao"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tela {
  width: 100%;
}
.cartao {
  align-items: center;
  width: 100%;
}

.fundo {
  background-color:#4285f4;
  min-height: 86vh;
}

.faq {
  text-align: center;
  padding: 10px;
  color: aliceblue;
}
</style>
