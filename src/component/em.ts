import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export class em extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("em", tagConstructor("elem", arg));
	}
}
