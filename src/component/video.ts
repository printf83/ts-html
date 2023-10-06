import { core, I } from "@printf83/ts-tag";
import { video as Video } from "../interface/video.js";

export class video extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Video);
	constructor(attr: Video, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("video", core.tagConstructor<Video>("elem", arg));
	}
}
