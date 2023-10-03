import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Fieldset extends attr {
	disabled?: boolean;
	form?: string;
	name?: string;
}

export class fieldset extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Fieldset);
	constructor(attr: Fieldset, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("fieldset", tagConstructor<Fieldset>("elem", arg));
	}
}
