import { attr } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructorNoElement } from "@printf83/ts-tag";

export class hr extends tag {
	constructor();
	constructor(attr: attr);
	constructor(...arg: any[]) {
		super("hr", tagConstructorNoElement<attr>(arg));
	}
}
