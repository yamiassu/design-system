// Packages
import type { VariantProps } from "@stitches/react"

// Component
import { tooltipCss, containerCss } from "./style"

type PropsInterface = VariantProps<typeof tooltipCss> & VariantProps<typeof containerCss> & {
	content: any;
	children: any;

	maxWidth?: number;
	maxHeight?: number;
}

export default PropsInterface