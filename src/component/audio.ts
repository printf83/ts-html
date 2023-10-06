import { core, tag, elem } from "@printf83/ts-tag";
import { audio as Audio } from "../interface/_index.js";

export class audio extends tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: elem | elem[]);
	constructor(attr: Audio, elem: elem | elem[]);

	constructor(...arg: any[]) {
		super("audio", core.tagConstructor("elem", arg));
	}
}
