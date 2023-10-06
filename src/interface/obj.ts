import { I } from "@printf83/ts-tag";

export interface obj extends I.attr {
	dataText?: string;
	form?: string;
	name?: string;
	type?: string;
	typemustmatch?: boolean;
	usemap?: string;
}
