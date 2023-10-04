import { mergeClass, tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Abbr extends attr {
	small?: true;
}

const convert = (attr: Abbr) => {
	attr.class = mergeClass(attr.class, attr.small ? "initialism" : undefined);
	delete attr.small;
	return attr;
};

export class abbr extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Abbr);
	constructor(attr: Abbr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("abbr", convert(tagConstructor<Abbr>("elem", arg)));
	}
}
