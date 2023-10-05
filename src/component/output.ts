import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { output as Output } from "../interface/_index.js";

export class output extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Output);
	constructor(attr: Output, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("output", tagConstructor<Output>("elem", arg));
	}
}
