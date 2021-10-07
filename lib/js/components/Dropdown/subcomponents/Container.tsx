//Packages
import { h } from "preact"
import { useEffect, useState } from "preact/hooks"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

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

	useEffect(() => {
		if (props.onClick) props.onClick(open)
	}, [open])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={containerCss({})} onClick={() => setopen(o => !o)}>
			<span>{props.label} {open ? <FaChevronUp /> : <FaChevronDown />}</span>

			<div class={dropCss({ inline: props.inline, open })}>
				{props.children}
			</div>
		</div>
	)
}