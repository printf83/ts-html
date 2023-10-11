import { core, I } from "@printf83/ts-tag";
import { li } from "./li.js";
import { ol as Ol } from "../interface/ol.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class ol extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Ol);
	constructor(attr: Ol, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("ol", core.tagConstructor<Ol>("elem", arg));
	}

	convert(attr: Ol): attr {
		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new li(i);
			});
		}

		delete attr.item;

		return super.convert(attr);
	}
}
