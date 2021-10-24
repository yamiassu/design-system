// Packages
import { h, Fragment } from "preact"
import { Tabs } from "@lib"

const playGroundDefaultProps = {
	children: (
		<>
			<Tabs.Tab id="1" label="First tab">
				This is the content of the first tab
			</Tabs.Tab>
			<Tabs.Tab id="2" label="Second tab">
				This is the content of the second tab
			</Tabs.Tab>
		</>
	),
	selected: "1",
}

export default playGroundDefaultProps