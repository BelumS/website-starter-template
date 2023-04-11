import { qs, addClass } from "./utils/dom.js";
import { SHOW_CLASS } from "./constants/constants.js";

const html = document?.documentElement;
const head = html?.firstElementChild;
const body = html?.lastElementChild;

console.log(html);
console.log(head);
console.log(body);