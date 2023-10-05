import { attr } from "@printf83/ts-tag";

export interface param extends attr {
	name?: string;
	value?: string;
}
