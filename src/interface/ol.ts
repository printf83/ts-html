import { attr, elem } from "@printf83/ts-tag";

export interface ol extends attr {
	unstyle?: boolean;
	inline?: boolean;
	reversed?: boolean;
	startValue?: number;

	item?: elem | elem[];
}
