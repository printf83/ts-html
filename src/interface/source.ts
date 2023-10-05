import { attr } from "@printf83/ts-tag";

export interface source extends attr {
	media?: string;
	sizes?: string;
	src?: string;
	srcset?: string;
	type?: string;

	elem?: undefined;
}
