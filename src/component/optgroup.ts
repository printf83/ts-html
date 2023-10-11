import { core, I } from "@printf83/ts-tag";
import { option } from "./option.js";
import { optgroup as Optgroup } from "../interface/optgroup.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class optgroup extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Optgroup);
	constructor(attr: Optgroup, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("optgroup", core.tagConstructor<Optgroup>("elem", arg));
	}

	convert(attr: Optgroup): attr {
		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new option(i);
			});
		}

		delete attr.item;

		return super.convert(attr);
	}
}
