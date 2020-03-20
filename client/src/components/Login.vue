<template>
  <div class="login">
    <v-container>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card class="mx-auto" max-width="550" height="600" :elevation="hover ? 5 : 3">
              <section>
                <v-col xs="12">
                  <div class="text-center">
                    <h1 class="mt-12">Login</h1>
                  </div>
                </v-col>
              </section>

              <v-row class="justify-center">
                <v-col xs="6" sm="9" md="8">
                  <v-card-text>
                    <v-form class="px-3" ref="form">
                      <v-text-field
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      v-model="email"
                      :error-messages="emailErrors"
                      @input="$v.email.$touch()"
                      @blur="$v.email.$touch()"
                      prepend-icon="mdi-email-outline"
                      >
                      </v-text-field>
                      <br>
                      <v-text-field
                      type="password"
                      name="password"
                      placeholder="Password"
                      v-model="password"
                      :error-messages="passwordErrors"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                      prepend-icon="mdi-format-text "
                      >
                      </v-text-field>
                      <br>
                      <div class="errortext" v-html="error" />
                      <br>
                      <br>
                      <v-btn dark color="primary" @click="login">login</v-btn>
                    </v-form>
                  </v-card-text>
                </v-col>
              </v-row>
          </v-card>
        </template>
      </v-hover>
    </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { required } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: { required },
    password: { required }
  },
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Login is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
      this.$v.$touch()
    }
  }
}
</script>

<style scoped>
.errortext {
  margin-top: 20px;
  color: red;
}
.login {
  margin-top: 60px;
}
</style>
