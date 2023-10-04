import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Del extends attr {
	cite?: string;
	datetime?: string | Date;
}

export class del extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Del);
	constructor(attr: Del, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("del", tagConstructor("elem", arg));
	}
}
