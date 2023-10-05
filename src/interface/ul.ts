import { attr, elem } from "@printf83/ts-tag";

export interface ul extends attr {
	unstyle?: boolean;
	inline?: boolean;
	item?: elem | elem[];
}
