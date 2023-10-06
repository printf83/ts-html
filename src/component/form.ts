import { core, tag, attr, elem } from "@printf83/ts-tag";
import { form as Form } from "../interface/_index.js";

export class form extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Form);
	constructor(attr: Form, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("form", core.tagConstructor<Form>("elem", arg));
	}
}
