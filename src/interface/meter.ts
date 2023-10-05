import { attr } from "@printf83/ts-tag";

export interface meter extends attr {
	form?: string;
	high?: number;
	low?: number;
	max?: number;
	min?: number;
	optimum?: number;
	value?: number;
}
