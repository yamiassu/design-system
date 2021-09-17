// Types
import { ColorMapping } from "../../types/utility"

export const getColorable = (cb: ((color: string) => Record<string, string>)) => ["primary", "secondary", "dark", "light", "warning", "danger", "success"].reduce((prev, curr) => ({...prev, [curr]: cb(curr)}), {})

export const getColors = () => getColorable(color => ({color: `$${color}`})) as ColorMapping

export const getBackgrounds = () => getColorable(color => ({backgroundColor: `$${color}`})) as ColorMapping