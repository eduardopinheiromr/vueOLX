<template>
  <Search />
  <Recents />
  <Premium />
  <ChooseRegion />
  <Discover />
  <About />
  <PopSearches />
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Home/Search.vue";
import Recents from "@/components/Home/Recents.vue";
import Premium from "@/components/Home/Premium.vue";
import ChooseRegion from "@/components/Home/ChooseRegion.vue";
import Discover from "@/components/Home/Discover.vue";
import About from "@/components/Home/About.vue";
import PopSearches from "@/components/Home/PopSearches.vue";

export default {
  name: "Home",
  components: {
    Search,
    Recents,
    Premium,
    ChooseRegion,
    Discover,
    About,
    PopSearches,
  },
};
</script>

<style></style>
