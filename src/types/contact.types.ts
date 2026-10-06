export interface ContactFormData {
  nombre: string;
  apellido?: string;
  telefono: string;
  interes: 'hierbas' | 'flores' | 'sales' | 'muna' | 'ambos' | 'comunidad' | '';
  mensaje: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}
