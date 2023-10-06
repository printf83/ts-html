import { core, tag } from "@printf83/ts-tag";
import { param as Param } from "../interface/_index.js";

export class param extends tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: any[]) {
		super("param", core.tagConstructorNoElement<Param>(arg));
	}
}
