<template>
  <div>
    <v-btn text @click="goBack">Voltar para loja</v-btn>
    <div v-if="produto.id">
      <v-row>
        <v-col col="12" cols="12">
          <v-card>
            <v-img :src="produto.foto" height="150"></v-img>
            <v-card-title>{{ produto.nome }}</v-card-title>
            <v-card-subtitle class="price">
              <span :class="produto.desconto && 'discount'">
                {{ produto.preco | grana }}
              </span>
              <span v-if="produto.desconto" class="mx-1">{{
                produto.desconto | grana
              }}</span>
            </v-card-subtitle>
            <v-card-text>{{ produto.descricao }}</v-card-text>
            <v-card-actions>
              <v-btn block small color="primary" @click="addToCart(produto)"
                >Comprar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <h1 class="text-center">
        Produto desconhecido
      </h1>
    </div>
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
      produto: {}
    };
  },
  async created() {
    if (!this.$route.params.produto) {
      try {
        this.produto = await this.buscarProduto(this.$route.params.id);
      } catch (error) {
        console.log(error);
      }
    } else {
      this.produto = this.$route.params.produto;
    }
  },
  methods: {
    async buscarProduto(id: string) {
      const { data } = await DataService.getProduto(id);
      return data;
    },
    goBack() {
      this.$router.back();
    }
  }
});
</script>