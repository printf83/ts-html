import { core, I } from "@printf83/ts-tag";
import { meta as Meta } from "../interface/meta.js";

export class meta extends I.tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", core.tagConstructorNoElement<Meta>(arg));
	}
}
