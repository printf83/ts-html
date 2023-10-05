import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";
import { video as Video } from "../interface/_index.js";

export class video extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Video);
	constructor(attr: Video, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("video", tagConstructor<Video>("elem", arg));
	}
}
