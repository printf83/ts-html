import { tagConstructorNoElement, tag, attr } from "@printf83/ts-tag";

export interface Script extends attr {
	async?: boolean;
	crossorigin?: "anonymous" | "use-credentials";
	defer?: boolean;
	integrity?: string;
	nomodule?: boolean;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "same-origin"
		| "strict-origin"
		| "strict-origin-when-cross-origin"
		| "unsafe-url";
	src?: string;
	type?: string;
}

export class script extends tag {
	constructor();
	constructor(attr: Script);
	constructor(...arg: any[]) {
		super("script", tagConstructorNoElement<Script>(arg));
	}
}
