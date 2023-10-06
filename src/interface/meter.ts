import { I } from "@printf83/ts-tag";

export interface meter extends I.attr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}
