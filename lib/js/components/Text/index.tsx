// Packages
import { h } from "preact"

// Component
import { inputCss } from "./style"
import Props from "./props"

// Hooks
import useField from "../../hooks/useField"

// Utils
import { wrapUtils } from "../../utils/form"

export default function Text(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [value, setValue] = useField(props)

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return wrapUtils(props)(
		<textarea
			value={value}
			name={props.name}
			onChange={setValue}
			class={inputCss(props)}
			disabled={props.disabled}
			placeholder={props.placeholder}
		/>,
	)
}