import { core, tag, attr, elem } from "@printf83/ts-tag";
import { map as Map } from "../interface/_index.js";

export class map extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Map);
	constructor(attr: Map, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("map", core.tagConstructor<Map>("elem", arg));
	}
}
