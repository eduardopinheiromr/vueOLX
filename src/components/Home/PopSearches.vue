<template>
  <div class="bg-light py-3">
    <div class="container my-5">
      <div class="row">
        <div class="col-12">
          <h3 class="text-left">Pesquisas populares</h3>
        </div>
      </div>
      <div class="row mt-3">
        <Chip
          v-for="(search, key) in popSearches"
          :key="key"
          :link="search.link"
          :text="search.text"
          classname="mr-3"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./Chip.vue";
export default {
  data() {
    return {
      popSearches: [
        { text: "motorola g7 plus", link: "#" },
        { text: "motorola g7 plus", link: "#" },
        { text: "motorola g7 plus", link: "#" },
        { text: "motorola g7 plus", link: "#" },
        { text: "motorola g7 plus", link: "#" },
      ],
    };
  },
  components: { Chip },
};
</script>

<style></style>
