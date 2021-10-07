// Packages
import { h } from "preact"
import { useContext } from "preact/hooks"

// Contexts
import GroupContext from "../../contexts/group"

// Component
import Props from "./props"

/** Wraps inputs inside of it */
export default function Group(props: Props): any {

	// -------------------------------------------------
	// Properties
	// -------------------------------------------------

	// contexts
	const context = useContext(GroupContext)

	// constants
	const position = context ? (context + "." + props.name) : props.name

	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<GroupContext.Provider value={position}>
			<div {...props}>
				{props.children}
			</div>
		</GroupContext.Provider>
	)
}
