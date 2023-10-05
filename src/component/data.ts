import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { data as Data } from "../interface/_index.js";

export class data extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Data);
	constructor(attr: Data, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("data", tagConstructor<Data>("elem", arg));
	}
}
