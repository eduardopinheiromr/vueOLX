<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12">
        <h3 class="text-start">Anúncios recentes</h3>
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-2"
        v-for="(product, key) in products"
        :key="key"
      >
        <AdCard
          :image="product.image"
          :name="product.name"
          :price="product.price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AdCard from "../AdCard";
export default {
  components: {
    AdCard,
  },
  data() {
    return {
      products: [
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
        {
          image: "",
          name:
            "Protetor de motor bmw 700 scam com pedaleira protege motor e carenagem",
          price: 699,
        },
      ],
    };
  },
};
</script>

<style></style>
