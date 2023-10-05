import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";
import { link as Link } from "../interface/_index.js";

export class link extends tag {
	constructor();
	constructor(attr: Link);
	constructor(...arg: any[]) {
		super("link", tagConstructorNoElement<Link>(arg));
	}
}
