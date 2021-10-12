// Packages
import { h, isValidElement } from "preact"
import hightlight from "highlight.js/lib/common"

// Components
import { Grid, Title, Highlight } from "../../.."

// Interfaces
import type { JsonTextType } from "../../../types/text"

export function generateHightlight(text: string, code?: string) {
	if (code)
		return hightlight.highlight(text, { language: code }).value

	return hightlight.highlightAuto(text).value
}

const generateType = (text: JsonTextType) => ({
	"text": () => <p>{text.data}</p>,
	"title": () => <Title {...text.config}>{text.data}</Title>,
	"highlight": () => <Highlight />,
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
export function generateText(text: string | JsonTextType | JsonTextType[]): JSX.Element | JSX.Element[] {
	// Pure text
	if (typeof text === "string") return <p>{text}</p>

	// single element
	if (!Array.isArray(text)) {
		// JSX Element type
		if (isValidElement(text))
			return text

		return generateType(text)
	}

	// group
	return text.map(generateText) as any
}