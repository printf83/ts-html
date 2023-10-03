import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";
import { option } from "./option.js";

export interface Datalist extends attr {
	item?: string | string[];
}

const convert = (attr: Datalist) => {
	if (attr.item && !attr.elem) {
		if (!Array.isArray(attr.item)) {
			attr.item = [attr.item];
		}

		attr.elem = attr.item.map((i) => {
			return new option({ value: i });
		});
	}

	delete attr.item;

	return attr;
};

export class datalist extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("datalist", convert(tagConstructor<Datalist>("elem", arg)));
	}
}
