import { core, I } from "@printf83/ts-tag";
import { th as Th } from "../interface/th.js";

export class th extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Th);
	constructor(attr: Th, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("th", core.tagConstructor<Th>("elem", arg));
	}
}
