// Packages
import type { VariantProps } from "@stitches/react"

// Component
import { inputCss } from "./style"

export default interface PropsInterface extends VariantProps<typeof inputCss> {
	// required
	name: string;

	// optional
	required?: boolean;
	tooltip?: any;
	label?: string | JSX.Element | JSX.Element[];
	placeholder?: string;
}