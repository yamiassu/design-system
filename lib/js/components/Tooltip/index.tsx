// Packages
import { useState } from "preact/hooks"

// Component
import type Props from "./props"
import { tooltipCss, containerCss } from "./style"

export default function Tooltip(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [hovering, sethovering] = useState(false)

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={containerCss(props)} onMouseEnter={() => sethovering(true)} onMouseLeave={() => sethovering(false)}>
			<div
				style={{ maxWidth: props.maxWidth && `${props.maxWidth}px`, maxHeight: props.maxHeight && `${props.maxHeight}px` }}
				class={tooltipCss({ ...props, active: props.active || hovering })}
			>
				{props.content}
			</div>

			{props.children}
		</div>
	)
}