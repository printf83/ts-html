import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { datalist as Datalist } from "../interface/_index.js";
import { option } from "./option.js";

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
