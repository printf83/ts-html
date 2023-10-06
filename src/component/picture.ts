import { core, I } from "@printf83/ts-tag";
import { picture as Picture } from "../interface/_index.js";

export class picture extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("picture", core.tagConstructor<Picture>("elem", arg));
	}
}
