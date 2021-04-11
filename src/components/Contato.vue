<template>
  <div class="tamanho2">
    <h2 >Video</h2>
    <div class="tela">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
        allowfullscreen
        class="video"
      ></b-embed>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tamanho2 {
  width: 100%;
  min-height: 56vh;
}

.tela{
  width: 100%;
}

.video{
  width: 50%;
  align-items: center;
  padding: 20px;
}
</style>
