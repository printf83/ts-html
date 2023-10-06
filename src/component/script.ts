import { core, I } from "@printf83/ts-tag";
import { script as Script } from "../interface/_index.js";

export class script extends I.tag {
	constructor();
	constructor(attr: Script);
	constructor(...arg: any[]) {
		super("script", core.tagConstructorNoElement<Script>(arg));
	}
}
