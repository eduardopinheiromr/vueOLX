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
          <li
            class="nav-item d-flex align-items-center"
            v-for="(item, key) in menu"
            :key="key"
          >
            <router-link :to="item.link" class="nav-link">{{
              item.label
            }}</router-link>
          </li>
          <li class="nav-item d-flex align-items-center" v-if="!user.loggedIn">
            <router-link to="/entrar" class="nav-link">Entrar</router-link>
          </li>
          <li class="nav-item position-relative" v-if="user.loggedIn">
            <a
              class="nav-link dropdown-toggle d-flex align-items-center"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img v-if="user.data.photoURL" :src="user.data.photoURL" />
              <div
                v-else
                class="rounded-circle p-2 bg-lighten d-flex align-items-center justify-content-center"
              >
                <img src="@/assets/icons/user.svg" />
              </div>
              <p class="ms-2 mb-0">{{ user.data.displayName }}</p>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Meu cadastro</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <div class="dropdown-item pointer" @click="signOut">Sair</div>
              </li>
            </ul>
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
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
    }),
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home",
          });
        });
    },
  },
  data() {
    return {
      menu: [
        { id: 1, label: "Plano Profissional", link: "/plano-profissional" },
        { id: 2, label: "Meus Anúncios", link: "/anuncios" },
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
