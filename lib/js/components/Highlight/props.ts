type code = "javascript";

type ChildHighlight = {
	children: string;
	data?: never;
	code?: code;
}

type DataHighlight = {
	children?: never;
	data?: string;
	code?: code;
}

type PropsInterface = DataHighlight | ChildHighlight
export default PropsInterface