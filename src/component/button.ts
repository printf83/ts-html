import { core, I } from "@printf83/ts-tag";
import { button as Button } from "../interface/button.js";

export class button extends I.tag {
	constructor();
	constructor(elem: I.elem | I.elem[]);
	constructor(attr: Button);
	constructor(attr: Button, elem: I.elem | I.elem[]);
	constructor(...arg: any[]) {
		super("button", core.tagConstructor<Button>("elem", arg));
	}
}
