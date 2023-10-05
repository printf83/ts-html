import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { source as Source } from "../interface/_index.js";

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: any[]) {
		super("source", tagConstructorNoElement<Source>(arg));
	}
}
