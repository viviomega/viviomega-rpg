<template>
  <h1 class="text-h5 text-md-h4 text-lg-h2">
    {{ value }}
  </h1>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["value"]);
</script>
<style>
h1 {
  color: #00b8a8;
}
</style>
