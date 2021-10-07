// Interfaces
import { PlaygroundDescriptor } from "@lib"

const buttonPlaygroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		type: "text",
		description: "The content to be rendered inside the button",
	},
	disabled: {
		type: "boolean",
		description: "Disables user interaction with user, it's automatically turned on internally if the form asks to (so you don't have to).",
	},
	icon: {
		group: "Customization",
		type: "boolean",
		description: "Turns button into a rounded variant",
	},
	color: {
		group: "Customization",
		type: "select",
		description: "Change the color of the background and the content text.",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info", "transparent"],
	},
	size: {
		group: "Customization",
		type: "select",
		description: "Determine font size used in the button",
		options: ["sm", "md", "lg"],
	},
}

export default buttonPlaygroundProps