import { core, I } from "@printf83/ts-tag";

export class rp extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: I.attr);
	constructor(attr: I.attr, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("rp", core.tagConstructor("elem", arg));
	}
}
