<template
  ><div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>O que você está anunciando?</h1>
          </div>
        </div>
      </div>
      <form @submit.prevent="createAd" class="d-flex flex-column mx-auto">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="my-3 d-flex flex-column">
              <label class="fw-bold" for="title">Título do anúncio</label>
              <input type="text" id="title" v-model="title" class="p-3" />
            </div>
            <div class="my-3 d-flex flex-column">
              <label class="fw-bold" for="description">Descrição</label>
              <textarea id="description" v-model="description" class="p-3" />
            </div>
          </div>
          <div class="col-12 col-md-6 d-flex flex-column">
            <div class="d-flex justify-content-between">
              <div class="d-flex flex-column w-50 my-3">
                <label class="fw-bold" for="zipcode">CEP</label>
                <input type="text" id="zipcode" v-model="zipcode" class="p-3" />
              </div>
              <div class="d-flex flex-column my-3">
                <label class="fw-bold" for="number">Número</label>
                <input type="text" id="number" v-model="number" class="p-3" />
              </div>
            </div>
            <div class="d-flex flex-column">
              <label class="fw-bold" for="contact">Contato</label>
              <input type="text" id="contact" v-model="contact" class="p-3" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <select name="categories" id="categories" class="p-3 w-100">
              <option value="" disabled selected
                >Selecione uma categoria</option
              >
            </select>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-12 col-md-6 d-flex align-items-center">
            <p>
              Ao publicar você concorda e aceita nossos Termos de Uso e
              Privacidade
            </p>
          </div>
          <div
            class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <input type="submit" class="btn-olx-p" value="Criar meu anúncio" />
          </div>
        </div>
      </form>
    </div>
    <AuthLock />
  </div>
</template>

<script>
import AuthLock from "@/components/AuthLock.vue";
import { postNewAd } from "../services";
import { ref } from "vue";
import store from "@/store";

export default {
  setup() {
    const userState = { ...store.getters.user.data };
    const title = ref("");
    const description = ref("");
    const contact = ref(userState.phoneNumber ?? "");
    const zipcode = ref("");
    const number = ref("");

    const createAd = async () => {
      await postNewAd({
        userId: userState.uid,
        title: title.value,
        description: description.value,
        contact: contact.value,
        zipcode: zipcode.value,
        number: number.value,
      });
    };
    return { createAd, title, description, contact, zipcode, number };
  },
  components: { AuthLock },
};
</script>

<style scoped></style>
