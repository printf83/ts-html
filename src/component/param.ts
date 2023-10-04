import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

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
