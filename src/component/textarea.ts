import { core, I } from "@printf83/ts-tag";
import { textarea as Textarea } from "../interface/textarea.js";

const convert = (attr: Textarea) => {
	//move value to elem
	if (attr.value) {
		if (attr.elem) {
			if (Array.isArray(attr.elem)) {
				attr.elem = [...attr.elem, attr.value];
			} else {
				attr.elem = [attr.elem, attr.value];
			}
		} else {
			attr.elem = attr.value;
		}

		delete attr.value;
	}

	return attr;
};

export class textarea extends I.tag {
	constructor();
	constructor(attr: Textarea);
	constructor(...arg: any[]) {
		super("textarea", convert(core.tagConstructorNoElement<Textarea>(arg)));
	}
}
