import { core, tag, attr, elem } from "@printf83/ts-tag";
import { label as Label } from "../interface/_index.js";

export class label extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Label);
	constructor(attr: Label, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("label", core.tagConstructor<Label>("elem", arg));
	}
}
