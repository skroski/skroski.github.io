<template>
  <div id="app">
    <v-row>
      <v-col cols="12" md="6" sm="12" xs="12">
        <v-card class="pa-4">
          <recepcao @novo-cadastro="novoCliente"></recepcao>
        </v-card>

      </v-col>
      <v-col cols="12" md="6" sm="12" xs="12">
        <v-card class="pa-4 mb-4">
            <veterinario :clientes="clientesVeterinario" @realizado="finalizarConsulta"></veterinario>
            </v-card>
        <v-card class="pa-4 mb-4">
          <banho :clientes="clientesBanho" @realizado="finalizarBanho"></banho>
            </v-card>
      </v-col>
         <v-space></v-space>  
         
      </v-row>
      <v-row>
        <v-col  cols="12" sm="12" xs="12">
        <v-card class="pa-4 mb-4">
         <balanco :clientes="clientesAtendidos"></balanco>
        </v-card>
      </v-col>
      </v-row>
    </div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';
import Cachorro from '@/models/cachorro';

// Importando os componentes que serão utilizados nesta página - caso sejam utilizados com frequência, mover para main.js
import Recepcao from '@/components/Recepcao';
import Banho from '@/components/Banho';
import Veterinario from '@/components/Veterinario';
import Balanco from '@/components/Balanco';

export default {
  name: 'Home',
  components: {
    Recepcao,
    Banho,
    Veterinario,
    Balanco
  },
  data() {
    return {
      clientesBanho: [],
      clientesVeterinario: [],
      clientesAtendidos: []
    }
  },
  created() {
    const { data } = axios.get('http://localhost:3000/clientes');
    if (!data) { return; }

    this.clientesBanho = data.filter((cliente) => cliente.servico.nome === 'banho');
    this.clientesVeterinario = data.filter((cliente) => cliente.servico.nome === 'consulta');
  },
  methods: {
    novoCliente(cliente) {
      cliente.servico.tipo === 'banho'
        ? this.clientesBanho.push(cliente)
        : this.clientesVeterinario.push(cliente);
    },
    finalizarBanho(cliente, index) {
      this.clientesAtendidos.push(cliente);

      // Nem todas as operações são rastreadas pelo Vue, 
      // neste caso temos que "forçar" que a lista seja re-renderizada, 
      // uma vez que operações filter e splice (metodos comuns para remover itens de um array)ao contrário do push não notificam o observador
      Vue.delete(this.clientesBanho, this.clientesBanho.findIndex((clienteBanho) => clienteBanho.nome === cliente.nome));

    },
    finalizarConsulta(cliente) {
      this.clientesAtendidos.push(cliente);
      this.clientesVeterinario = this.clientesVeterinario.filter((clienteAtendido) => clienteAtendido.nome === cliente.nome);
    },
  }
}
</script>

<style lang="scss">
// Podemos usar mais de uma tag style em um componente, esta aqui como não possui o atributo scoped, estará disponível para todos os componentes
@import '../assets/styles/main';

</style>
