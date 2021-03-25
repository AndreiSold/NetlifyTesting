import axios from 'axios';
import { Product } from 'src/models/product';

export class ProductsService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAllProducts(): Promise<Product[]> {
    return (await axios.get(`${this.baseUrl}/products/`)).data;
  }

  async getProductById(id: string): Promise<Product> {
    return (await axios.get(`${this.baseUrl}/products/${id}`)).data;
  }
}

export const productsService = new ProductsService(
  process.env.REACT_APP_API_URL ?? 'https://fd-mp-dev.azurefd.net/core/api'
);
