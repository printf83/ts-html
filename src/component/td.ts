import { core, tag, elem } from "@printf83/ts-tag";
import { td as Td } from "../interface/_index.js";

export class td extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Td);
	constructor(attr: Td, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("td", core.tagConstructor<Td>("elem", arg));
	}
}
