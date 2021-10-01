// Components
import { Grid, Title } from "../../../"

// Interfaces
import type { JsonTextType } from "../../../types/text"

const generateType = (text: JsonTextType) => ({
	"text": () => <p>{text.data}</p>,
	"title": () => <Title {...text.config}>{text.data}</Title>,
	"column": () => <Grid {...text.config}>{typeof text.data === "string" ? text.data : generateText(text.data)}</Grid>,
})[text.type || "text"]()

/**
 * ### generateText
 *
 * Transforms a json standarlized text format into formatting JSX
 *
 * @param text
 * @returns
 */
export default function generateText(text: string | JsonTextType | JsonTextType[]): JSX.Element | JSX.Element[] {
	// Pure text
	if (typeof text === "string") return <p>{text}</p>

	// single element
	if (!Array.isArray(text)) return generateType(text)

	// group
	return text.map(generateText) as any
}