import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { option as Option } from "../interface/_index.js";

export class option extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Option);
	constructor(attr: Option, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("option", tagConstructor<Option>("elem", arg));
	}
}
