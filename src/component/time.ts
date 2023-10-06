import { core, I } from "@printf83/ts-tag";
import { time as Time } from "../interface/time.js";

export class time extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Time);
	constructor(attr: Time, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("time", core.tagConstructor<Time>("elem", arg));
	}
}
