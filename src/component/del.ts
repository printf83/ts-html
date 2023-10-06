import { core, I } from "@printf83/ts-tag";
import { del as Del } from "../interface/del.js";

export class del extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Del);
	constructor(attr: Del, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("del", core.tagConstructor("elem", arg));
	}
}
