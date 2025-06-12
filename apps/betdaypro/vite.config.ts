import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envConfig from '../env.config';

const targetEnv = process.env.APP_ENV || 'betday';
const injected = envConfig[targetEnv] || {};

const defineEnv = Object.fromEntries(
  Object.entries(injected).map(([key, value]) => [`import.meta.env.${key}`, JSON.stringify(value)])
);

export default defineConfig({
  plugins: [react()],
  define: defineEnv,
});
