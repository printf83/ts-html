import { tagConstructor, tag, attr } from "@printf83/ts-tag";
import { style as Style } from "../interface/_index.js";

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConstructor<Style>("elem", arg));
	}
}
