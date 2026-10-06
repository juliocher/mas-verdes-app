import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProductItem } from '../types/catalog.types';
import { CartItem, CustomerOrderInfo } from '../types/cart.types';
import { OFFICIAL_PHONE } from '../services/whatsapp.service';

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: ProductItem, quantity?: number) => void;
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalAmount: number;
  sendWhatsAppOrder: (customer: CustomerOrderInfo) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const STORAGE_KEY = 'mas_verdes_cart_items_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: ProductItem, quantity = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      const maxStock = product.stock ?? 99;
      if (existingIndex > -1) {
        const next = [...prev];
        const newQty = Math.min(next[existingIndex].quantity + quantity, maxStock);
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: newQty,
        };
        return next;
      }
      return [...prev, { product, quantity: Math.min(quantity, maxStock) }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => {
        if (item.product.id === productId) {
          const maxStock = item.product.stock ?? 99;
          return { ...item, quantity: Math.min(quantity, maxStock) };
        }
        return item;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalAmount = items.reduce((sum, item) => {
    const price = item.product.price || 0;
    return sum + price * item.quantity;
  }, 0);

  const sendWhatsAppOrder = (customer: CustomerOrderInfo) => {
    if (items.length === 0) return;

    let message = `🌱 *¡HOLA MÁS VERDES! Deseo realizar un pedido*\n\n`;
    message += `👤 *Cliente:* ${customer.nombre.trim()}\n`;
    if (customer.telefono) {
      message += `📱 *Teléfono:* ${customer.telefono.trim()}\n`;
    }
    if (customer.ciudad || customer.direccion) {
      message += `📍 *Ubicación:* ${[customer.direccion, customer.ciudad].filter(Boolean).join(', ')}\n`;
    }
    if (customer.notas) {
      message += `📝 *Nota especial:* ${customer.notas.trim()}\n`;
    }

    message += `\n📦 *DETALLE DE PRODUCTOS:*\n`;
    message += `───────────────────────\n`;

    items.forEach((item, idx) => {
      const p = item.product;
      const unit = p.unit ? ` (${p.unit})` : '';
      const priceStr = p.price ? ` - S/ ${(p.price * item.quantity).toFixed(2)}` : '';
      message += `${idx + 1}. *${p.name}*${unit}\n   ▸ Cantidad: ${item.quantity}${priceStr}\n`;
    });

    message += `───────────────────────\n`;
    if (totalAmount > 0) {
      message += `💰 *TOTAL ESTIMADO:* S/ ${totalAmount.toFixed(2)}\n\n`;
    }
    message += `Por favor confirmen la disponibilidad y coordinamos el método de entrega y pago (Yape / Plin / Transferencia). ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${OFFICIAL_PHONE}?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        addToCart: addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalAmount,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
