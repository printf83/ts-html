import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Map extends attr {
	name?: string;
}

export class map extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Map);
	constructor(attr: Map, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("map", tagConstructor<Map>("elem", arg));
	}
}
