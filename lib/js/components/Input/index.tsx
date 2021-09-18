// Component
import { containerCss, inputCss } from "./style"
import Props from "./props"

export default function Input(props: Props) {
	return (
		<div class={containerCss()}>
			{props.label && <label htmlFor={props.name}>{props.label}</label>}
			<input
				name={props.name}
				class={inputCss(props)}
				placeholder={props.placeholder}
			/>
		</div>
	)
}