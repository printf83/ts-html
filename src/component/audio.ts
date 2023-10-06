import { core, I } from "@printf83/ts-tag";
import { audio as Audio } from "../interface/_index.js";

export class audio extends I.tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Audio, elem: I.elem | I.elem[]);

	constructor(...arg: any[]) {
		super("audio", core.tagConstructor("elem", arg));
	}
}
