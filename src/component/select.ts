import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";
import { optgroup, Optgroup } from "./optgroup.js";
import { option, Option } from "./option.js";

export interface SelectItem extends Option, Optgroup {
	value?: string;
	label?: string;
	elem?: elem | elem[];
	selected?: boolean;

	item?: SelectItem | SelectItem[];
}

export interface Select extends attr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	item?: SelectItem | SelectItem[];
}

const convert = (attr: Select) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			i = Object.assign({}, i);
			if (i.label && i.item && !i.elem) {
				if (!Array.isArray(i.item)) {
					i.item = [i.item];
				}

				delete i.value;
				delete i.selected;

				return new optgroup(i);
			} else {
				delete i.label;
				delete i.item;

				return new option(i);
			}
		});
	}

	delete attr.item;

	return attr;
};

export class select extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Select);
	constructor(attr: Select, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("select", convert(tagConstructor<Select>("elem", arg)));
	}
}
