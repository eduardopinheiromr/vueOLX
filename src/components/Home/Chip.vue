<template>
  <div :class="classname"></div>
  <a class="chip" :href="link">
    {{ text }}
  </a>
</template>

<script>
export default {
  props: {
    text: String,
    link: String,
    classname: String,
  },
};
</script>

<style scoped>
.chip {
  border: 1px solid #000;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  text-decoration: none;
}
.chip:hover {
  border: 1px solid #6e0bd6;
  color: #6e0bd6 !important;
  text-decoration: none;
}
</style>
