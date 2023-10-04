import { tagConstructor, tag, attr } from "@printf83/ts-tag";

export interface Style extends attr {
	media?: string;
	type?: "text/css";
}

export class style extends tag {
	constructor();
	constructor(elem: string);
	constructor(attr: Style);
	constructor(attr: Style, elem: string);
	constructor(...arg: any[]) {
		super("style", tagConstructor<Style>("elem", arg));
	}
}
