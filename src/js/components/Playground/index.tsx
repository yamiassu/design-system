// Packages
import { createElement } from "preact"
import { useEffect, useMemo, useState } from "preact/hooks"
import { Grid, Input, Text, Form, Toggle, Select, Title } from "../../../"

// Component
import { gridCss } from "./style"
import PropsInterface from "./props"

export default function Playground(props: PropsInterface) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// state
	const [componentProps, setComponentProps] = useState(props.defaultProps || {})

	// -------------------------------------------------
	// Effects
	// -------------------------------------------------

	useEffect(() => {
		if (props.defaultProps) setComponentProps(props.defaultProps)
	}, [props.defaultProps])

	// -------------------------------------------------
	// Memos
	// -------------------------------------------------

	const controls = useMemo(() => {
		const sorted = Object.keys(props.props).sort((a, b) => !props.props[a].group ? -1 : props.props[a].group === props.props[b].group ? 0 : 1)
		let lastGroup: string | undefined

		return sorted
			.map(key => {
				const prop = props.props[key]

				// select field
				if (prop.type === "select") {
					return [<Select required={prop.required} tooltip={prop.description} label={key} name={key} options={prop.options} />, prop] as const
				}

				// toggle field
				if (prop.type === "boolean") {
					return [<Toggle required={prop.required} tooltip={prop.description} label={key} name={key} />, prop] as const
				}

				// don't allow edition
				if (prop.type === "unavailable") {
					return [<Input required={prop.required} disabled tooltip={prop.description} label={key} name={key} />, prop] as const
				}

				return [<Input required={prop.required} tooltip={prop.description} label={key} name={key} />, prop] as const
			})
			// wrap controller with structure
			.map(controller => {
				const group = lastGroup !== controller[1].group ? controller[1].group : null
				lastGroup = controller[1].group

				return (
					<>
						{group && <Title size="4">{group}</Title>}
						{controller[0]}
						{props.minimal !== true && <Text p="b-2" size="sm">{controller[1].description}</Text>}
					</>
				)
			})
	}, [props.props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid direction="row" fill>
			<Grid col="4" css={{ height: "70vh", overflow: "auto" }}>
				<Form data={[componentProps, setComponentProps]}>
					{controls}
				</Form>
			</Grid>
			<Grid col="8" vertical="fill">
				<Grid fill horizontal="center" vertical="center" className={gridCss()}>
					{createElement(props.component, componentProps)}
				</Grid>
			</Grid>
		</Grid>
	)
}