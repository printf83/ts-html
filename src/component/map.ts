import { core, I } from "@printf83/ts-tag";
import { map as Map } from "../interface/map.js";

export class map extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Map);
	constructor(attr: Map, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("map", core.tagConstructor<Map>("elem", arg));
	}
}
