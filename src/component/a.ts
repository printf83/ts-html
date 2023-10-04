import { mergeClass, mergeObject, tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface A extends attr {
	download?: string;
	href?: string;
	hreflang?: string;
	media?: string;
	ping?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "bookmark"
		| "external"
		| "help"
		| "license"
		| "next"
		| "nofollow"
		| "noreferrer"
		| "noopener"
		| "prev"
		| "search"
		| "tag";
	target?: "_blank" | "_parent" | "_self" | "_top";
	type?: string;
	disabled?: boolean;
}

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
