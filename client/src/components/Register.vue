<template>
  <v-container>
      <section>
        <v-col xs="12">
          <div class="text-center">
            <h1>Registration</h1>
          </div>
        </v-col>
      </section>

      <v-row class="justify-center">
        <v-col xs="5" sm="7" md="7" lg="6" xl="4">
          <v-card-text>
            <v-form class="px-3" ref="form">
              <v-text-field
              type="email"
              name="email"
              placeholder="E-mail"
              v-model="email"
              >
              </v-text-field>
              <br>
              <v-text-field
              type="password"
              name="password"
              placeholder="Password"
              v-model="password"
              >
              </v-text-field>
              <br>
              <div class="errortext" v-html="error" />
              <br>
              <v-btn outlined color="primary" @click="register">Register</v-btn>
            </v-form>
          </v-card-text>
        </v-col>
      </v-row>
  </v-container>
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
.errortext {
  color: red;
}
</style>
