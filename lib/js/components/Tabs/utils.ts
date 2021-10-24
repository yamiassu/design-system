// Interfaces
import { PerDirectionType } from "../../../types/utility"

// utils
import { perDirection } from "../../utils/layout"

export const padding = perDirection((dirs, index) => dirs.reduce((prev, curr) => ({
	"& > div:nth-child(2)": {
		...(prev as any)["& > div:nth-child(2)"],
		[`padding${curr === "" ? "":"-"}${curr}`]: `calc(${index} * $padding)`,
	},
}), {})) as PerDirectionType
