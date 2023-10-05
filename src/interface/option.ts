import { attr } from "@printf83/ts-tag";

export interface option extends attr {
	disabled?: boolean;
	selected?: boolean;
	value?: string;
}
