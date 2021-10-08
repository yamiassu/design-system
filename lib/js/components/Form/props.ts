export default interface iFormProps {
	data?: Record<string, any>;
	initialData?: any;
	file?: boolean;
	onError? (value : any): void;
	onChange? (value : any): any | boolean | void;
	onSubmit? (value : any): Promise<boolean> | boolean | void | any;
	children: any;
	validateOnChange?: boolean;

	[ index : string ]: any;
}