// Packages
import { createElement } from "react"
import { Link } from "react-router-dom"

// Component
import Props from "./props"
import { buttonCss } from "./style"

export default function Button(props: Props) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return createElement(
		props.to ? Link : "button",
		{
			...props,
			to: props.to!,
			className: buttonCss({
				...props,
				color: props.color || (props.to ? "transparent" : undefined),
			}),
		} as any,
	)
}