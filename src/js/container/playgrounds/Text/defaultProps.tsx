const textPlayGroundDefaultProps = {
	children: [
		{ type: "title", data: "My cool text" },
		"It's really cool",
		{
			type: "column",
			config: { direction: "row" },
			data: [
				{ type: "column", data: "first column" },
				{ type: "column", data: "second column" },
			],
		},
	],
}

export default textPlayGroundDefaultProps