// Packages
import { resolve } from "path"
import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import tsconfigPaths from "vite-tsconfig-paths"
import packageJson from "./package.json"
import dts from "vite-dts"

const path = (file) => resolve(__dirname, file)
const deps = {...packageJson.dependencies,...packageJson.devDependencies}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@lib": path("src"),
		},
	},
	plugins: [tsconfigPaths(), preact(), dts()],
	build: {
		lib: {
			entry: path("src/index.ts"),
			name: "@yamiassu/layout",
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: Object.keys(deps),
			output: {
				globals: {
					preact: "preact",
				},
			},
			plugins: [tsconfigPaths()],
		},
	},
})
