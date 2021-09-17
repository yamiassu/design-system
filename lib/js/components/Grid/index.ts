// Theme
import { styled } from "../../../theme"

// Utils
import { perColumn, perDirection } from "../../utils/layout"

// Types
import type { PerColumnType, PerDirectionType } from "../../../types/utility"

// -------------------------------------------------
// Column settings
// -------------------------------------------------


const col = perColumn((index, total) => ({width: `${index / total * 100}%`}), false) as PerColumnType

// -------------------------------------------------
// Offset settings
// -------------------------------------------------

const offset = perColumn((index, total) => ({marginLeft: `${index / total * 100}%`})) as PerColumnType<true>

// -------------------------------------------------
// Padding settings
// -------------------------------------------------

const p = perDirection((dirs, index) => dirs.reduce((prev, curr) => ({...prev, [`padding-${curr}`]: `calc(${index} * $padding)`}), {})) as PerDirectionType

// -------------------------------------------------
// Margin settings
// -------------------------------------------------

const m = perDirection((dirs, index) => dirs.reduce((prev, curr) => ({...prev, [`margin-${curr}`]: `calc(${index} * $margin)`}), {})) as PerDirectionType

// -------------------------------------------------
// Component
// -------------------------------------------------

const Grid = styled("div", {
	// default styling
	display: "flex",

	// variancy
	variants: {
		m: {
			...m,
			"l-a": {marginLeft: "auto"},
			"r-a": {marginRight: "auto"},
			"a": {margin: "auto"},
		},
		p,
		col,
		offset,
		content: {
			left: {
				justifyContent: "left",
			},
			right: {
				justifyContent: "right",
			},
			center: {
				justifyContent: "center",
			},
			around: {
				justifyContent: "space-around",
			},
			between: {
				justifyContent: "space-between",
			},
			evenly: {
				justifyContent: "space-evenly",
			},
		},
		container: {
			true: {
				"@initial": { width: "$containerXS", margin: "auto" },
				"@xs": { width: "$containerXS", margin: "auto" },
				"@sm": { width: "$containerSM", margin: "auto" },
				"@md": { width: "$containerMD", margin: "auto" },
				"@lg": { width: "$containerLG", margin: "auto" },
				"@xl": { width: "$containerXL", margin: "auto" },
				"@xxl": { width: "$containerXXL", margin: "auto" },
			},
		},
	},

	defaultVariants: {
		p: "1",
	},
})

export default Grid