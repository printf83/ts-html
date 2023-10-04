import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export class figcaption extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("figcaption", tagConstructor("elem", arg));
	}
}
