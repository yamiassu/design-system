export default interface PlaygroundDescriptor {
	group?: string;
	type?: "text" | "number" | "boolean" | "select" | "unavailable";
	description?: string;
	options?: Record<string, string> | string[];
	required?: boolean;
}