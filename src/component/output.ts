import { core, I } from "@printf83/ts-tag";
import { output as Output } from "../interface/output.js";

export class output extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Output);
	constructor(attr: Output, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("output", core.tagConstructor<Output>("elem", arg));
	}
}
