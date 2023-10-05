import { attr } from "@printf83/ts-tag";

export interface track extends attr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	attrLabel?: string;
	src?: string;
	srclang?: string;
}
