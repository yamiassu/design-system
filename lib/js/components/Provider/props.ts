// Component
import theme from "../../../theme"

export default interface PropsInterfaces {
	children: JSX.Element | JSX.Element[] | string | null;

	theme?: Partial<typeof theme>;
}