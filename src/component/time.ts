import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Time extends attr {
	datetime?: Date;
}

export class time extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Time);
	constructor(attr: Time, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("time", tagConstructor<Time>("elem", arg));
	}
}