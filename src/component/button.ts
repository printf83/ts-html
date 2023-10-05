import { tagConstructor, tag, elem } from "@printf83/ts-tag";
import { button as Button } from "../interface/_index.js";

export class button extends tag {
	constructor();
	constructor(elem: elem | elem[]);
	constructor(attr: Button);
	constructor(attr: Button, elem: elem | elem[]);
	constructor(...arg: any[]) {
		super("button", tagConstructor<Button>("elem", arg));
	}
}
