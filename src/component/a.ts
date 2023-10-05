import { mergeClass, mergeObject, tagConstructor, tag, elem } from "@printf83/ts-tag";
import { a as A } from "../interface/_index.js";

const convert = (attr: A) => {
	attr.class = mergeClass(attr.class, [attr.disabled ? "disabled" : undefined]);

	if (attr.disabled) {
		delete attr.href;

		attr = mergeObject(
			{
				aria: { disabled: "true" },
				tabindex: -1,
			},
			attr
		);
	}
	delete attr.disabled;

	return attr;
};

export class a extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: A);
	constructor(attr: A, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("a", convert(tagConstructor<A>("elem", arg)));
	}
}
