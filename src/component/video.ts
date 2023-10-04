import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Video extends attr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	poster?: string;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class video extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Video);
	constructor(attr: Video, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("video", tagConstructor<Video>("elem", arg));
	}
}
