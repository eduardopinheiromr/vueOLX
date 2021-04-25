<template>
  <PageTags
    title="OLX - O Maior Site de Compra e Venda do Brasil"
    description="OLX - Rápido e Fácil pra comprar e desapegar. Vender e Comprar nunca foi tão fácil! Anuncie Online na OLX - Você tem alguma coisa para desapegar. Desapega!"
  />
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
import PageTags from "../components/PageTags.vue";

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
    PageTags,
  },
};
</script>

<style></style>
