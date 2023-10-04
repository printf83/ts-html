import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export interface Meta extends attr {
	charset?: string;
	content?: string;
	httpEquiv?: "content-security-policy" | "content-type" | "default-style" | "refresh";
	name?: "application-name" | "author" | "description" | "generator" | "keywords" | "viewport";
}

export class meta extends tag {
	constructor();
	constructor(attr: Meta);
	constructor(...arg: any[]) {
		super("meta", tagConstructorNoElement<Meta>(arg));
	}
}
