/**
 * ### getColums
 *
 * Get hardcoded value of quantity of columns available
 *
 * @param {boolean} nullable Does zero columns count?
 * @returns
 */
export const getColumns = (nullable = true) => Array.from(Array(12 + (nullable ? 1:0)))

/**
 * ## getDirections
 *
 * Get all available hardcoded directions
 *
 * @returns
 */
export const getDirections = () => ({
	"": [""],
	t: ["top"],
	b: ["bottom"],
	l: ["left"],
	r: ["right"],
	x: ["left", "right"],
	y: ["top", "bottom"],
} as const)

/**
 * ### getDirectionsLength
 *
 * @returns Array with length of directions
 */
export const getDirectionsLength = () => Array.from(Array(5))

/**
 * ### perColumn
 *
 * @param {Function} cb Callback to return each row of the variant
 * @param nullable Can the rule be applied to zero?
 * @returns Row for insert into variant
 */
export const perColumn = (cb: ((index: number, total: number) => Record<string, string | number>), nullable = true) =>
	getColumns(nullable)
		.reduce(
			(prev, _, index, arr) => ({
				...prev,
				[index + (nullable ? 0:1)]: cb(index + (nullable ? 0:1), arr.length - (nullable ? 1:0)),
			})
			, {},
		)

/**
 * ### perDirection
 *
 * @param {string} prefix prefix to attach to variants
 * @param {Function} cb Callback to define variant object
 * @returns Row for insert into variant
 */
export const perDirection = (cb: ((directions: string[], index: number) => Record<string, string | number>)) => {
	const directions = getDirections()
	const length = getDirectionsLength()

	return Object
		.keys(directions)
		.map(key => [key, (directions as any)[key]] as const)
		.reduce((prev, curr) =>
			length.reduce((prev, _, index) => ({
				...prev,
				[`${curr[0]}${curr[0] !== "" ? "-":""}${index}`]: cb(curr[1], index),
			}), prev)
		, {})
}