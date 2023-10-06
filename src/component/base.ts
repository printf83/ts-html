import { core, I } from "@printf83/ts-tag";
import { base as Base } from "../interface/base.js";

export class base extends I.tag {
	constructor();
	constructor(attr: Base);
	constructor(...arg: any[]) {
		super("base", core.tagConstructorNoElement<Base>(arg));
	}
}
