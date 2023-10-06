import { core, tag, elem } from "@printf83/ts-tag";
import { blockquote as Blockquote } from "../interface/_index.js";

export class blockquote extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Blockquote);
	constructor(attr: Blockquote, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("blockquote", core.tagConstructor<Blockquote>("elem", arg));
	}
}
