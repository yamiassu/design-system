// Packages
import { h, createElement } from "preact"
import { Link } from "react-router-dom"

// Component
import { ItemProps } from "../props"
import { itemCss } from "../style"

export default function DropdownItem(props: ItemProps) {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return createElement((props.to ? Link : "button") as any, { ...props, class: itemCss({}) })
}