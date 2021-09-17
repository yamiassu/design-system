import { ThemeProvider } from "@lib"
import { render } from "preact"
import { App } from "./app"

render(<ThemeProvider><App /></ThemeProvider>, document.getElementById("app")!)
