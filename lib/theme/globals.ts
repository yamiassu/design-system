import { globalCss } from "."

const globalStyles = globalCss({
	"@import": "url(\"https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;700;900&display=swap\")",
	"*": {
		fontFamily: "\"Urbanist\", sans-serif",
		color: "$references$color",
		boxSizing: "border-box",
	},
	body: {
		margin: 0,
		padding: 0,
		backgroundColor: "$references$background",
		overflowY: "scroll",
	},
})

export default globalStyles