import { core, I } from "@printf83/ts-tag";

export class br extends I.tag {
	constructor();
	constructor(attr: I.attr);
	constructor(...arg: any[]) {
		super("br", core.tagConstructorNoElement(arg));
	}
}
