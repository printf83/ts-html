import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export class pre extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("pre", tagConstructor("elem", arg));
	}
}
