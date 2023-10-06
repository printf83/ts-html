import { core, tag, attr, elem } from "@printf83/ts-tag";

export class kbd extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("kbd", core.tagConstructor("elem", arg));
	}
}
