// Props
import { TabPropsInterface, TabsPropsInterface } from "./props"

export default interface TabsInterface {
	(props: TabsPropsInterface): JSX.Element;

	Tab: (props: TabPropsInterface) => JSX.Element;
}