import { attr } from "@printf83/ts-tag";

export interface audio extends attr {
	autoplay?: boolean;
	controls?: boolean;
	loop?: boolean;
	muted?: boolean;
	preload?: "auto" | "metadata" | "none";
	src?: string;
}
