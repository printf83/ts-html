import { core, tag, attr, elem } from "@printf83/ts-tag";

export class thead extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("thead", core.tagConstructor("elem", arg));
	}
}
