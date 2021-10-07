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