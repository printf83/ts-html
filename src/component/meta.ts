import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { meta as Meta } from "../interface/_index.js";

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", tagConstructorNoElement<Meta>(arg));
	}
}
