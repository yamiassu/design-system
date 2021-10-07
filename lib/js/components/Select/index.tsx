// Packages
import { h } from "preact"
import { Children } from "preact/compat"

// Component
import { selectCss } from "./style"
import Props from "./props"

// Hooks
import useField from "../../hooks/useField"

// Utils
import { wrapUtils } from "../../utils/form"
import { useMemo } from "preact/hooks"

export default function Select(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [value, setValue] = useField(props)

	// -------------------------------------------------
	// Options
	// -------------------------------------------------

	const options = useMemo(() => {
		// Options passed as children
		if (props.children) return Children
			.map(props.children, (child) => child)
			.filter(child => child.type === "select")
			.map(child => ({ value: child.props.value, label: child.props.children }))

		// Options passed as array
		if (Array.isArray(props.options)) {
			return props.options.map(option => {
				if (typeof option === "string") return { value: option, label: option }

				return option
			})
		}

		return []
	}, [props.options, props.children])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return wrapUtils(props)(
		<select
			type="checkbox"
			value={value}
			onChange={setValue}
			name={props.name}
			class={selectCss(props)}
			placeholder={props.placeholder}
		>
			{options.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
		</select>,
	)
}