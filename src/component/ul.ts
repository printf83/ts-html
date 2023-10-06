import { core, tag, elem } from "@printf83/ts-tag";
import { li } from "./li.js";
import { ul as Ul } from "../interface/_index.js";

const convert = (attr: Ul) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new li(i);
		});
	}

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
