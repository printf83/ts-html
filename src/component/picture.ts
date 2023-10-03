import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Picture extends attr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}

export class picture extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("picture", tagConstructor<Picture>("elem", arg));
	}
}