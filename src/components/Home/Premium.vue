<template>
  <div class="bg-light py-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 text-center text-md-left">
          <h3>Galeria Premium</h3>
        </div>
        <div class="col-12 col-md-6 text-center text-md-right">
          <p>
            Quer vender mais rápido? <a href="#">Quer vender mais rápido?</a>
          </p>
        </div>
      </div>
      <div class="row mt-3 flex-nowrap d-flex overflow-x-scroll max-height-250">
        <div v-for="(ad, key) in premiumAds" :key="key" class="mr-5">
          <AdCard :image="ad.image" :name="ad.name" :price="ad.price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdCard from "../AdCard.vue";
export default {
  components: { AdCard },
  data() {
    return {
      premiumAds: [
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
        {
          image: "",
          name: "iMac 5k 27 Polegadas Com 24gb De Ram - Perfeito Estado",
          price: 10.599,
        },
      ],
    };
  },
};
</script>

<style>
.overflow-x-scroll {
  overflow-x: scroll;
}
.max-height-250 {
  max-height: 250px;
}
</style>
