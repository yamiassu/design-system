// Packages
import type { VariantProps } from "@stitches/react"

// Component
import { selectCss } from "./style"

export default interface PropsInterface extends VariantProps<typeof selectCss> {
	// required
	name: string;
	options?: {value: string; label: string}[] | Record<string, string> | string[];
	children?: JSX.Element[];

	// optional
	required?: boolean;
	tooltip?: any;
	label?: string | JSX.Element | JSX.Element[];
	placeholder?: string;
}