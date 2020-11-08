<template>
  <div>
      <h1>Isto é uma Lista de Produtos</h1>
      <div v-for="(produto, index) in produtos" :key="index">
        <router-link :to="`/ecommerce/${produto}`">{{ produto }}</router-link>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      produtos: ['racao', 'remedio', 'brinquedo', 'tapete']
    }
  }

}
</script>

<style>

</style>