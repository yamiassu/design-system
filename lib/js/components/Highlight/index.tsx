// Packages
import { generateHightlight } from "@lib/js/utils/text"
import { h } from "preact"

// Component
import Props from "./props"

export default function Highlight(props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<pre>
			{generateHightlight(props.data || props.children as string, props.code)}
		</pre>
	)
}