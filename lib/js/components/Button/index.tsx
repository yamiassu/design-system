// Component
import Props from "./props"
import { buttonCss } from "./style"

export default function Button(props: Props) {
	return <button disabled={props.disabled === true} class={buttonCss(props)}>{props.children}</button>
}