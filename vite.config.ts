import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(), 
        tailwindcss(), 
        visualizer({
            open: true,
            template: "treemap",
            // Use relative paths
            projectRoot: /^.*?[\\/]youtube[\\/]?/
        }),
    ],
    base: "/",
    appType: "spa",
    build: {
        // minify: false
    },
    server: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
})