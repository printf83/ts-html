import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export interface Base extends attr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}

export class base extends tag {
	constructor();
	constructor(attr: Base);
	constructor(...arg: any[]) {
		super("base", tagConstructorNoElement<Base>(arg));
	}
}
