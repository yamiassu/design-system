type code = "javascript" | "html" | "xml" | "bash" | "css" | "markdown" | "json" | "scss" | "sql" | "typescript" | "yaml" | "plain";

type CommonHighlight = {
	code?: code;
	name?: string;
}

type ChildHighlight = {
	children: string;
	data?: never;
} & CommonHighlight

type DataHighlight = {
	children?: never;
	data?: string;
} & CommonHighlight

type PropsInterface = DataHighlight | ChildHighlight
export default PropsInterface