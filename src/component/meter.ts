import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Meter extends attr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}

export class meter extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("meter", tagConstructor<Meter>("elem", arg));
	}
}
