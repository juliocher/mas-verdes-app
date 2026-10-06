import { ProductItem } from './catalog.types';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

export interface CustomerOrderInfo {
  nombre: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  notas?: string;
}
