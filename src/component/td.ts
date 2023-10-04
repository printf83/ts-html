import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Td extends attr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}

export class td extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Td);
	constructor(attr: Td, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("td", tagConstructor<Td>("elem", arg));
	}
}
