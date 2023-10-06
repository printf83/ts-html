import { core, I } from "@printf83/ts-tag";
import { style as Style } from "../interface/style.js";

export class style extends I.tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", core.tagConstructor<Style>("elem", arg));
	}
}
