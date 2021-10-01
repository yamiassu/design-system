// Packages
import type { VariantProps } from "@stitches/react"

// Component
import { textCss } from "./style"

export default interface PropsInterface extends VariantProps<typeof textCss> {
	// required
	children?: string | any;
	data?: string | any;
}