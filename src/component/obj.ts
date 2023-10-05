import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { obj as Obj } from "../interface/_index.js";

export class obj extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("object", tagConstructor<Obj>("elem", arg));
	}
}
