import { core, tag, elem } from "@printf83/ts-tag";
import { li } from "./li.js";
import { ol as Ol } from "../interface/_index.js";

const convert = (attr: Ol) => {
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

export class ol extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("ol", convert(tagConstructor<Ol>("elem", arg)));
	}
}
