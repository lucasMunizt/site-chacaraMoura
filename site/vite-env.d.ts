/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_CONEXAO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
