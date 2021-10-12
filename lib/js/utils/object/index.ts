export function dig (obj : Record<string, any>, path : string, value? : any) : Record<string, any> | any {
	const pList 	= path.split(".")
	const len 	= pList.length
	let context = obj || {}

	for (let i = 0; i < len-1; i++) {
		const elem = pList[i]

		if( !(elem in context) ) context[elem] = {}

		context = context[elem]
	}

	if (value !== null && value !== undefined) {
		context[pList[len-1]] = value
		return obj
	}
	else {
		return context[pList[len-1]] === null ? "":context[pList[len-1]]
	}
}

export function omit (object: Record<string, any>, fields: string[]) {
	return Object
		.keys(object)
		.filter(i => !fields.includes(i))
		.reduce((prev, curr) => ({...prev, [curr]: object[curr]}), {})
}

export function compare (x: any, y: any) {
	// if both x and y are null or undefined and exactly the same
	if ( x === y ) return true

	// if they are not strictly equal, they both need to be Objects
	if ( ! ( x instanceof Object ) || ! ( y instanceof Object ) ) return false

	// they must have the exact same prototype chain, the closest we can do is
	// test there constructor.
	if ( x.constructor !== y.constructor ) return false

	for (const p in x) {
		// other properties were tested using x.constructor === y.constructor
		if ( ! x.hasOwnProperty( p ) ) continue

		// allows to compare x[ p ] and y[ p ] when set to undefined
		if ( ! y.hasOwnProperty( p ) ) return false

		// if they have the same strict value or identity then they are equal
		if ( x[ p ] === y[ p ] ) continue

		// Numbers, Strings, Functions, Booleans must be strictly equal
		if ( typeof( x[ p ] ) !== "object" ) return false

		// Objects and Arrays must be tested recursively
		if ( ! compare( x[ p ],  y[ p ] ) ) return false
	}

	for (const p in y)
		// allows x[ p ] to be set to undefined
		if ( y.hasOwnProperty( p ) && ! x.hasOwnProperty( p ) )
			return false

	return true
}