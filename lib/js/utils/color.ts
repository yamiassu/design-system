// Types
import { ColorMapping } from "../../types/utility"

// Theme
import theme from "../../theme"

export const getColorable = (cb: ((color: string) => Record<string, string>)) => Object.keys(theme.config.theme.colors).reduce((prev, curr) => ({...prev, [curr]: cb(curr)}), {})

export const getColors = () => getColorable(color => ({color: `$${color}`})) as ColorMapping

export const getBackgrounds = () => getColorable(color => ({backgroundColor: `$${color}`, colorFromBg: color})) as ColorMapping

export const getBorders = () => getColorable(color => ({borderColor: `$${color}`})) as ColorMapping