<template>
  <div class="auth">
    <amplify-authenticator username-alias="email">
      <amplify-sign-up
        slot="sign-up"
        username-alias="email"
        :form-fields.prop="signupFields"
      ></amplify-sign-up>
    </amplify-authenticator>
  </div>
</template>

<style scoped>
.auth {
  margin: 0 auto;
  max-width: 460px;
}
</style>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      signupFields: [
        {
          type: "email",
          label: "Email",
          placeholder: "Email",
          inputProps: { required: true, autocomplete: "email" },
        },
        {
          type: "password",
          label: "Password",
          placeholder: "Password",
          inputProps: { required: true, autocomplete: "new-password" },
        },
      ],
    };
  },
};
</script>
