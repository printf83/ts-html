import { attr } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructorNoElement } from "@printf83/ts-tag";

export interface Param extends attr {
	name?: string;
	value?: string;
}

export class param extends tag {
	constructor();
	constructor(attr: Param);
	constructor(...arg: any[]) {
		super("param", tagConstructorNoElement<Param>(arg));
	}
}
