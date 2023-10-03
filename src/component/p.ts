import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { mergeClass, tagConstructor } from "@printf83/ts-tag";

export interface P extends attr {
	lead?: boolean;
}

const convert = (attr: P) => {
	attr.class = mergeClass(attr.class, attr.lead ? "lead" : undefined);
	delete attr.lead;
	return attr;
};

export class p extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: P);
	constructor(attr: P, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("p", convert(tagConstructor<P>("elem", arg)));
	}
}
