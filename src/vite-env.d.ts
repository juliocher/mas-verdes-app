/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  readonly VITE_EMAILJS_SERVICE_ID?: string;
  readonly VITE_EMAILJS_TEMPLATE_CONTACTO?: string;
  readonly VITE_EMAILJS_TEMPLATE_RECLAMACION?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
