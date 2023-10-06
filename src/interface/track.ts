import { I } from "@printf83/ts-tag";

export interface track extends I.attr {
	default?: boolean;
	kind?: "captions" | "chapters" | "descriptions" | "metadata" | "subtitles";
	label?: string;
	src?: string;
	srclang?: string;
}
