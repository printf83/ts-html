import { core, tag, attr, elem } from "@printf83/ts-tag";

export class div extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("div", core.tagConstructor("elem", arg));
	}
}
