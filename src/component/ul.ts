import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { mergeClass, tagConstructor } from "@printf83/ts-tag";
import { li } from "./li.js";

export interface Ul extends attr {
	unstyle?: boolean;
	inline?: boolean;
	item?: elem | elem[];
}

const convert = (attr: Ul) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyled" : undefined,
		attr.inline ? "list-inline" : undefined,
	]);

	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new li(i);
		});
	}

	delete attr.unstyle;
	delete attr.inline;
	delete attr.item;

	return attr;
};

export class ul extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ul", convert(tagConstructor<Ul>("elem", arg)));
	}
}
