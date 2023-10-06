import { core, I } from "@printf83/ts-tag";
import { iframe as Iframe } from "../interface/iframe.js";

export class iframe extends I.tag {
	constructor();
	constructor(attr: Iframe);
	constructor(...arg: any[]) {
		super("iframe", core.tagConstructorNoElement<Iframe>(arg));
	}
}
