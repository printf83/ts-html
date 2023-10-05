import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { iframe as Iframe } from "../interface/_index.js";

export class iframe extends tag {
	constructor();
	constructor(attr: Iframe);
	constructor(...arg: any[]) {
		super("iframe", tagConstructorNoElement<Iframe>(arg));
	}
}
