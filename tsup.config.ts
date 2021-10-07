// tsup.config.ts
import type { Options } from "tsup"

export const tsup: Options = {
	splitting: false,
	sourcemap: true,
	clean: true,
	// minify: true,
	entryPoints: ["lib/index.ts", "lib/utils.ts", "lib/form.ts"],
	format: ["cjs", "esm"],
	external: ["react"],
	dts: true,
	jsxFactory: "h",
}
