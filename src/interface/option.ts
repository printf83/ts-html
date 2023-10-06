import { I } from "@printf83/ts-tag";

export interface option extends I.attr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}
