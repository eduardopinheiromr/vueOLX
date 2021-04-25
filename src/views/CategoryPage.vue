<template>
  <PageTags
    :title="$route.params.category"
    :description="$route.params.category"
  />
</template>

<script>
import PageTags from "../components/PageTags.vue";
export default {
  components: {
    PageTags,
  },
};
</script>

<style></style>
