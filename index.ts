import { Container } from "./container";
import date from "./handlers/date";
import random from "./handlers/random";

const container = new Container();
container.use(date);
container.use(random);

console.info(container.date());
console.info(container.random());
