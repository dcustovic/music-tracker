<template>
  <div class="register">
    <v-container>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card class="mx-auto" max-width="550" height="600" :elevation="hover ? 10 : 6">
              <section>
                <v-col xs="12">
                  <div class="text-center">
                    <h1 class="mt-12">Registration</h1>
                  </div>
                </v-col>
              </section>

              <v-row class="justify-center">
                <v-col xs="6" sm="9" md="8">
                  <v-card-text>
                    <v-form class="px-3" ref="form" autocomplete="off">
                      <v-text-field
                      required
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail account"
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
                      placeholder="Enter your password"
                      v-model="password"
                      :error-messages="passwordErrors"
                      @input="$v.password.$touch()"
                      @blur="$v.password.$touch()"
                      prepend-icon="mdi-format-text"
                      autocomplete="new-password"
                      >
                      </v-text-field>
                      <br>
                      <div class="errortext" v-html="error" />
                      <br>
                      <br>
                      <v-btn color="primary" @click="register" @keyup.enter="register">Register</v-btn>
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
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(8) }
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
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.password.$dirty) return errors
      !this.$v.password.minLength && errors.push('Must be minimum of 8 characters')
      !this.$v.password.required && errors.push('Password is required')
      return errors
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
        this.$router.push({
          name: 'songs'
        })
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
.register {
  margin-top: 60px;
  margin-bottom: 50px;
}
</style>
