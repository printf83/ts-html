import { core, tag, attr, elem } from "@printf83/ts-tag";
import { time as Time } from "../interface/_index.js";

export class time extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Time);
	constructor(attr: Time, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("time", core.tagConstructor<Time>("elem", arg));
	}
}
