import { core, tag, elem } from "@printf83/ts-tag";
import { area as Area } from "../interface/_index.js";

export class area extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Area);
	constructor(attr: Area, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("area", core.tagConstructor<Area>("elem", arg));
	}
}
