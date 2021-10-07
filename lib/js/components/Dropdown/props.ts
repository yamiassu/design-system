export interface ContainerProps {
	children: any;
	label: string;
	inline?: boolean;
	onClick?: (open: boolean) => void;
}

export interface ItemProps {
	children: any;
	to?: string;
}