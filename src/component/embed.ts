import { I } from "@printf83/ts-tag";
import { embed as Embed } from "../interface/embed.js";

export class embed extends I.tag {
	constructor();
	constructor(type: string, src: string);
	constructor(attr: Embed);
	constructor(...arg: any[]) {
		if (arg.length === 0) {
			super("embed");
		} else if (arg.length === 2) {
			super("embed", { type: arg[0], src: arg[1] } as Embed);
		} else if (arg.length === 1) {
			super("embed", arg[0]);
		}
	}
}
