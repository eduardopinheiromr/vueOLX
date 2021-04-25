<template>
  <footer class="bg-light py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 col-md-6 d-flex align-items-center">
          <div v-for="(link, key) in links" :key="key" class="top-links">
            <router-link :to="link.url">{{ link.label }}</router-link>
          </div>
        </div>
        <div class="col-12 col-md-6 d-flex justify-content-md-end">
          <div
            v-for="(media, key) in socialMedia"
            :key="key"
            :class="'social ' + media.name"
          >
            <a :href="media.link" target="_blank" rel="noreferrer"
              ><img :src="media.image" :alt="media.name"
            /></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="mb-3">
            <a href="#">Sobre a OLX</a>, <a href="#">Termos de uso</a>,
            <a href="#">Política de privacidade</a> e
            <a href="#">Proteção à Propriedade Intelectual</a>
          </div>
        </div>
      </div>
      <div class="row">
        <p>
          © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359,
          Flamengo - 22220-001 - Rio de Janeiro, RJ
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { label: "Ajuda e contato", url: "/faq" },
        { label: "Dicas de segurança", url: "/seguranca" },
        { label: "Vender na OLX", url: "/vender" },
        { label: "Plano Profissional", url: "/planos" },
      ],
      socialMedia: [
        {
          name: "facebook",
          image: require("../assets/icons/facebook.svg"),
          link: "https://www.facebook.com/olxbrasil",
        },
        {
          name: "youtube",
          image: require("../assets/icons/youtube.svg"),
          link: "https://www.youtube.com/olxbrasil",
        },
        {
          name: "linkedin",
          image: require("../assets/icons/linkedin.svg"),
          link: "https://www.linkedin.com/olxbrasil",
        },
        {
          name: "instagram",
          image: require("../assets/icons/instagram.svg"),
          link: "https://www.instagram.com/olxbrasil",
        },
        {
          name: "twitter",
          image: require("../assets/icons/twitter.svg"),
          link: "https://www.twitter.com/olxbrasil",
        },
      ],
    };
  },
};
</script>

<style scoped>
footer {
  border-top: 1px solid lightgrey;
}
footer * {
  font-size: 12px;
  color: grey !important;
}
footer a {
  padding: 0;
  border-bottom: 1px solid grey;
  text-decoration: none;
}
footer a:hover {
  text-decoration: none;
  color: black !important;
}
.top-links a {
  font-weight: 600;
  font-size: 14px;
  border: none;
  margin-right: 10px;
}

.social {
  cursor: pointer;
  padding: 10px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  margin-right: 10px;
}
.social a {
  text-decoration: none;
  border: none;
}
.social img {
  height: 25px;
  filter: contrast(0.3);
}
.social:hover img {
  filter: invert(1);
}
.facebook:hover {
  background: #3a5998;
}
.youtube:hover {
  background: #f00;
}
.twitter:hover {
  background: #1da1f2;
}
.linkedin:hover {
  background: #0084bf;
}
.instagram:hover {
  background: #e1306c;
}
</style>
