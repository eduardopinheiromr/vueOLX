<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="login my-5 d-flex flex-column align-items-center mx-auto">
          <img src="@/assets/logo.webp" width="58" />
          <h4 class="fw-bold text-center my-4">Acesse sua conta</h4>
          <form @submit.prevent="Login" class="d-flex flex-column w-100">
            <label class="fw-bold" for="email">E-mail</label>
            <input type="email" id="email" v-model="email" class="p-3" />

            <label class="fw-bold" for="password">Senha</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="p-3"
            />
            <input type="submit" value="Entrar" class="mt-3 btn-olx-p" />
          </form>
          <p class="fw-bold h5 mt-5 mb-3">
            Não tem uma conta?
            <router-link to="/cadastro" class="link-olx-p h5"
              >Cadastre-se</router-link
            >
          </p>
        </div>
        <p class="text-center mx-auto my-5 terms">
          Ao continuar, você concorda com os Termos de Uso e a Política de
          Privacidade da OLX, e também, em receber comunicações via e-mail e
          push da OLX e seus parceiros.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import firebase from "firebase/app";
import "firebase/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
          router.replace("/");
        })
        .catch(err => alert(err.message));
    };
    return {
      email,
      password,
      Login,
    };
  },
};
</script>

<style scoped>
.login {
  max-width: 600px;
  box-shadow: rgb(153 153 153 / 20%) 0px 2px 4px 0px;
  padding: 24px 56px;
  border-radius: 4px 4px 0px 0px;
}
form {
  max-width: 400px;
}
.terms {
  max-width: 400px;
}
</style>
