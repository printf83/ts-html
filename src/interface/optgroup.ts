import { attr } from "@printf83/ts-tag";
import { option } from "./option.js";

export interface optgroup extends attr {
	disabled?: boolean;
	label?: string;
	attrLabel?: string;

	item?: option | option[];
}
