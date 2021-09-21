// Styles
import { Tooltip, Button } from "../.."
import { containerCss } from "../../style/form"

export function filters(value: any, filterslist: ((value: any) => any) | (Array<(value: any) => any>) | undefined): any {
	let initialvalue = value

	// List not initialized
	if (filterslist === undefined) return initialvalue

	// Check if is list
	if (typeof filterslist !== "object") return filterslist(initialvalue)

	// Loop all the filters
	for (let i = 0; i < filterslist.length; i++) {
		initialvalue = filterslist[i](initialvalue)
	}

	return initialvalue
}

export function validates(value: any, validationlist: ((value: any) => any) | (Array<(value: any) => any>) | undefined): any {
	let initialvalue = undefined

	// List not initialized
	if (validationlist === undefined) return undefined

	// Check if is list
	if (typeof validationlist !== "object") return validationlist(value)

	// Loop all the filters
	for (let i = 0; i < validationlist.length; i++) {
		initialvalue = validationlist[i](value)
	}

	return initialvalue
}

export const wrapUtils = (props: { name: string; label?: string | JSX.Element | JSX.Element[]; tooltip?: any }) => (input: JSX.Element) => {
	return (
		<div class={containerCss()}>
			{
				props.label &&
				<label htmlFor={props.name}>
					{props.label} {props.tooltip && <Tooltip position="bottom-left" maxWidth={200} content={props.tooltip}><Button size="sm" icon>i</Button></Tooltip>}
				</label>
			}
			{input}
		</div>
	)
}