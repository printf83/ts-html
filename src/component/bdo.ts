import { core, I } from "@printf83/ts-tag";
import { bdo as Bdo } from "../interface/bdo.js";

export class bdo extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("bdo", core.tagConstructor<Bdo>("elem", arg));
	}
}
