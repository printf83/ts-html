import { core, I } from "@printf83/ts-tag";
import { blockquote as Blockquote } from "../interface/blockquote.js";

export class blockquote extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("blockquote", core.tagConstructor<Blockquote>("elem", arg));
	}
}
