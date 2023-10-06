import { I } from "@printf83/ts-tag";

export interface base extends I.attr {
	href?: string;
	target?: "_blank" | "_parent" | "_self" | "_top";
}
