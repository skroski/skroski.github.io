<template>
  <v-form>
    <h1>Bem vindo ao Petshop</h1>
    <v-spacer></v-spacer>
    <v-text-field label="Nome do Cliente" v-model="cliente.nome"></v-text-field>
    <!-- <div class="espaco-abaixo"></div> -->
    <v-spacer></v-spacer>
    <v-select
      label="Raça do Cão"
      v-model="cliente.raca"
      :items="racas"
      item-text="nome"
    >
    </v-select>
    <v-spacer></v-spacer>
    <v-text-field
      label="Idade"
      type="number"
      v-model="cliente.idade"
      :rules="[rules.idadeCanina]"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-select label="Serviço" v-model="cliente.servico" :items="servicos">
      <template v-slot:selection="data">
        {{ data.item.nome }}
      </template>
      <template v-slot:item="data">
        {{ data.item.nome }} ({{ data.item.preco | grana }})
      </template>
    </v-select>
    <v-spacer></v-spacer>
    <v-textarea
      v-if="cliente.servico && cliente.servico.tipo === 'consulta'"
      label="Sintomas"
      v-model="cliente.servico.observacoes"
      rows="3"
    >
    </v-textarea>
    <v-spacer></v-spacer>
    <v-btn
      color="success"
      v-bind:disabled="cadastroInvalido"
      @click="cadastrarCliente"
      >Cadastrar cliente</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "../services/DataService";
import Cachorro from "../models/cachorro";
export default Vue.extend({
  data() {
    return {
      cliente: new Cachorro(),
      racas: [],
      servicos: [],
      rules: {
        idadeCanina: (value: number) =>
          value < 30 || "Tem Certeza que é um cachorro?"
      }
    };
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
    cadastroInvalido(): boolean {
      return (
        this.cliente.nome.length === 0 ||
        this.cliente.idade <= 0 ||
        this.cliente.raca.length === 0 ||
        this.cliente.servico.tipo.length === 0
      );
    }
  },
  methods: {
    async buscarRacas() {
      const { data } = await DataService.getRacas();
      return data;
    },
    async buscarServicos() {
      const { data } = await DataService.getServicos();
      return data;
    },
    cadastrarCliente() {
      console.log(this.servicos);
      console.log(this.cliente.servico);
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
});
</script>