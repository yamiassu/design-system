// Packages
import { resolve } from "path"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import tsconfigPaths from "vite-tsconfig-paths"

const path = (file) => resolve(__dirname, file)

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@lib": path("lib"),
		},
	},
	plugins: [tsconfigPaths(), preact()],
	build: {
		lib: {
			entry: path("src/index.ts"),
			name: "@yamiassu/layout",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ["preact"],
			output: {
				sourcemap: true,
				globals: {
					preact: "preact",
				},
			},
			plugins: [tsconfigPaths()],
		},
	},
})
