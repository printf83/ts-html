import { core, I } from "@printf83/ts-tag";
import { data as Data } from "../interface/_index.js";

export class data extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Data);
	constructor(attr: Data, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("data", core.tagConstructor<Data>("elem", arg));
	}
}
