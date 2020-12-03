<template>
  <div>
    <h1>Lista de produtos</h1>
    <v-row>
      <v-col
        col="12"
        md="4"
        sm="6"
        cols="12"
        v-for="(produto, index) in produtos"
        :key="index"
      >
        <v-card>
          <router-link
            :to="{
              name: 'DetalheProduto',
              params: { id: produto.id, produto }
            }"
          >
            <v-img :src="produto.foto" height="150"></v-img>
          </router-link>
          <v-card-title>{{ produto.nome }}</v-card-title>
          <v-card-subtitle class="price">
            <span :class="produto.desconto && 'discount'">
              {{ produto.preco | grana }}
            </span>
            <span v-if="produto.desconto" class="mx-1">{{
              produto.desconto | grana
            }}</span>
          </v-card-subtitle>
          <v-card-text class="description">{{ produto.descricao }}</v-card-text>
          <v-card-actions>
            <v-btn block small color="primary" @click="addToCart(produto)"
              >Comprar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CartActions from "@/components/CartActions.vue";
import DataService from "../../services/DataService";
export default Vue.extend({
  extends: CartActions,
  data() {
    return {
      produtos: []
    };
  },
  async created() {
    try {
      this.produtos = await this.buscarProdutos();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async buscarProdutos() {
      const { data } = await DataService.getProdutos();
      return data;
    }
  }
});
</script>

<style scoped>
.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>