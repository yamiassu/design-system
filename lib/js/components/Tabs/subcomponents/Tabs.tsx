// Packages
import { h } from "preact"
import { useEffect, useMemo, useState } from "preact/hooks"

// Component
import { buttonCss, containerCss } from "../style"
import { TabPropsInterface, TabsPropsInterface } from "../props"

export default function Tabs (props: TabsPropsInterface) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// states
	const [selected, setselected] = useState(props.selected || "")

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.selected && props.selected !== selected) setselected(props.selected)
	}, [props.selected])

	useEffect(() => {
		if (props.onSelect) props.onSelect(selected)
	}, [selected])

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const tabs = useMemo(() => {
		if (Array.isArray(props.children)) return props.children

		if (props.children.children && props.children.label) return [props.children]

		const { props: childprops } = props.children as any

		return Array.isArray(childprops.children) ? childprops.children : [childprops.children]
	}, []).map((i: any) => i.props) as TabPropsInterface[]

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<div class={containerCss({side: props.side, p: props.p})}>
			<div>{tabs.map(i =>
				<button
					class={buttonCss({ active: (i.id || i.label) === selected })}
					onClick={() => setselected(i.id || i.label)}
				>
					{i.label}
				</button>,
			)}</div>

			<div>
				{selected && tabs.find(i => (i.id || i.label) === selected)?.children}
			</div>
		</div>
	)
}