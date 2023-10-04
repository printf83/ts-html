import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export class hr extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super("hr", tagConstructorNoElement<attr>(arg));
	}
}
