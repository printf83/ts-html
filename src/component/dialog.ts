import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Dialog extends attr {
	open?: boolean;
}

export class dialog extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("dialog", tagConstructor<Dialog>("elem", arg));
	}
}
