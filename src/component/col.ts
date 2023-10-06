import { core, I } from "@printf83/ts-tag";
import { col as Col } from "../interface/_index.js";

export class col extends I.tag {
	constructor();
	constructor(attr: Col);
	constructor(...arg: any[]) {
		super("col", core.tagConstructorNoElement(arg));
	}
}
