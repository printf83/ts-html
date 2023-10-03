import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Th extends attr {
	abbr?: string;
	colspan?: number;
	headers?: string;
	rowspan?: number;
	scope?: "col" | "colgroup" | "row" | "rowgroup";
}

export class th extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Th);
	constructor(attr: Th, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("th", tagConstructor<Th>("elem", arg));
	}
}