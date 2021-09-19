export default interface PropsInterface {
	/**
	 * Render description inline
	 */
	minimal?: boolean;

	/**
	 * The component to be injected props
	 */
	component: (props: any) => JSX.Element;

	/**
	 * Props descriptors
	 */
	props: Record<string, {
		type?: "text" | "number";
		description?: string;
	}>;

	/**
	 * Default value for the props
	 */
	defaultProps?: Record<string, any>;
}