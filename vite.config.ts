// Packages
import { resolve } from "path"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import packageJson from "./package.json"

const path = (file) => resolve(__dirname, file)
const deps = {...packageJson.dependencies,...packageJson.devDependencies}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@lib": path("lib"),
		},
	},
	plugins: [
		tsconfigPaths(),
		{
			name: "preact:config",
			config() {
				return {
					esbuild: {
						jsxFactory: "h",
						jsxFragment: "Fragment",
					},
					resolve: {
						alias: {
							"react-dom/test-utils": "preact/test-utils",
							"react-dom": "preact/compat",
							react: "preact/compat",
						},
					},
				}
			},
		},
	],
	build: {
		lib: {
			entry: path("lib/index.ts"),
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
