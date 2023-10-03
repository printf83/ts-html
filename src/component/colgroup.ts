import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Colgroup extends attr {
	span?: number;
}

export class colgroup extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Colgroup);
	constructor(attr: Colgroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("colgroup", tagConstructor<Colgroup>("elem", arg));
	}
}
