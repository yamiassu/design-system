//Packages
import { useState } from "preact/hooks"

// Component
import { containerCss, dropCss } from "../style"
import { ContainerProps } from "../props"

export default function DropdownContainer(props: ContainerProps) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [open, setopen] = useState(false)

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	return (
		<div class={containerCss({})} onClick={() => setopen(o => !o)}>
			<span>{props.label} <i class={`fa fa-chevron-${open ? "up" : "down"}`} /></span>

			<div class={dropCss({ inline: props.inline, open })}>
				{props.children}
			</div>
		</div>
	)
}