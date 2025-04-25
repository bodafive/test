import { getRandomNumber } from "./src";

console.log("Hello via Bun!");

setInterval(() => {
    console.log("Hello again!", getRandomNumber());
}, 2000)