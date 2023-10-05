import { attr } from "@printf83/ts-tag";

export interface label extends attr {
	for?: string;
	form?: string;
}
