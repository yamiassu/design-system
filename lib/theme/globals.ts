import { globalCss } from "."

const globalStyles = globalCss({
	"@import": "url(\"https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;700;900&display=swap\")",
	"*": {
		fontFamily: "\"Urbanist\", sans-serif",
	},
	body: {
		margin: 0,
		padding: 0,
	},
})

export default globalStyles