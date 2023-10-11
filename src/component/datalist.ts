import { core, I } from "@printf83/ts-tag";
import { datalist as Datalist } from "../interface/datalist.js";
import { option } from "./option.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class datalist extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("datalist", core.tagConstructor<Datalist>("elem", arg));
	}

	convert(attr: Datalist): attr {
		if (attr.item && !attr.elem) {
			if (!Array.isArray(attr.item)) {
				attr.item = [attr.item];
			}

			attr.elem = attr.item.map((i) => {
				return new option({ value: i });
			});
		}

		delete attr.item;

		return super.convert(attr);
	}
}
