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

<style>
.chip {
  border: 1px solid #000;
  border-radius: 2rem;
}
.chip:hover {
  border: 1px solid #6e0bd6;
  color: #6e0bd6 !important;
  text-decoration: none;
}
</style>
