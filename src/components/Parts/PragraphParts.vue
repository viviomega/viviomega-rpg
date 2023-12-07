<template>
  <p class="font-weight-thin text-caption my-1" style="white-space: pre-line">
    {{ value }}
  </p>
</template>
<script setup>
import { defineProps } from "vue";

defineProps(["value"]);
</script>
