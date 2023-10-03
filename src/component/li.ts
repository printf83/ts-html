import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { mergeClass, tagConstructor } from "@printf83/ts-tag";

export interface Li extends attr {
	value?: string;
	inline?: boolean;
}

const convert = (attr: Li) => {
	attr.class = mergeClass(attr.class, [attr.inline ? "list-inline-item" : undefined]);
	delete attr.inline;
	return attr;
};

export class li extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Li);
	constructor(attr: Li, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("li", convert(tagConstructor<Li>("elem", arg)));
	}
}
