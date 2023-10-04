import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export class head extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: attr);
	constructor(attr: attr, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("head", tagConstructor("elem", arg));
	}
}
