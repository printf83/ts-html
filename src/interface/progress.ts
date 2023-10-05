import { attr } from "@printf83/ts-tag";

export interface progress extends attr {
	max?: number;
	value?: number;
}
