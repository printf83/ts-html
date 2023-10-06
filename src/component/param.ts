import { core, I } from "@printf83/ts-tag";
import { param as Param } from "../interface/param.js";

export class param extends I.tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: any[]) {
		super("param", core.tagConstructorNoElement<Param>(arg));
	}
}
