<template>
  <div
    v-bind:class="{
      'd-none': !show,
      'bg-lighten d-flex align-items-center': show,
    }"
  >
    <div class="container">
      <div class="py-3 d-flex align-items-center justify-content-center">
        <span>
          📣 Milhares de ofertas com parcelas de financiamento que cabem no seu
          bolso. Últimos dias para aproveitar!
        </span>
      </div>
    </div>
    <div @click="closeAlert" class="ms-auto pe-3 fw-bold pointer">
      X
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  methods: {
    closeAlert: function() {
      this.show = !this.show;
    },
  },
};
</script>

<style></style>
