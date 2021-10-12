// Component
import Props from "./props"

// Utils
import { generateText } from "../../utils/text"

export default function Text(props: Props): any {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return generateText(props.data || props.children)
}