import { core, I } from "@printf83/ts-tag";
import { textarea as Textarea } from "../interface/textarea.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class textarea extends I.tag {
	constructor();
	constructor(attr: Textarea);
	constructor(...arg: any[]) {
		super("textarea", core.tagConstructorNoElement<Textarea>(arg));
	}

	convert(attr: Textarea): attr {
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

		return super.convert(attr);
	}
}
