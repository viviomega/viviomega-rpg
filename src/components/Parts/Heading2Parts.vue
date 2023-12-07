<template>
  <h2 class="text-h6 text-md-h5 text-lg-h3 font-weight-black my-2">
    {{ value }}
  </h2>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["value"]);
</script>
<style scoped>
h2 {
  color: #00b8a8;
}
</style>
