import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { input as Input } from "../interface/_index.js";

export class input extends tag {
	constructor();
	constructor(attr: Input);
	constructor(...arg: any[]) {
		super("input", tagConstructorNoElement<Input>(arg));
	}
}
