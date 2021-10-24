export interface JsonTextType {
	type?: "text" | "title" | "column";
	props?: Record<string, any>;
	style?: JSX.HTMLAttributes["style"];
	data: string;
}