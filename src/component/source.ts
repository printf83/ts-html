import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export interface Source extends attr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}

export class source extends tag {
	constructor();
	constructor(attr: Source);
	constructor(...arg: any[]) {
		super("source", tagConstructorNoElement<Source>(arg));
	}
}
