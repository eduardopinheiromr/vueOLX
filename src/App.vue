<template>
  <Alert />
  <Header />
  <Search />
  <Recents />
  <Premium />
  <ChooseRegion />
  <Discover />
  <About />
  <PopSearches />
  <Footer />
</template>

<script>
import Alert from "./components/Alert.vue";
import Header from "./components/Header.vue";
import Search from "./components/Home/Search.vue";
import Recents from "./components/Home/Recents.vue";
import Premium from "./components/Home/Premium.vue";
import ChooseRegion from "./components/Home/ChooseRegion.vue";
import Discover from "./components/Home/Discover.vue";
import About from "./components/Home/About.vue";
import PopSearches from "./components/Home/PopSearches.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Alert,
    Header,
    Search,
    Recents,
    Premium,
    ChooseRegion,
    Discover,
    About,
    PopSearches,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
