import { core, I } from "@printf83/ts-tag";
import { li } from "./li.js";
import { ol as Ol } from "../interface/ol.js";

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

export class ol extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("ol", convert(core.tagConstructor<Ol>("elem", arg)));
	}
}
