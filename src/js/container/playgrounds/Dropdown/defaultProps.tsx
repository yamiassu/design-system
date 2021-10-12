import { h, Fragment } from "preact"
import { Dropdown } from "@lib"

const playGroundDefaultProps = {
	label: "Dropdown container",
	children: (
		<>
			<Dropdown.Item to="test">Dropdown item 1</Dropdown.Item>
			<Dropdown.Item>Dropdown item 2</Dropdown.Item>
			<Dropdown.Item>Dropdown item 3</Dropdown.Item>
		</>
	),
}

export default playGroundDefaultProps