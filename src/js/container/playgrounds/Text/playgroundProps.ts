// Interfaces
import { PlaygroundDescriptor } from "@lib"

const textPlaygroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		type: "text",
		required: true,
		description: "The content to be rendered inside the button",
	},
	size: {
		group: "Customization",
		type: "number",
		description: "Size based on HTML header tag, the higher the value, the smaller it is",
	},
}

export default textPlaygroundProps