import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { picture as Picture } from "../interface/_index.js";

export class picture extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Picture);
	constructor(attr: Picture, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("picture", tagConstructor<Picture>("elem", arg));
	}
}
