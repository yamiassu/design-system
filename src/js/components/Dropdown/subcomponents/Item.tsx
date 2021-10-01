// Packages
import { createElement } from "preact"
import { Link } from "react-router-dom"

// Component
import { ItemProps } from "../props"
import { itemCss } from "../style"

export default function DropdownItem(props: ItemProps) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return createElement((props.to ? Link : "div") as any, { ...props, class: itemCss({}) })
}