import { attr, elem } from "@printf83/ts-tag";

export interface ul extends attr {
	item?: elem | elem[];
}
