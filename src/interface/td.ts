import { attr } from "@printf83/ts-tag";

export interface td extends attr {
	colspan?: number;
	headers?: string;
	rowspan?: number;
}
