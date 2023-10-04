import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Blockquote extends attr {
	cite?: string;
}

export class blockquote extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("blockquote", tagConstructor<Blockquote>("elem", arg));
	}
}
