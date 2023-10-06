import { I } from "@printf83/ts-tag";
import { option } from "./option.js";

export interface optgroup extends I.attr {
	disabled?: boolean;
	label?: string;

	item?: option | option[];
}
