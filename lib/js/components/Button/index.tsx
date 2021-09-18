// Component
import Props from "./props"
import { buttonCss } from "./style"

export default function Button(props: Props) {
	return <button class={buttonCss(props)}>{props.children}</button>
}