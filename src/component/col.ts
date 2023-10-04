import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export interface Col extends attr {
	span?: number;
}

export class col extends tag {
	constructor();
	constructor(attr: Col);
	constructor(...arg: any[]) {
		super("col", tagConstructorNoElement(arg));
	}
}
