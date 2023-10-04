import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Button extends attr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	formaction?: string;
	formenctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain	";
	formmethod?: "get" | "post";
	formnovalidate?: boolean;
	formtarget?: string;
	name?: string;
	type?: "button" | "reset" | "submit";
	value?: string;
}

export class button extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Button);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("button", tagConstructor<Button>("elem", arg));
	}
}
