// Component
import { inputCss } from "./style"
import Props from "./props"

// Hooks
import useField from "../../hooks/useField"

// Utils
import { wrapUtils } from "../../utils/form"

export default function Toggle(props: Props) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// hooks
	const [value, setValue] = useField(props)

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return wrapUtils(props)(
		<input
			type="checkbox"
			checked={value}
			onChange={() => setValue(!value)}
			name={props.name}
			class={inputCss(props)}
			placeholder={props.placeholder}
		/>,
	)
}