<script lang="ts">
import Vue from "vue";
import Produto from "../models/produto";
export default Vue.extend({
  methods: {
    addToCart(produto: Produto) {
      this.$emit("addedToCart", produto);
    },
    removeFromCart(index: number) {
      this.$emit("removedFromCart", index);
    }
  }
});
</script>