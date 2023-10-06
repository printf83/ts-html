import { core, tag } from "@printf83/ts-tag";
import { meta as Meta } from "../interface/_index.js";

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", core.tagConstructorNoElement<Meta>(arg));
	}
}
