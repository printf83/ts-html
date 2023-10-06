import { core, I } from "@printf83/ts-tag";
import { track as Track } from "../interface/track.js";

export class track extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Track);
	constructor(attr: Track, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("track", core.tagConstructor<Track>("elem", arg));
	}
}
