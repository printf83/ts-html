import { core, I } from "@printf83/ts-tag";
import { q as Q } from "../interface/_index.js";

export class q extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Q);
	constructor(attr: Q, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("q", core.tagConstructor<Q>("elem", arg));
	}
}
