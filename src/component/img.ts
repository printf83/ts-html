import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { img as Img } from "../interface/_index.js";

export class img extends tag {
	constructor();
	constructor(attr: Img);
	constructor(...arg: any[]) {
		super("img", tagConstructorNoElement<Img>(arg));
	}
}
