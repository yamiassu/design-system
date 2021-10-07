// Interfaces
import { PlaygroundDescriptor } from "@lib"

const dropdownPlaygroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		type: "unavailable",
		required: true,
		description: "A list of dropdown elements to be displayed",
	},
	inline: {
		group: "Customization",
		type: "boolean",
		description: "Make content fit inside parent space",
	},
}

export default dropdownPlaygroundProps