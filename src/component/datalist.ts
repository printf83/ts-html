import { core, I } from "@printf83/ts-tag";
import { datalist as Datalist } from "../interface/datalist.js";
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

export class datalist extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Datalist);
	constructor(attr: Datalist, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("datalist", convert(core.tagConstructor<Datalist>("elem", arg)));
	}
}
