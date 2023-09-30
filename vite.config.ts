import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), ViteMinifyPlugin({})],
})
