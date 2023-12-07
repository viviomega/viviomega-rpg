<template>
  <v-card-item>
    <v-card-title> <p-h1 value="SignUp"></p-h1> </v-card-title>
    <v-card-text class="my-3">
      <v-text-field label="E-mail" variant="underlined"></v-text-field>
      <v-text-field label="password" variant="underlined"></v-text-field>
    </v-card-text>
    <v-card-actions class="d-flext flex-row-reverse">
      <v-btn color="primary"> SignUp </v-btn>
    </v-card-actions>
  </v-card-item>
</template>
<script setup>
import PH1 from "@/components/Parts/Heading1Parts.vue";
</script>
