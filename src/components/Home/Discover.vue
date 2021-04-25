<template>
  <div class="bg-light py-3">
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <h3 class="text-left">Descubra</h3>
        </div>
      </div>
      <div class="row no-gutters" style="height: 395px">
        <div class="col-12 col-md-3">
          <div class="discover-card b-radius-left">
            <img
              :src="require('../../assets/images/planos-profissionais.jpeg')"
            />
            <div class="p-3">
              <p>Conheça nossos</p>
              <h4>Planos Profissionais</h4>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="h-100 d-flex flex-column">
            <div class="discover-card">
              <img
                :src="require('../../assets/images/casas-e-apartamentos.png')"
              />
              <div class="p-3">
                <p>Quer alugar ou vender?</p>
                <h4>Casas e apartamentos</h4>
              </div>
            </div>
            <div class="discover-card">
              <img :src="require('../../assets/images/celulares.png')" />
              <div class="p-3">
                <p>Desapega do seu usado</p>
                <h4>Venda seu celular</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="h-100 d-flex flex-column">
            <div class="discover-card">
              <img :src="require('../../assets/images/videogames.png')" />
              <div class="p-3">
                <p>Eletrônicos e celulares</p>
                <h4>Videogames</h4>
              </div>
            </div>
            <div class="discover-card">
              <img :src="require('../../assets/images/autos-e-pecas.png')" />
              <div class="p-3">
                <p>Autos e peças</p>
                <h4>Troque de carro</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="h-100 d-flex flex-column">
            <div class="discover-card b-radius-top-right">
              <img :src="require('../../assets/images/financiamentos.png')" />
              <div class="p-3">
                <p>Financiamento</p>
                <h4>Veja as oportunidades!</h4>
              </div>
            </div>
            <div class="discover-card b-radius-bottom-right">
              <img :src="require('../../assets/images/olx-pay.png')" />
              <div class="p-3">
                <p>OLX Pay</p>
                <h4>Um novo jeito de vender</h4>
              </div>
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

<style>
.discover-card {
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
}
.discover-card img {
  filter: brightness(0.5);
  height: 115%;
  width: 115%;
  position: absolute;
  top: -3px;
  left: -3px;
  transition: 0.3s;
}
.discover-card:hover > img {
  transform: scale(1.2);
}
.discover-card p,
.discover-card h4 {
  margin-bottom: 0;
  text-align: left;
  backdrop-filter: grayscale(0);
}
.b-radius-left {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.b-radius-top-right {
  border-top-right-radius: 6px;
}
.b-radius-bottom-right {
  border-bottom-right-radius: 6px;
}
</style>
