<template>
  <Head>
    <title>{{ title }}</title>
    <meta name="description" :content="description" />
  </Head>
</template>

<script>
import { Head } from "@vueuse/head";
export default {
  props: {
    title: String,
    description: String,
  },
  components: {
    Head,
  },
};
</script>

<style></style>
