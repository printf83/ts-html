import { core, tag, attr, elem } from "@printf83/ts-tag";
import { progress as Progress } from "../interface/_index.js";

export class progress extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("progress", core.tagConstructor<Progress>("elem", arg));
	}
}
