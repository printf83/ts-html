import { core, tag, attr, elem } from "@printf83/ts-tag";
import { ins as Ins } from "../interface/_index.js";

export class ins extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ins", core.tagConstructor<Ins>("elem", arg));
	}
}
