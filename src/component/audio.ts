import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Audio extends attr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}

export class audio extends tag {
	constructor();
	constructor(attr: Audio);
	constructor(elem: elem | elem[]);
	constructor(attr: Audio, elem: elem | elem[]);

	constructor(...arg: any[]) {
		super("audio", tagConstructor("elem", arg));
	}
}
