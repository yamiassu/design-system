// Packages
import { Grid, Input } from "@lib"
import { createElement } from "preact"
import { useEffect, useMemo, useState } from "preact/hooks"

// Component
import PropsInterface from "./props"

export default function Playground(props: PropsInterface) {
	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

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
		return Object.keys(props.props).map(prop => {
			return <Input label={prop} name={prop} />
		})
	}, [props.props])

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Grid direction="row" fill>
			<Grid col="6">
				{controls}
			</Grid>
			<Grid col="6" content="center">
				<Grid>
					{createElement(props.component, componentProps)}
				</Grid>
			</Grid>
		</Grid>
	)
}