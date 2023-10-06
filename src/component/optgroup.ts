import { core, tag, elem } from "@printf83/ts-tag";
import { option } from "./option.js";
import { optgroup as Optgroup } from "../interface/_index.js";

const convert = (attr: Optgroup) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option(i);
		});
	}

	delete attr.item;

	return attr;
};

export class optgroup extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Optgroup);
	constructor(attr: Optgroup, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("optgroup", convert(tagConstructor<Optgroup>("elem", arg)));
	}
}
