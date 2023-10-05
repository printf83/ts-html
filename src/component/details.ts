import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { details as Details } from "../interface/_index.js";

export class details extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Details);
	constructor(attr: Details, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("details", tagConstructor<Details>("elem", arg));
	}
}
