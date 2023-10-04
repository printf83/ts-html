import { tagConstructor, tag, attr, elem } from "@printf83/ts-tag";

export interface Label extends attr {
	for?: string;
	form?: string;
}

export class label extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Label);
	constructor(attr: Label, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("label", tagConstructor<Label>("elem", arg));
	}
}
