import { core, I } from "@printf83/ts-tag";
import { source as Source } from "../interface/source.js";

export class source extends I.tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: any[]) {
		super("source", core.tagConstructorNoElement<Source>(arg));
	}
}
