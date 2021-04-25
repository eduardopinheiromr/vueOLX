<template>
  <div class="bg-light">
    <div class="container bg-white p-5">
      <div class="row">
        <h3>Escolha seu estado</h3>
      </div>
      <div class="row">
        <div class="d-flex flex-wrap">
          <div v-for="(region, key) in regions" :key="key">
            <a :href="region.link">{{ region.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      regions: [
        { name: "RJ", link: "/RJ" },
        { name: "SP", link: "/SP" },
        { name: "MG", link: "/MG" },
        { name: "PR", link: "/PR" },
        { name: "RS", link: "/RS" },
        { name: "SC", link: "/SC" },
        { name: "ES", link: "/ES" },
        { name: "BA", link: "/BA" },
        { name: "PE", link: "/PE" },
        { name: "DF", link: "/DF" },
        { name: "CE", link: "/CE" },
        { name: "MS", link: "/MS" },
        { name: "GO", link: "/GO" },
        { name: "AM", link: "/AM" },
        { name: "RN", link: "/RN" },
        { name: "PB", link: "/PB" },
        { name: "PA", link: "/PA" },
        { name: "MT", link: "/MT" },
        { name: "AL", link: "/AL" },
        { name: "SE", link: "/SE" },
        { name: "MA", link: "/MA" },
        { name: "AC", link: "/AC" },
        { name: "RO", link: "/RO" },
        { name: "TO", link: "/TO" },
        { name: "PI", link: "/PI" },
        { name: "AP", link: "/AP" },
        { name: "RR", link: "/RR" },
        { name: "BRASIL", link: "/BRASIL" },
      ],
    };
  },
};
</script>

<style></style>
