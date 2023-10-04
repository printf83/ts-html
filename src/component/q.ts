import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Q extends attr {
	cite?: string;
}

export class q extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Q);
	constructor(attr: Q, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("q", tagConstructor<Q>("elem", arg));
	}
}
