<template>
  <div class="register">
    <v-container>
      <v-hover>
        <template v-slot="{ hover }">
          <v-card class="mx-auto" max-width="550" height="570" :elevation="hover ? 8 : 4">
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
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail account"
                      v-model="email"
                      prepend-icon="mdi-email-outline"
                      >
                      </v-text-field>
                      <br>
                      <v-text-field
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      v-model="password"
                      prepend-icon="mdi-format-text"
                      autocomplete="new-password"
                      >
                      </v-text-field>
                      <br>
                      <div class="errortext" v-html="error" />
                      <br>
                      <br>
                      <v-btn color="primary" @click="register">Register</v-btn>
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
.register {
  margin-top: 50px;
}
</style>
