// Component
import { createTheme} from "../../../theme"

export default interface PropsInterfaces {
	children: JSX.Element | JSX.Element[] | string | null;

	theme?: Parameters<typeof createTheme>[0];
}