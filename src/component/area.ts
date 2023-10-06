import { core, I } from "@printf83/ts-tag";
import { area as Area } from "../interface/_index.js";

export class area extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Area);
	constructor(attr: Area, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("area", core.tagConstructor<Area>("elem", arg));
	}
}
