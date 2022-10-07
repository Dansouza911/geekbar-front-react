import { endpoint } from "helpers/endpoints";

export const product = {
  createProduct: () => `${endpoint.baseUrl}/cardapio`,
  listProducts: () => `${endpoint.baseUrl}/cardapio`,
  productById: (id: string) => `${endpoint.baseUrl}/cardapio/${id}`,
};
