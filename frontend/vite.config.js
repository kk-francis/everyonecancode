export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  server: {
    hmr: {
        protocol: hmrRemoteProtocol,
        host: hmrRemoteHost,
        port: hmrPort,
        clientPort: hmrRemotePort
    }
  },
});