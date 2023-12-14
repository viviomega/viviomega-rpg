<template>
  <v-card-item>
    <v-card-title> <p-h1 value="SignUp"></p-h1> </v-card-title>
    <v-card-text class="my-3">
      <v-text-field
        v-model="formValue.email"
        label="E-mail"
        variant="underlined"
        :error-messages="v$.email.$errors.map((e) => e.$message)"
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
      ></v-text-field>
      <v-text-field
        v-model="formValue.password"
        label="password"
        variant="underlined"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        @click:append="show = !show"
        :error-messages="v$.password.$errors.map((e) => e.$message)"
        @input="v$.password.$touch"
        @blur="v$.password.$touch"
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="d-flext flex-row-reverse">
      <v-btn color="primary" @click="submit"> SignUp </v-btn>
    </v-card-actions>
  </v-card-item>
</template>
<script setup>
import useVuelidate from "@vuelidate/core";
import { reactive, ref, defineEmits } from "vue";

import PH1 from "@/components/Parts/Heading1Parts.vue";

import { validEmail, validPassword } from "@/plugins/validatorRule";

const emit = defineEmits({
  value: {},
});

const formValue = reactive({
  email: "",
  password: "",
});

const v$ = reactive(
  useVuelidate(
    {
      email: validEmail(),
      password: validPassword(),
    },
    formValue
  )
);

const show = ref(false);

const submit = () => {
  const isFormCorrect = v$.value.$validate();
  if (!isFormCorrect) return;
  emit("value", formValue);
};
</script>
