import { core, I } from "@printf83/ts-tag";
import { a as A } from "../interface/a.js";
import { attr } from "@printf83/ts-tag/build/types/interface/attr.js";

export class a extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: A);
	constructor(attr: A, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("a", core.tagConstructor<A>("elem", arg));
	}

	convert(attr: A): attr {
		attr.class = core.mergeClass(attr.class, [attr.disabled ? "disabled" : undefined]);

		if (attr.disabled) {
			delete attr.href;

			attr = core.mergeObject(
				{
					aria: { disabled: "true" },
					tabindex: -1,
				},
				attr
			);
		}
		delete attr.disabled;

		return super.convert(attr);
	}
}
