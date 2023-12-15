<template>
  <v-container>
    <t-auth-form
      class="mt-8"
      @value="sinup"
      :errorMessage="errorObject.errorMessage"
    />
  </v-container>
</template>

<script setup>
import TAuthForm from "@/components/Templates/AuthFormTemplates.vue";
import { reactive, ref, defineEmits } from "vue";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const errorObject = reactive({
  errorCode: "",
  errorMessage: "",
});

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
      errorObject.errorCode = error.code;
      errorObject.errorMessage = error.errorMessage;

      if (errorObject.errorCode === "auth/user-not-found") {
        errorObject.errorMessage = "登録されていないメールアドレストです";
      } else if (errorObject.errorCode === "auth/wrong-password") {
        errorObject.errorMessage = "パスワードが違います";
      }
      setTimeout(() => (loading.value = false), 1500);
    });
};
</script>
