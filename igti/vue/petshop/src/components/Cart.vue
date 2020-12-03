<template>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        color="primary"
        elevation="5"
        small
        fixed
        right
        v-bind="attrs"
        v-on="on"
      >
        <v-badge color="green" :value="cart.length" :content="cart.length">
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(product, index) in cart" :key="index">
        <v-list-item-avatar>
          <v-img :src="product.foto"></v-img>
        </v-list-item-avatar>
        <v-list-item-subtitle>
          {{ product.nome }}
          ({{ product.desconto || product.preco | grana }})
        </v-list-item-subtitle>
        <v-list-item-action>
          <v-btn icon @click="removeFromCart(index)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-title><b>Total</b></v-list-item-title>
        <v-list-item-subtitle class="pushToEnd">
          {{ totalPrice | grana }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import CartActions from "@/components/CartActions.vue";
import Produto from "../models/produto";
export default Vue.extend({
  extends: CartActions,
  props: {
    cart: { type: Array, default: () => [] } as PropOptions<Produto[]>
  },
  computed: {
    totalPrice(): number {
      return this.cart.reduce(
        (sum, product) => sum + (product.desconto || product.preco),
        0
      );
    }
  }
});
</script>

<style scoped>
.pushToEnd {
  text-align: end;
}
</style>