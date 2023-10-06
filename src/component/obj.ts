import { core, I } from "@printf83/ts-tag";
import { obj as Obj } from "../interface/_index.js";

export class obj extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("object", core.tagConstructor<Obj>("elem", arg));
	}
}
