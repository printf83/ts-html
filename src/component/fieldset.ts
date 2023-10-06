import { core, I } from "@printf83/ts-tag";
import { fieldset as Fieldset } from "../interface/_index.js";

export class fieldset extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("fieldset", core.tagConstructor<Fieldset>("elem", arg));
	}
}
