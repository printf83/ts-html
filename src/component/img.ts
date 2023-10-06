import { core, I } from "@printf83/ts-tag";
import { img as Img } from "../interface/img.js";

export class img extends I.tag {
	constructor();
	constructor(attr: Img);
	constructor(...arg: any[]) {
		super("img", core.tagConstructorNoElement<Img>(arg));
	}
}
