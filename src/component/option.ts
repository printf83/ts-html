import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Option extends attr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}

export class option extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Option);
	constructor(attr: Option, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("option", tagConstructor<Option>("elem", arg));
	}
}
