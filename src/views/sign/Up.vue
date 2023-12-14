<template>
  <v-container>
    <t-auth-form @value="sinup" />
  </v-container>
</template>

<script setup>
import TAuthForm from "@/components/Templates/AuthFormTemplates.vue";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const sinup = async (value) => {
  console.log(value);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredentdetail) => {
      // 成功時処理
      // setTimeout(() => router.push("/"), 1500);
      console.log(userCredentdetail);
    })
    .catch((error) => {
      // 失敗時処理
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // setTimeout(() => (loading.value = false), 1500);
    });
};
</script>
