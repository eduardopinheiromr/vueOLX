<template>
  <div class="product pointer">
    <img
      :src="image === '' ? require('../assets/logo.webp') : image"
      :alt="'Foto principal de ' + name"
    />
    <p class="pt-3">{{ name.slice(0, 40) }},...</p>
    <p class="fw-bold">R$ {{ price }}</p>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String,
    price: Number,
  },
};
</script>

<style scoped>
.product {
  max-width: 192px;
  max-height: 197x;
}
.product img {
  transition: 0.3s;
}
.product:hover > img {
  transform: scale(1.05);
}
.product img {
  width: 162px;
  height: 121px;
}
</style>
