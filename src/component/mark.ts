import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export class mark extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("mark", tagConstructor("elem", arg));
	}
}
