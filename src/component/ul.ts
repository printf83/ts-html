import { core, I } from "@printf83/ts-tag";
import { li } from "./li.js";
import { ul as Ul } from "../interface/ul.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class ul extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Ul);
	constructor(attr: Ul, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("ul", core.tagConstructor<Ul>("elem", arg));
	}

	convert(attr: Ul): attr {
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
	}
}
