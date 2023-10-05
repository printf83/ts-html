import { attr } from "@printf83/ts-tag";

export interface style extends attr {
	media?: string;
	type?: "text/css";
}
