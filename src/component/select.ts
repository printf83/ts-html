import { core, I } from "@printf83/ts-tag";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";
import { select as Select } from "../interface/select.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class select extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Select);
	constructor(attr: Select, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("select", core.tagConstructor<Select>("elem", arg));
	}

	convert(attr: Select): attr {
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

		return super.convert(attr);
	}
}
