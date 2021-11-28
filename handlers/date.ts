import { Container } from "../container";

declare module "../container" {
  interface Container {
    date(): Date;
  }
}

export default function (container: Container) {
  container.set("date", () => new Date());
}
