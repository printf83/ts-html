import { core, tag, attr, elem } from "@printf83/ts-tag";

export class tr extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("tr", core.tagConstructor("elem", arg));
	}
}
