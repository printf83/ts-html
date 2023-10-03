import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Bdo extends attr {
	dir?: "ltr" | "rtl";
}

export class bdo extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Bdo);
	constructor(attr: Bdo, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("bdo", tagConstructor<Bdo>("elem", arg));
	}
}
