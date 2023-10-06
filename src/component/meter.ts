import { core, I } from "@printf83/ts-tag";
import { meter as Meter } from "../interface/meter.js";

export class meter extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("meter", core.tagConstructor<Meter>("elem", arg));
	}
}
