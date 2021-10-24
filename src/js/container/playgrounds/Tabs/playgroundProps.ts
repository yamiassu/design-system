// Interfaces
import { PlaygroundDescriptor } from "@lib"

const playgroundProps: Record<string, PlaygroundDescriptor> = {
	children: {
		required: true,
		description: "All tabs to get data from",
		type: "unavailable",
	},
	selected: {
		description: "Tab to be displayed",
	},
	side: {
		type: "boolean",
		description: "Place the tabs buttons on the side",
	},
	p: {
		type: "input",
		description: "Internal padding for the tab content",
	},
}

export default playgroundProps