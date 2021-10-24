// Packages
import { h, isValidElement } from "preact"
import hightlight from "highlight.js/lib/common"

// Components
import { Grid, Title, Highlight } from "../../.."

// Interfaces
import type { JsonTextType } from "../../../types/text"

/**
 * ### Generate highlight
 *
 * Uses highlight.js to transform your raw code into a parseable one
 *
 * @param text Text to transform into highlight
 * @param code Code language
 * @returns html raw string
 */
export function generateHightlight(text: string, code?: string) {
	if (code)
		return hightlight.highlight(text, { language: code }).value

	return hightlight.highlightAuto(text).value
}

const generateType = (text: JsonTextType) => ({
	"paragraph": () => Array.isArray(text.data) ? text.data.map(i => generateText(i, "p")).reduce((prev: any, curr) => [...prev, " ", curr], []) : generateText(text.data, "p"),
	"text": () => text.data,
	"span": () => <span {...text.props} style={text.style}>{text.data}</span>,
	"title": () => <Title {...text.props}>{text.data}</Title>,
	"highlight": () => <Highlight />,
	"column": () => <Grid {...text.props}>{typeof text.data === "string" ? text.data : generateText(text.data)}</Grid>,
})[text.type || "text"]()

/**
 * ### generateText
 *
 * Transforms a json standarlized text format into formatting JSX
 *
 * @param text
 * @returns
 */
export function generateText(text: string | JsonTextType | JsonTextType[], wrap?: JSX.Element | string): JSX.Element | JSX.Element[] | string {
	// Pure text
	if (typeof text === "string") return text

	// single element
	if (!Array.isArray(text)) {
		// JSX Element type
		if (isValidElement(text))
			return text

		return generateType(text)
	}

	// group
	if (wrap)
		return h(wrap as any, {children: text.map(i => generateText(i, wrap || "p"))}) as any

	return text.map(i => generateText(i, wrap || "p")) as any
}