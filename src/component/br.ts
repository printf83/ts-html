import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export class br extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super("br", tagConstructorNoElement(arg));
	}
}
