// Theme
import { styled } from "../../../theme"

// Utils
import { colors, bgColors } from "../../utils/color"
import { perColumn, padding, margin } from "../../utils/layout"

// Types
import type { PerColumnType } from "../../../types/utility"

// -------------------------------------------------
// Column settings
// -------------------------------------------------

const col = perColumn((index, total) => ({width: `${index / total * 100}%`}), false) as PerColumnType

// -------------------------------------------------
// Offset settings
// -------------------------------------------------

const offset = perColumn((index, total) => ({marginLeft: `${index / total * 100}%`})) as PerColumnType<true>

// -------------------------------------------------
// Component
// -------------------------------------------------

const Grid = styled("div", {
	// variancy
	variants: {
		m: {
			...margin,
			"l-a": {marginLeft: "auto"},
			"r-a": {marginRight: "auto"},
			"a": {margin: "auto"},
		},
		p: padding,
		col: {
			...col,
			auto: { width: "auto" },
			fill: { width: "100%" },
		},
		fill: {
			true: {
				width: "100%",
				dislay: "flex",
				flexDirection: "column",
			},
		},
		offset,
		color: colors,
		background: bgColors,
		direction: {
			column: { flexDirection: "column", display: "flex" },
			row: { flexDirection: "row", display: "flex" },
		},
		horizontal: {
			left: {
				display: "flex",
				justifyContent: "left",
			},
			right: {
				display: "flex",
				justifyContent: "right",
			},
			center: {
				display: "flex",
				justifyContent: "center",
			},
			around: {
				display: "flex",
				justifyContent: "space-around",
			},
			between: {
				display: "flex",
				justifyContent: "space-between",
			},
			evenly: {
				display: "flex",
				justifyContent: "space-evenly",
			},
		},
		vertical: {
			top: {
				display: "flex",
				alignItems: "start",
			},
			bottom: {
				display: "flex",
				alignItems: "end",
			},
			center: {
				display: "flex",
				alignItems: "center",
			},
			fill: {
				display: "flex",
				alignItems: "stretch",
			},
		},
		container: {
			true: {
				"@initial": { width: "$containerXS", maxWidth: "100%", margin: "auto" },
				"@xs": { width: "$containerXS", maxWidth: "100%", margin: "auto" },
				"@sm": { width: "$containerSM", maxWidth: "100%", margin: "auto" },
				"@md": { width: "$containerMD", maxWidth: "100%", margin: "auto" },
				"@lg": { width: "$containerLG", maxWidth: "100%", margin: "auto" },
				"@xl": { width: "$containerXL", maxWidth: "100%", margin: "auto" },
				"@xxl": { width: "$containerXXL", maxWidth: "100%", margin: "auto" },
			},
		},
	},

	defaultVariants: {
		p: "1",
	},
})

export default Grid