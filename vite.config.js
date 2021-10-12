import path, { resolve } from "path"

// vite.config.js
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index"),
        brochure: resolve(__dirname, "brochure/index.html")
      }
    }
  },
  resolve: {
    alias: {
      $: path.resolve(__dirname, "./lib")
    }
  },
  assetsInclude: ["**/*.html"]
  // publicDir: false
}
