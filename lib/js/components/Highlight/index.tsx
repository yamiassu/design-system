// Packages
import { generateHightlight } from "@lib/js/utils/text"
import { h } from "preact"

// Component
import Props from "./props"
import { highlightCss, containerCss, nameCss } from "./style"

export default function Highlight(props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<pre class={containerCss()}>
			{props.name && <div class={nameCss()}>{props.name}</div>}
			<code
				class={highlightCss({})}
				dangerouslySetInnerHTML={{
					__html: generateHightlight(props.data || props.children as string, props.code),
				}}
			/>
		</pre>
	)
}