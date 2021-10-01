// Interfaces
import { ContainerProps, ItemProps } from "./props"

export default interface DropdownInterface {
	(props: ContainerProps): JSX.Element;

	Item: (props: ItemProps) => JSX.Element;
}