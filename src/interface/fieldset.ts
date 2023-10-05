import { attr } from "@printf83/ts-tag";

export interface fieldset extends attr {
	disabled?: boolean;
	form?: string;
	name?: string;
}
