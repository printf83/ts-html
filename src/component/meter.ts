import { core, tag, attr, elem } from "@printf83/ts-tag";
import { meter as Meter } from "../interface/_index.js";

export class meter extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Meter);
	constructor(attr: Meter, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("meter", core.tagConstructor<Meter>("elem", arg));
	}
}
