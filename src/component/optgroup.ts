import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";
import { option, Option } from "./option.js";

export interface Optgroup extends attr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: Option | Option[];
}

const convert = (attr: Optgroup) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

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
