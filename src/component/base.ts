import { core, tag } from "@printf83/ts-tag";
import { base as Base } from "../interface/_index.js";

export class base extends tag {
	constructor();
	constructor(attr: Base);
	constructor(...arg: any[]) {
		super("base", core.tagConstructorNoElement<Base>(arg));
	}
}
