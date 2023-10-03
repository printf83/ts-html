import { attr } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructorNoElement } from "@printf83/ts-tag";

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
