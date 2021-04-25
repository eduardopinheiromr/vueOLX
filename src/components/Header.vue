<template>
  <div class="container my-3">
    <div class="d-flex align-items-center">
      <a href="/"> <img src="../assets/logo.webp" width="48"/></a>
      <a class="ml-5" href="#">Buscar</a>
      <div class="ml-auto mr-3 d-flex align-items-center flex-wrap">
        <div v-for="(item, key) in menu" :key="key">
          <a :href="item.link">{{ item.label }}</a>
        </div>
        <button class="btn btn-warning text-white py-2 px-4">Anunciar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { id: 1, label: "Plano Profissional", link: "/plano-profissional" },
        { id: 2, label: "Meus Anúncios", link: "/meus-anuncios" },
        { id: 3, label: "Chat", link: "/chat" },
        { id: 4, label: "Entrar", link: "/entrar" },
      ],
    };
  },
};
</script>

<style>
* {
  font-size: 14px;
}

.d-flex {
  display: flex;
}

a {
  text-decoration: none;
  padding: 5px 10px;
  color: #000 !important;
}
.btn {
  background: rgb(247, 131, 35) !important;
  border-radius: 30px !important;
}
</style>
