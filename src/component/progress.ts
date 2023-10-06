import { core, I } from "@printf83/ts-tag";
import { progress as Progress } from "../interface/_index.js";

export class progress extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Progress);
	constructor(attr: Progress, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("progress", core.tagConstructor<Progress>("elem", arg));
	}
}
