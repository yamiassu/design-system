// Types
import { IncreaseSizes } from "@lib/types/utility"

/**
 * ### textSize
 *
 * Default text size
 */
export const textSize = ({
	sm: { fontSize: "0.8em" },
	md: { fontSize: "1em" },
	lg: { fontSize: "1.2em" },
})

/**
 * ### textSize
 *
 * Default text size
 */
export const invertedTextSize = Array
	.from(Array(6))
	.map((_, index) => (index + 3))
	.reverse()
	.reduce((prev, curr, index) => ({...prev, [`${index + 1}`]: {fontSize: `${curr / 3}em`}}), {}) as Record<IncreaseSizes, Record<string, string | number>>
