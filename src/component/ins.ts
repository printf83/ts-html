import { core, I } from "@printf83/ts-tag";
import { ins as Ins } from "../interface/_index.js";

export class ins extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("ins", core.tagConstructor<Ins>("elem", arg));
	}
}
