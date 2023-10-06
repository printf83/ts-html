import { core, I } from "@printf83/ts-tag";
import { td as Td } from "../interface/td.js";

export class td extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Td);
	constructor(attr: Td, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("td", core.tagConstructor<Td>("elem", arg));
	}
}
