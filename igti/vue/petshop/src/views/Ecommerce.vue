<template>
  <div>
    <cart :cart="cart" @removedFromCart="deleteFromCart"></cart>
    <v-snackbar v-model="snackbar" color="success" fixed top app>
      Produto adicionado ao carrinho
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          duration="3000"
          @click="snackbar = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <router-view @addedToCart="pushToCart"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Produto from "../models/produto";
import Cart from "@/components/Cart.vue";
export default Vue.extend({
  components: {
    Cart
  },
  data() {
    return {
      cart: [] as Produto[],
      snackbar: false
    };
  },
  methods: {
    pushToCart(produto: Produto) {
      this.cart.push(produto);
      this.snackbar = true;
    },
    deleteFromCart(index: number) {
      Vue.delete(this.cart, index);
    }
  }
});
</script>

<style>
.price {
  text-align: end;
}
.discount {
  text-decoration: line-through;
}
</style>