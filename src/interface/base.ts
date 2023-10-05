import { attr } from "@printf83/ts-tag";

export interface base extends attr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}
