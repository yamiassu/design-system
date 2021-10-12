// Packages
import React from "react"
import type { VariantProps } from "@stitches/react"

// Component
import { buttonCss } from "./style"

export default interface PropsInterface extends VariantProps<typeof buttonCss> {
	// required
	children: any;

	// optional
	type?: React.HTMLProps<HTMLButtonElement>["type"];
	onClick?: () => void;
	to?: string;
}