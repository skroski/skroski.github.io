import http from "../http-common";

class DataService {
  getClientes() {
    return http.get("/clientes");
  }

  getRacas() {
    return http.get("/racas");
  }

  getServicos() {
    return http.get("/servicos");
  }

  getProdutos() {
    return http.get("/produtos");
  }

  getProduto(id: string) {
    return http.get(`/produtos/${id}`);
  }
}

export default new DataService();