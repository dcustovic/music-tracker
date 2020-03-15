<template>
  <div>
   <h1>Registration</h1>
   <input type="email" name="email" placeholder="E-mail" v-model="email">
   <br>
   <input type="password" name="password" placeholder="Password" v-model="password">
   <br>
   <button @click="register">Register</button>
   <div class="error" v-html="error" />
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
