import { attr } from "@printf83/ts-tag";

export interface del extends attr {
	cite?: string;
	datetime?: string | Date;
}
