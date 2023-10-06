import { core, tag, elem } from "@printf83/ts-tag";
import { track as Track } from "../interface/_index.js";

export class track extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Track);
	constructor(attr: Track, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("track", core.tagConstructor<Track>("elem", arg));
	}
}
