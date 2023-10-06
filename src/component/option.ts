import { core, I } from "@printf83/ts-tag";
import { option as Option } from "../interface/option.js";

export class option extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Option);
	constructor(attr: Option, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("option", core.tagConstructor<Option>("elem", arg));
	}
}
