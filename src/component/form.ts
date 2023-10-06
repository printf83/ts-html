import { core, I } from "@printf83/ts-tag";
import { form as Form } from "../interface/_index.js";

export class form extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Form);
	constructor(attr: Form, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("form", core.tagConstructor<Form>("elem", arg));
	}
}
