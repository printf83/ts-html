import { core, tag, attr, elem } from "@printf83/ts-tag";
import { del as Del } from "../interface/_index.js";

export class del extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Del);
	constructor(attr: Del, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("del", core.tagConstructor("elem", arg));
	}
}
