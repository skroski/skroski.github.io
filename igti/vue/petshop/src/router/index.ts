import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Petshop from '@/views/Petshop.vue';
import Ecommerce from '@/views/Ecommerce.vue';
import ListaProdutos from '@/views/produtos/ListaProdutos.vue';
import DetalheProduto from '@/views/produtos/DetalheProduto.vue';
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/petshop",
    name: "Petshop",
    component: Petshop
  },
  {
    path: "/ecommerce",
    name: "Ecommerce",
    component: Ecommerce,
    children:[
      {path: '', name: 'ListaProdutos', component: ListaProdutos },
      {path: '', name: 'DetalheProduto', component: DetalheProduto }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
