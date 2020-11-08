<template>
  <div>
    <v-form @submit.prevent="cadasrarCliente">
      <h1>Bem Vindo a Petshop</h1>
      <v-spacer></v-spacer>
      <v-text-field label="Nome do Cliente" v-model="cliente.nome"></v-text-field>
      <v-spacer></v-spacer>
      <v-select label="Raça do Animal" v-model="cliente.raca" :items="racas" item-text="nome"></v-select>
      <v-spacer></v-spacer>
      <v-text-field label="Idade" type="number" v-model="cliente.idade" :rules="[rules.idadeCanina]"></v-text-field>
      <v-spacer></v-spacer>
      <v-select label="Serviço" v-model="cliente.servico" :items="servicos" >
        <template v-slot:selection="data">
          
          {{data.item.nome}}        
          </template>
          <template v-slot:item="data">
            {{data.item.nome}} ({{ data.item.preco | grana }})
          </template>
      </v-select>
      <v-space></v-space>
      <v-textarea v-if="cliente.servico && cliente.servico.tipo === 'consulta'" label="Sintomas" v-model="cliente.servico.observacoes" rows="5"></v-textarea>
      <v-space></v-space>
      <v-btn color="success" :disabled="cliente.idade >= 30 || cliente.idade < 0 || cliente.nome.length === 0 || cliente.servico.tipo.length === 0" @click="cadastrarCliente">Cadastrar Cliente</v-btn>
    <v-space></v-space>
    </v-form>
    
  
  </div>
  
</template>

<script>
import axios from "axios";
import Cachorro from "@/models/cachorro";

export default {
  data() {
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: [],
      rules: {
        idadeCanina: value => value < 30 || 'Tem certeza que é um cachorro?'
      }
    }
  },
  async created() {
    try {
      this.racas = await this.buscarRacas();
      this.servicos = await this.buscarServicos();
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    cadastroInvalido() {
      return (
        this.cliente.nome.length === 0 ||
        this.cliente.idade.length === 0 ||
        this.cliente.idade <= 0 ||
        this.cliente.raca.length === 0 ||
        this.cliente.servico.tipo.length === 0
      );
    }
  },
  methods: {
    async buscarRacas() {
      const { data } = await axios.get("http://localhost:3000/racas");
      return data;
    },
    async buscarServicos() {
      const { data } = await axios.get("http://localhost:3000/servicos");
      return data;
    },
    cadastrarCliente() {
      if (this.cadastroInvalido) {
        alert(
          "Favor preencher todas as informações corretamente no cadastro do cliente"
        );
        return;
      }

      this.$emit("novo-cadastro", this.cliente);

      // Reinicia o cliente aqui para liberarmos sua referência
      this.cliente = new Cachorro();
    }
  }
};
</script>

<style lang="scss" scoped>
.erro {
  color: red;
}
</style>
