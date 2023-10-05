import { attr } from "@printf83/ts-tag";

export interface picture extends attr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}
