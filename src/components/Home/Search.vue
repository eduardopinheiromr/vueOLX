<template>
  <div class="bg-purple">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="py-3 d-flex search-bar">
            <input
              type="text"
              name="search"
              placeholder="Estou procurando por..."
              class="w-100 p-3"
            />
            <button @click="teste" class="search-btn p-3">
              <img
                :src="require('../../assets/icons/search.png')"
                width="25"
                height="25"
                alt="Botão de pesquisar"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 text-white d-flex flex-wrap justify-content-center justify-content-md-between py-4"
        >
          <a
            v-for="(category, key) in categories"
            :key="key"
            :href="category.link"
            class="category d-flex flex-column justify-content-center align-items-center text-white pointer"
          >
            <div
              class="rounded-circle bg-white icon mb-2 d-flex justify-content-center align-items-center"
            >
              <img :src="category.image" height="30" width="30" />
            </div>
            <p class="category-name text-center">
              {{ category.name }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slugify from "slugify";

export default {
  data() {
    return {
      categories: [
        {
          name: "Imóveis",
          image: require("../../assets/icons/categories/imoveis.svg"),
        },
        {
          name: "Autos e peças",
          image: require(`../../assets/icons/categories/autos-e-pecas.svg`),
        },
        {
          name: "Para a sua casa",
          image: require(`../../assets/icons/categories/para-a-sua-casa.svg`),
        },
        {
          name: "Eletrônicos e celulares",
          image: require(`../../assets/icons/categories/eletronicos-e-celulares.svg`),
        },
        {
          name: "Vagas de emprego",
          image: require(`../../assets/icons/categories/vagas-de-emprego.svg`),
        },
        {
          name: "Serviços",
          image: require(`../../assets/icons/categories/servicos.svg`),
        },
        {
          name: "Músicas e hobbies",
          image: require(`../../assets/icons/categories/autos-e-pecas.svg`),
        },
        {
          name: "Esportes e lazer",
          image: require(`../../assets/icons/categories/musicas-e-hobbies.svg`),
        },
        {
          name: "Moda e beleza",
          image: require(`../../assets/icons/categories/moda-e-beleza.svg`),
        },
        {
          name: "Agro e indústria",
          image: require(`../../assets/icons/categories/agro-e-industria.svg`),
        },
        {
          name: "Todas as categorias",
          image: require(`../../assets/icons/categories/todas-as-categorias.svg`),
        },
      ],
      methods: {
        teste: function() {
          console.log("teste");
        },
        getImageName(name, options) {
          return `../../assets/icons/${slugify(name, options)}.svg`;
        },
      },
    };
  },
};
</script>

<style>
.bg-purple {
  background: #6e0bd6;
}
.icon {
  height: 58px;
  width: 58px;
}
.category {
  width: 100px;
}
.category-name {
  font-size: 12px;
  height: 20px;
}
.search-bar input {
  border: none;
  border-right: 2px solid lightgray;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.search-btn {
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.search-btn:hover {
  background: #9e49b9;
  box-shadow: inset 0px 0px 0px 1px #fff;
  border-left: 0;
}
.search-btn:hover > img {
  filter: invert(1);
}
</style>
