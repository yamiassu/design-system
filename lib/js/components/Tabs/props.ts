// Packages
import type { VariantProps } from "@stitches/react"

// Component
import { containerCss } from "./style"

export interface TabsPropsInterface extends VariantProps<typeof containerCss> {
	children: TabPropsInterface | TabPropsInterface[];

	selected?: string;
	onSelect?: (id: string) => void;
}

export interface TabPropsInterface {
	id?: string;
	label: string;
	children: any;
}