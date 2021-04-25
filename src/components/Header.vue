<template>
  <Alert />
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container my-3">
      <router-link to="/" class="navbar-brand"
        ><img src="@/assets/logo.webp" width="48"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="(item, key) in menu" :key="key">
            <router-link :to="item.link" class="nav-link">{{
              item.label
            }}</router-link>
          </li>
          <li class="nav-item" v-if="!isLogged">
            <router-link to="/entrar" class="nav-link">Entrar</router-link>
          </li>
          <li class="nav-item" v-if="isLogged">
            <p class="nav-link">Olá {{ name }}</p>
          </li>
          <li class="nav-item">
            <button class="btn-olx-p">
              Anunciar
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Alert from "./Alert.vue";
import { onBeforeMount, ref } from "vue";
import firebase from "firebase/app";
import "firebase/auth";
const isLogged = false;
export default {
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });
    return {
      name,
      isLogged,
    };
  },
  data() {
    return {
      user: [],
      menu: [
        { id: 1, label: "Plano Profissional", link: "/plano-profissional" },
        { id: 2, label: "Meus Anúncios", link: "/meus-anuncios" },
        { id: 3, label: "Chat", link: "/chat" },
      ],
    };
  },
  components: {
    Alert,
  },
};
</script>

<style scoped>
.btn {
  background: rgb(247, 131, 35) !important;
  border-radius: 30px !important;
}
</style>
