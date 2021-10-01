export interface JsonTextType {
	type?: "text" | "title" | "column";
	config?: Record<string, any>;
	data: string;
}