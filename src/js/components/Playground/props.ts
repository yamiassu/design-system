// Interfaces
import type PlaygroundDescriptor from "../../../types/playgroundDescriptor"

export default interface PropsInterface {
	/**
	 * Render description inline
	 */
	minimal?: boolean;

	/**
	 * The component to be injected props
	 */
	component: (props: any) => any;

	/**
	 * Props descriptors
	 */
	props: Record<string, PlaygroundDescriptor>;

	/**
	 * Default value for the props
	 */
	defaultProps?: Record<string, any>;
}