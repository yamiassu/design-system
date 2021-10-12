// Interfaces
import { PlaygroundDescriptor } from "@lib"

const playgroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		type: "unavailable",
		description: "The content to be rendered inside the button",
	},
	m: {
		group: "Spacing",
		description: "Margin properties. Ex: t-2, 5, x-3",
	},
	p: {
		group: "Spacing",
		description: "Padding properties",
	},
	fill: {
		group: "Spacing",
		type: "boolean",
		description: "Make content width fill the parent space",
	},
	col: {
		group: "Layout",
		type: "number",
		description: "The size of the grid based on it's parent",
	},
	offset: {
		group: "Layout",
		type: "number",
		description: "The offset to the left based on the parent size",
	},
	direction: {
		group: "Layout",
		type: "select",
		description: "The orientation for the child components to behave",
		options: ["row", "column"],
	},
	horizontal: {
		group: "Layout",
		type: "select",
		description: "Children orientantion",
		options: ["left", "right", "center", "around", "between", "evenly"],
	},
	vertical: {
		group: "Layout",
		type: "select",
		description: "Children orientantion",
		options: ["top", "bottom", "center", "fill"],
	},
	container: {
		group: "Layout",
		type: "boolean",
		description: "A responsive container that centralizes content to the middle of screen",
	},
	background: {
		group: "Customization",
		type: "select",
		description: "Background and font color",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info"],
	},
	color: {
		group: "Customization",
		type: "select",
		description: "Font color that overrides background prop",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info"],
	},
}

export default playgroundProps