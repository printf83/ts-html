import { core, I } from "@printf83/ts-tag";
import { colgroup as Colgroup } from "../interface/_index.js";

export class colgroup extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("colgroup", core.tagConstructor<Colgroup>("elem", arg));
	}
}
