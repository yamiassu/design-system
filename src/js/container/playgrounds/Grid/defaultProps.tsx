// Packages
import { h, Fragment } from "preact"
import { Grid } from "@lib"

const playGroundDefaultProps = {
	children: <><Grid background="light">First grid</Grid><Grid background="dark">Second grid</Grid><Grid background="light">Third grid</Grid></>,
	direction: "row",
	background: "primary",
}

export default playGroundDefaultProps