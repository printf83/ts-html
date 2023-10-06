import { I } from "@printf83/ts-tag";

export interface source extends I.attr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}
