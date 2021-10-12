// Interfaces
import { PlaygroundDescriptor } from "@lib"

const playgroundProps: Record<string, PlaygroundDescriptor> = {
	code: {
		type: "select",
		options: ["javascript", "html", "xml", "bash", "css", "markdown", "json", "scss", "sql", "typescript", "yaml", "plain"],
		description: "The parser for highlight to be used",
	},
	data: {
		required: true,
		description: "The content to be displayed inside the highlight. Could also use as children",
	},
	name: {
		description: "Filename for the highlight code",
	},
}

export default playgroundProps