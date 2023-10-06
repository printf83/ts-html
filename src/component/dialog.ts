import { core, tag, attr, elem } from "@printf83/ts-tag";
import { dialog as Dialog } from "../interface/_index.js";

export class dialog extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Dialog);
	constructor(attr: Dialog, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("dialog", core.tagConstructor<Dialog>("elem", arg));
	}
}
