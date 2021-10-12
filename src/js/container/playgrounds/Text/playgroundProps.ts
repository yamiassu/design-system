// Interfaces
import { PlaygroundDescriptor } from "@lib"

const playgroundProps: Record<string, PlaygroundDescriptor> = {
	name: {
		required: true,
		description: "Identifier for the field to be indexed on the form",
	},
	required: {
		type: "boolean",
		description: "Is this field required when submitting the form?",
	},
	disabled: {
		type: "boolean",
		description: "Disable user interaction with the form",
	},
	label: {
		description: "Label for identifying input intention",
	},
	tooltip: {
		description: "Tooltip to followup with more indepth information about the input",
	},
	placeholder: {
		description: "Placeholder to be displayed when there is no value present",
	},
	color: {
		group: "Customization",
		type: "select",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info"],
		description: "Change text color",
	},
	background: {
		group: "Customization",
		type: "select",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info", "transparent"],
		description: "Change background color",
	},
	border: {
		group: "Customization",
		type: "select",
		options: ["primary", "secondary", "warning", "danger", "success", "light", "dark", "info", "transparent"],
		description: "Change border color",
	},
}

export default playgroundProps