<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>
<router-link to="/ecommerce" class="white--text mx-3">Loja</router-link>
<router-link to="/petshop" class="white--text mx-3">Petshop</router-link>
     
    </v-app-bar>

    <v-main>
      <v-container>
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import router from './router/index';

export default Vue.extend({
  name: 'App',

  methods: {
    irParaHome() {
      this.$router.push('/');
    }
  }
});
</script>
