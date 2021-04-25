<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
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
.btn-olx-p {
  color: #fff;
  background: rgb(247, 131, 35);
  padding: 10px 25px;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 16px;
}
.btn-olx-p:hover {
  background: #f99d53;
}
.btn-olx-s {
  border: 1px solid rgb(247, 131, 35);
  padding: 10px 25px;
  border-radius: 30px;
  color: rgb(247, 131, 35);
}
.link-olx-p {
  text-decoration: none;
  color: rgb(110, 10, 214) !important;
  font-weight: 500;
}
</style>
