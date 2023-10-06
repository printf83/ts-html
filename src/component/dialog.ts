import { core, I } from "@printf83/ts-tag";
import { dialog as Dialog } from "../interface/dialog.js";

export class dialog extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("dialog", core.tagConstructor<Dialog>("elem", arg));
	}
}
