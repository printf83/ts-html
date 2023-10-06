import { core, tag, attr, elem } from "@printf83/ts-tag";
import { fieldset as Fieldset } from "../interface/_index.js";

export class fieldset extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("fieldset", core.tagConstructor<Fieldset>("elem", arg));
	}
}
