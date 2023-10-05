import { attr } from "@printf83/ts-tag";

export interface ins extends attr {
	cite?: string;
	datetime?: string | Date;
}
