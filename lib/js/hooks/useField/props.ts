export default interface iInputProps {
	name 										: string;
	filters? 									: (value : any) => any | Array<(value : any) => any>;
	validates?									: (value : any) => any | Array<(value : any) => any>;
	children? 									: any;
	multiple? 									: boolean;

	[ index : string ]							: any;
}
