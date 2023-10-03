import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Data extends attr {
	value?: string;
}

export class data extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Data);
	constructor(attr: Data, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("data", tagConstructor<Data>("elem", arg));
	}
}
