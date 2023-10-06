import { core, I } from "@printf83/ts-tag";
import { link as Link } from "../interface/_index.js";

export class link extends I.tag {
	constructor();
	constructor(attr: Link);
	constructor(...arg: any[]) {
		super("link", core.tagConstructorNoElement<Link>(arg));
	}
}
