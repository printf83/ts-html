import { core, I } from "@printf83/ts-tag";

export class hr extends I.tag {
	constructor();
	constructor(attr: I.attr);
	constructor(...arg: any[]) {
		super("hr", core.tagConstructorNoElement(arg));
	}
}
