import { attr, elem } from "@printf83/ts-tag";
import { optgroup } from "./optgroup.js";
import { option } from "./option.js";

export interface selectitem extends option, optgroup {
	value?: string;
	label?: string;
	elem?: elem | elem[];
	selected?: boolean;

	item?: selectitem | selectitem[];
}

export interface select extends attr {
	autofocus?: boolean;
	disabled?: boolean;
	form?: string;
	multiple?: boolean;
	name?: string;
	required?: boolean;
	size?: number;

	item?: selectitem | selectitem[];
}
