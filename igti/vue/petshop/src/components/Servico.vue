<script>
export default {
  // Este método é utilizado tanto pelo componente Banho quanto Veterinário, logo podemos mover para esta camada "pai" e reutilizar o código.
  methods: {
    realizarServico(cliente) {
      this.$emit("realizado", cliente);
    }
  }
};
</script>
