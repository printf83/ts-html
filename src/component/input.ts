import { core, I } from "@printf83/ts-tag";
import { input as Input } from "../interface/_index.js";

export class input extends I.tag {
	constructor();
	constructor(attr: Input);
	constructor(...arg: any[]) {
		super("input", core.tagConstructorNoElement<Input>(arg));
	}
}
