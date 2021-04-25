<template>
  <div class="about bg-light">
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <h3 class="text-start">Sobre a OLX</h3>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-6">
          <div
            class="about-card d-flex justify-content-start align-items-center position-relative px-4"
            :style="
              `background-image: url(${require('../../assets/images/bg-negocios.png')})`
            "
          >
            <div>
              <h5>É cliente profissional e quer melhorar suas vendas?</h5>
              <p>
                Visite a nossa página de negócios e tenha acesso a conteúdos
                especiais!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="about-card d-flex justify-content-start align-items-center position-relative px-4"
            :style="
              `background-image: url(${require('../../assets/images/bg-imoveis.jpg')})`
            "
          >
            <div>
              <h5>
                Imóveis de todo tipo, para todo mundo
              </h5>
              <p>
                Na OLX Imóveis tem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-card {
  height: 186px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  color: #fff;
}
.about-card div {
  max-width: 300px;
  text-align: left;
}
</style>
