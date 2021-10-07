// Theme
import { createTheme } from ".."

const darkTheme = createTheme({
	references: {
		color: "$colors$dark",
		background: "$colors$light",
	},
})

export default darkTheme