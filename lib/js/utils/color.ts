// Types
import { ColorMapping } from "../../types/utility"

// Theme
import theme from "../../theme"

export const getColorable = (cb: ((color: string) => Record<string, string>)) => Object.keys(theme.config.theme.colors).reduce((prev, curr) => ({...prev, [curr]: cb(curr)}), {})

export const colors = getColorable(color => ({color: `$${color}`})) as ColorMapping

export const bgColors = getColorable(color => ({backgroundColor: `$${color}`, colorFromBg: color})) as ColorMapping

export const borderColors = getColorable(color => ({borderColor: `$${color}`})) as ColorMapping
