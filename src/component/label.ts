import { core, I } from "@printf83/ts-tag";
import { label as Label } from "../interface/label.js";

export class label extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Label);
	constructor(attr: Label, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("label", core.tagConstructor<Label>("elem", arg));
	}
}
