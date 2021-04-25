<template>
  <div
    v-bind:class="{
      'd-none': !show,
      'bg-light d-flex align-items-center': show,
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
    <div @click="closeAlert" class="ml-auto pr-3 font-weight-bold pointer">
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

<style>
.pointer {
  cursor: pointer;
}
</style>
