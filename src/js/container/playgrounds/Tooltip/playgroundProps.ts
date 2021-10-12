// Interfaces
import { PlaygroundDescriptor } from "@lib"

const playgroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		description: "The content to be rendered inside the button",
	},
	content: {
		description: "Disables user interaction with user, it's automatically turned on internally if the form asks to (so you don't have to).",
	},
	active: {
		type: "boolean",
		description: "Force the tooltip to be displayed",
	},
	position: {
		group: "Customization",
		type: "select",
		options: [ "bottom", "left", "top", "right", "top-left", "top-right", "bottom-left", "bottom-right" ],
		description: "Where the tooltip should be displayed relative to the content",
	},
	maxWidth: {
		group: "Customization",
		type: "number",
		description: "Force the tooltip to adopt a max width and break content. Leave zero or undefined for no max width.",
	},
	maxHeight: {
		group: "Customization",
		type: "number",
		description: "Force the tooltip to adopt a max height and break content. Leave zero or undefined for no max height.",
	},
}

export default playgroundProps