import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Ins extends attr {
	cite?: string;
	datetime?: string | Date;
}

export class ins extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ins);
	constructor(attr: Ins, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ins", tagConstructor<Ins>("elem", arg));
	}
}
