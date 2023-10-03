import { attr, elem } from "@printf83/ts-tag/build/types/interface.js";
import { tag } from "@printf83/ts-tag/build/types/tag.js";
import { tagConstructor } from "@printf83/ts-tag";

export interface Track extends attr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}

const convert = (attr: Track) => {
	if (attr.label) {
		attr.attrLabel = attr.label;
		delete attr.label;
	}

	return attr;
};

export class track extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Track);
	constructor(attr: Track, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("track", convert(tagConstructor<Track>("elem", arg)));
	}
}
