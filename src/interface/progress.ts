import { I } from "@printf83/ts-tag";

export interface progress extends I.attr {
	max?: number;
	value?: number;
}
