<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="my-5">Meus anúncios</h1>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Publicados (0)
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Aguardando Publicação (0)
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Acima do Limite (0)
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Inativos (0)
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Expirados (0)
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              v-if="ads === null || ads.length === 0"
              class="d-flex flex-column justify-content-center align-items-center py-5"
            >
              <img
                src="@/assets/images/noDataAds.svg"
                height="180"
                width="260"
                alt="Não há anúncios"
              />
              <p class="my-5">
                Você não possui anúncios publicados no momento
              </p>
            </div>
            <div v-for="(ad, key) in ads" :key="key">
              <h3>{{ ad.title }}</h3>
              <p>{{ ad.description }}</p>
              <p>{{ ad.contact }}</p>
              <p>{{ ad.zipcode }}</p>
              <p>{{ ad.number }}</p>
              <p>{{ ad.price }}</p>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ...
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  </div>
  <AuthLock />
</template>

<script>
import AuthLock from "@/components/AuthLock";
import { getAdsByUid } from "@/services";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  computed: {
    ads() {
      return this.$store.state.user.ads;
    },
  },
  methods: {
    fetchAds() {
      const uid = this.$store.state.user.data.uid;
      if (this.$store.state.user.ads == null) {
        getAdsByUid(uid).then(ads => {
          console.log(ads);
          this.$store.dispatch("myAds", ads);
        });
      }
    },
  },
  setup() {
    const store = useStore();
    const { uid } = computed(() => store.state.user.data);
    const ads = computed(() => store.state.user.ads);

    if (ads.value === null) {
      getAdsByUid(uid).then(ads => {
        console.log("fetched =>", ads);
        store.dispatch("myAds", ads);
      });
    }
  },
  components: {
    AuthLock,
  },
};
</script>

<style scoped></style>
