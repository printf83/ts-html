import { core, I } from "@printf83/ts-tag";
import { details as Details } from "../interface/details.js";

export class details extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Details);
	constructor(attr: Details, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("details", core.tagConstructor<Details>("elem", arg));
	}
}
