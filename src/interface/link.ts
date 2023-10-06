import { I } from "@printf83/ts-tag";

export interface link extends I.attr {
	crossorigin?: "anonymous" | "use-credentials";
	href?: string;
	hreflang?: string;
	media?: string;
	referrerpolicy?:
		| "no-referrer"
		| "no-referrer-when-downgrade"
		| "origin"
		| "origin-when-cross-origin"
		| "unsafe-url";
	rel?:
		| "alternate"
		| "author"
		| "dns-prefetch"
		| "help"
		| "icon"
		| "license"
		| "next"
		| "pingback"
		| "preconnect"
		| "prefetch"
		| "preload"
		| "prerender"
		| "prev"
		| "search"
		| "stylesheet";

	sizes?: string;
	type?: string;
}
