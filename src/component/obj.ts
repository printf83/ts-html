import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Obj extends attr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class obj extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Obj);
	constructor(attr: Obj, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("object", tagConstructor<Obj>("elem", arg));
	}
}
