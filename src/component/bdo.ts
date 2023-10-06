import { core, tag, elem } from "@printf83/ts-tag";
import { bdo as Bdo } from "../interface/_index.js";

export class bdo extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("bdo", core.tagConstructor<Bdo>("elem", arg));
	}
}
