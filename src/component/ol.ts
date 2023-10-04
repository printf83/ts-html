import { mergeClass, tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { li } from "./li.js";

export interface Ol extends attr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;

	item?: elem | elem[];
}

const convert = (attr: Ol) => {
	attr.class = mergeClass(attr.class, [
		attr.unstyle ? "list-unstyle" : undefined,
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

export class ol extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ol", convert(tagConstructor<Ol>("elem", arg)));
	}
}
