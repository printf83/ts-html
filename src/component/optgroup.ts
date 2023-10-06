import { core, I } from "@printf83/ts-tag";
import { option } from "./option.js";
import { optgroup as Optgroup } from "../interface/optgroup.js";

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

export class optgroup extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Optgroup);
	constructor(attr: Optgroup, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("optgroup", convert(core.tagConstructor<Optgroup>("elem", arg)));
	}
}
