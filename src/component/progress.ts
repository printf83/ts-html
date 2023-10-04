import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Progress extends attr {
	max?: number;
	value?: number;
}

export class progress extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("progress", tagConstructor<Progress>("elem", arg));
	}
}
