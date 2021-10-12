export default interface PlaygroundDescriptor {
	group?: string;
	type?: "input" | "text" | "number" | "boolean" | "select" | "unavailable";
	description?: string;
	options?: Record<string, string> | string[];
	required?: boolean;
}