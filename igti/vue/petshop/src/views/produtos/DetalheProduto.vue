<template>
  <div>
      <h1>Este é um {{ produto }}</h1>
  </div>
</template>

<script>
export default {
data() {
  return{
    produto: 'desconhecido'
  }
},
mounted() {
  console.log(this.$route);
  this.produto = this.$route.params.id;
}
}

</script>

<style>

</style>