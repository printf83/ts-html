import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { th as Th } from "../interface/_index.js";

export class th extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Th);
	constructor(attr: Th, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("th", tagConstructor<Th>("elem", arg));
	}
}
