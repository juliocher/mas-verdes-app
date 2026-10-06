import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CustomerOrderInfo } from '../../types/cart.types';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalAmount,
    sendWhatsAppOrder,
  } = useCart();

  const [customer, setCustomer] = useState<CustomerOrderInfo>({
    nombre: '',
    telefono: '',
    ciudad: 'Urubamba / Cusco',
    direccion: '',
    notas: '',
  });

  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.nombre.trim()) {
      setFormError('Por favor ingresa tu nombre para el pedido.');
      return;
    }
    setFormError('');
    sendWhatsAppOrder(customer);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(17, 34, 22, 0.65)',
          backdropFilter: 'blur(3px)',
          animation: 'fadeIn 0.25s ease-out',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--white)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1,
          animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--cream)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '1.4rem' }}>🛒</span>
            <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--green-dark)' }}>
              Tu Canasta Andina
            </h3>
            <span
              style={{
                backgroundColor: 'var(--green-dark)',
                color: 'var(--gold)',
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: 'var(--radius-full)',
              }}
            >
              {totalCount}
            </span>
          </div>

          <button
            onClick={closeCart}
            aria-label="Cerrar Canasta"
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              lineHeight: 1,
              cursor: 'pointer',
              color: 'var(--text-mid)',
              padding: '6px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-mid)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>🌱</div>
              <h4 style={{ color: 'var(--green-dark)', marginBottom: '8px' }}>Tu canasta está vacía</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
                Explora nuestras hierbas medicinales, flores frescas y sales de Maras cultivadas en Willoq.
              </p>
              <Button variant="primary" onClick={closeCart}>
                Explorar Colección
              </Button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item) => {
                const p = item.product;
                const unitPrice = p.price || 0;
                const lineTotal = unitPrice * item.quantity;

                return (
                  <div
                    key={p.id}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      padding: '12px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      backgroundColor: 'var(--bg-main)',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        borderRadius: 'var(--radius-xs)',
                        border: '1px solid var(--border-light)',
                      }}
                    />

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--green-dark)',
                          margin: '0 0 2px 0',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {p.name}
                      </h4>
                      {p.unit && (
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-light)', display: 'block' }}>
                          {p.unit}
                        </span>
                      )}
                      <span style={{ fontSize: '0.86rem', color: 'var(--green-mid)', fontWeight: 600 }}>
                        S/ {unitPrice.toFixed(2)} c/u
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        onClick={() => updateQuantity(p.id, item.quantity - 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '18px', textAlign: 'center', fontSize: '0.9rem', fontWeight: 600 }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(p.id, item.quantity + 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          backgroundColor: 'var(--white)',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '60px' }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--green-dark)' }}>
                        S/ {lineTotal.toFixed(2)}
                      </div>
                      <button
                        onClick={() => removeItem(p.id)}
                        title="Eliminar"
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#b91c1c',
                          fontSize: '0.75rem',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: '2px 0',
                        }}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                );
              })}

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                <button
                  onClick={clearCart}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-light)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                >
                  Vaciar toda la canasta
                </button>
              </div>

              {/* Collapsible Customer Info Form */}
              <div
                style={{
                  marginTop: '16px',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--cream)',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div
                  onClick={() => setShowCheckoutForm(!showCheckoutForm)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <strong style={{ fontSize: '0.92rem', color: 'var(--green-dark)' }}>
                    📝 Datos para la Entrega {customer.nombre ? `(${customer.nombre})` : '(Opcional)'}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--green-mid)' }}>
                    {showCheckoutForm ? 'Ocultar ▲' : 'Completar ▼'}
                  </span>
                </div>

                {showCheckoutForm && (
                  <form onSubmit={handleCheckout} style={{ marginTop: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        value={customer.nombre}
                        onChange={(e) => setCustomer({ ...customer, nombre: e.target.value })}
                        placeholder="Ej. Carmen Quispe"
                        required
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          fontSize: '0.88rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={customer.telefono}
                        onChange={(e) => setCustomer({ ...customer, telefono: e.target.value })}
                        placeholder="Ej. +51 987 654 321"
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          fontSize: '0.88rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Ciudad / Zona de Entrega
                      </label>
                      <select
                        value={customer.ciudad}
                        onChange={(e) => setCustomer({ ...customer, ciudad: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          fontSize: '0.88rem',
                          backgroundColor: 'var(--white)',
                        }}
                      >
                        <option value="Urubamba / Valle Sagrado">Urubamba / Valle Sagrado (Entrega Local)</option>
                        <option value="Cusco Ciudad">Cusco Ciudad</option>
                        <option value="Lima (Envío Nacional)">Lima (Envío Nacional Olva / Shalom)</option>
                        <option value="Otras Provincias del Perú">Otras Provincias del Perú</option>
                        <option value="Recojo en Comunidad Willoq">Recojo directo en Willoq</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Dirección o Referencia
                      </label>
                      <input
                        type="text"
                        value={customer.direccion}
                        onChange={(e) => setCustomer({ ...customer, direccion: e.target.value })}
                        placeholder="Ej. Hotel / Calle / Referencia"
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          fontSize: '0.88rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Notas o Instrucciones Especiales
                      </label>
                      <textarea
                        value={customer.notas}
                        onChange={(e) => setCustomer({ ...customer, notas: e.target.value })}
                        placeholder="Ej. Fecha de entrega, empaque especial para regalo..."
                        rows={2}
                        style={{
                          width: '100%',
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-xs)',
                          border: '1px solid var(--border-mid)',
                          fontSize: '0.88rem',
                          resize: 'none',
                        }}
                      />
                    </div>

                    {formError && (
                      <p style={{ color: '#b91c1c', fontSize: '0.82rem', margin: 0 }}>
                        {formError}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer with Total and WhatsApp Action */}
        {items.length > 0 && (
          <div
            style={{
              padding: '20px 24px',
              borderTop: '1px solid var(--border-light)',
              backgroundColor: 'var(--white)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '1rem', color: 'var(--text-mid)' }}>Total Estimado:</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--green-dark)', fontFamily: 'var(--font-serif)' }}>
                S/ {totalAmount.toFixed(2)}
              </span>
            </div>

            <Button
              variant="whatsapp"
              onClick={() => {
                if (showCheckoutForm && !customer.nombre.trim()) {
                  setFormError('Por favor indica tu nombre para enviar el pedido.');
                  return;
                }
                const customerData = customer.nombre.trim()
                  ? customer
                  : { ...customer, nombre: 'Cliente Web' };
                sendWhatsAppOrder(customerData);
              }}
              style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '14px 20px' }}
            >
              Pedir Canasta por WhatsApp ({totalCount} {totalCount === 1 ? 'producto' : 'productos'})
            </Button>

            <p style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '10px', marginBottom: 0 }}>
              ✓ Coordinación directa con Willoq · Pagos vía Yape, Plin y transferencia
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
